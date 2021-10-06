import { Button } from "../actions/Button";
import { Key } from "../logic/Key";
import { Mode } from "../logic/Mode";

export class Transpose extends Button{

    public static onPress(){
        console.log('changing mode')
        Mode.change();
        console.log('changing key')
        Key.change();
        console.log('playing transposition chord')
        Button.playChord();
    }
}

