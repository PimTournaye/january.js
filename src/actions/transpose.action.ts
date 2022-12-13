import Action from "./action";
import key from "../logic/Key";
import mode  from "../logic/Mode";

class Transpose extends Action{
    onPress() {
        mode.change();
        key.change();
        return [...this.getChord()]
    }

    public toString(): string {
        return "Transpose";
    }
}

const transpose = new Transpose();
export default transpose;
