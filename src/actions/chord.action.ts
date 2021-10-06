import Button from "./action";
import { Mode } from "../logic/Mode";

class Chord extends Button {

    onPress(): void {
        Mode.change();
        this.playNote();
        this.playChord();
    }

    public toString(): string {
        return "Chord";
    }
}

const chord = new Chord();
export default chord;