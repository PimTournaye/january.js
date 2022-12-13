import Action from "./action";
import note from "../logic/Note";

class Octave extends Action{

    onPress() {
        return [this.getNote(), this.getOctave()]
    }

     public getOctave(){
        let octaveTone: string = "";
        let octaveDownorUp: Array<number> = [-12, 12]

        for (let i = 0; i < note.DATABASE.length; i++) {
            if (note.lastPlayed === note.DATABASE[i]) {
                console.log('playing octave tone')
				while (octaveTone === "" || octaveTone == null || octaveTone === undefined) octaveTone = note.DATABASE[i + octaveDownorUp[Math.floor(Math.random() * octaveDownorUp.length)]];
			}
        }
        note.lastOctave = octaveTone;
        return octaveTone;
    }   

    public toString(): string {
        return "Octave";
    }
}

const octave = new Octave();
export default octave;