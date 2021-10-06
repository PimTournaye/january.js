import { Button } from "../actions/Button";
import { Mode } from "../logic/Mode";

export class Chord extends Button {

    public static onPress(){
        Mode.change();
        Button.playNote();
        Button.playChord();
    }
}

