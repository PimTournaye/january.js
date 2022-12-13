import Action from "./action";

class Vamp extends Action {

    onPress() {
        return [...this.getChord()]
    }

    public toString(): string {
        return "Vamp";
    }
}

const vamp = new Vamp();
export default vamp;