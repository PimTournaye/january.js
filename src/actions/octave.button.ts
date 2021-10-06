import Button from "./button";
import { Note } from "../logic/Note";

class Octave extends Button{

    onPress(): void {
        this.playNote();
        this.playOctave();
    }

     public playOctave(){
        let octaveTone:String = "";
        let octaveDownorUp: Array<number> = [-12, 12]

        for (let i = 0; i < Note.DATABASE.length; i++) {
            if (Note.lastAbsolute == Note.DATABASE[i]) {
                console.log('playing octave tone')
				while (octaveTone == "" || octaveTone == null) octaveTone = Note.DATABASE[i + octaveDownorUp[Math.floor(Math.random() * octaveDownorUp.length)]];
			}
        }
        //Button.MIDIplay(octaveTone);
        Note.lastOctave = octaveTone;
    }   

    public toString(): string {
        return "Octave";
    }
}

const octave = new Octave();
export default octave;