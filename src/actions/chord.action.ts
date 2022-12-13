import Action from "./action";
import mode from "../logic/Mode";

class Chord extends Action {

    onPress() {
        mode.change();
        return [...this.getChord()]
    }

    public toString(): string {
        return "Chord";
    }
}

const chord = new Chord();
export default chord;