import key from "./Key";
import mode from "./Mode";

class Intervals {
	public DATABASE: Array<string> = [
		"one1",
		"two1",
		"thr1",
		"for1",
		"fiv1",
		"six1",
		"sev1",
		"one2",
		"two2",
		"thr2",
		"for2",
		"fiv2",
		"six2",
		"sev2",
		"one3",
		"two3",
		"thr3",
		"for3",
		"fiv3",
		"six3",
		"sev3",
		"one4",
	];

	public updated: boolean = false;
	public loadout: Map<string, string>;

	public populate() {
		console.log("populating");
		if (this.updated === false) {
			let modeOffset: number;
			if (key.current[0] === "C Minor") {
				modeOffset = mode.DATABASE[mode.index].minorPos;
			} else {
				modeOffset = mode.DATABASE[mode.index].majorPos;
			}

			this.loadout = new Map();

			this.DATABASE.forEach((element, index) => {
				this.loadout.set(element, key.DATABASE[key.index][index + modeOffset]);
			});

			this.updated = true;
		} else return this.loadout;
	}
}

const intervals = new Intervals();
export default intervals;
