import Button from "./button";
import { Key } from "../logic/Key";
import { Mode } from "../logic/Mode";

class Transpose extends Button{
    onPress(): void {
        console.log('changing mode')
        Mode.change();
        console.log('changing key')
        Key.change();
        console.log('playing transposition chord')
        this.playChord();
    }

    public toString(): string {
        return "Chord";
    }
}

const transpose = new Transpose();
export default transpose;
