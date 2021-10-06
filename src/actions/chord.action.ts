import Action from "./action";
import mode from "../logic/Mode";

class Chord extends Action {

    onPress(): void {
        mode.change();
        this.playNote();
        this.playChord();
    }

    public toString(): string {
        return "Chord";
    }
}

const chord = new Chord();
export default chord;