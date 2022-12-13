import key from "../logic/Key";
import note from "../logic/Note";
import mode from "../logic/Mode";
import intervals from "../logic/Intervals";

abstract class Action {
	public playsNote: boolean = false;
	public noteName: string = "n/a";

	public type: string = "";
	private static lastSoundtype: string;

	abstract onPress(): void;
	abstract toString(): string;

	protected getNote() {
		return this.generateNote();
	}

	protected get(options: Array<string>) {
		let noteName = this.noteAdjustments(options);
		return noteName;
	}

	protected getChord() {
		let chordTones = mode.current.chords[Math.floor(Math.random() * mode.current.chords.length)];
		return chordTones;
	}

	protected generateNote() {
		let played: boolean = false;
		let optionSets: Array<Array<string>>;

		optionSets = mode.current.logic;
		console.log(intervals.loadout);
		for (let j = 0; j < intervals.DATABASE.length; j++) {
			if (note.lastPlayed === intervals.loadout.get(intervals.DATABASE[j])) {
				this.get(optionSets[j]);
				played = true;
			}
		}
		if ((played = false)) {
			this.get(optionSets[22]);
		} //edge case
	}

	//Edge cases and preventing chromatism hell
	protected noteAdjustments(options: Array<string>): string {
		let adjustedNote: string | null | undefined
		let random: number = 0;

		// NOTE PREVENTIONS
		random = Math.floor(Math.random() * options.length);
		adjustedNote = intervals.loadout.get(options[random]);

		// Halve Probability of Trills and Repeats
		if (adjustedNote === note.secondToLastPlayed || adjustedNote === note.lastPlayed) {
			random = Math.floor(Math.random() * options.length);
			adjustedNote = intervals.loadout.get(options[random]);
		}

		let g = 0;
		while (
			g < 100 &&
			(note == null ||
				(adjustedNote === note.lastHarmony && Action.lastSoundtype === "Harmony") ||
				(adjustedNote === note.lastOctave && Action.lastSoundtype === "Octave")) ||
				(this.type === "Octave" && (adjustedNote === intervals.loadout.get("for1") || 
				adjustedNote === intervals.loadout.get("for2") || 
				adjustedNote === intervals.loadout.get("for3")))
		) {
			random = Math.random() * options.length - 1;
			adjustedNote = intervals.loadout.get(options[random]);
			g++;
		}

		// Prevent certain tensions from triggering on record mode key changes
		if (
			key.justChanged &&
			mode.current !== mode.MIXOLYDIAN &&
			(	adjustedNote === intervals.loadout.get("two1") ||
			adjustedNote === intervals.loadout.get("for1") ||
			adjustedNote === intervals.loadout.get("six1") ||
			adjustedNote === intervals.loadout.get("for2") ||
				adjustedNote === intervals.loadout.get("six2") ||
				adjustedNote === intervals.loadout.get("for3") ||
				adjustedNote === intervals.loadout.get("six3"))
		) {
			for (let desc in intervals.loadout.keys()) {
				if (adjustedNote === intervals.loadout.get(desc)) {
					for (let j = 0; j < intervals.DATABASE.length - 1; j++) {
						if (intervals.loadout.get(desc) === intervals.DATABASE[j]) {
							// change new note to be +/- 1 interval if the key just changed.
							adjustedNote = intervals.loadout.get(
								intervals.DATABASE[j + Math.random() < 0.5 ? -1 : 1],
							);
							break;
						}
					}
				}
			}
			key.justChanged = false;
		}
		return adjustedNote as string;
	}
}
export default Action;