import { delay } from './utils/delay';
import {Intervals} from './logic/Intervals';
import {Key} from './logic/Key';
import {Note} from './logic/Note';
import {Mode} from './logic/Mode';
import { WebMidi } from 'webmidi';
import chord from './actions/chord.button';
import small from './actions/small.button';
import transpose from './actions/transpose.button';
import octave from './actions/octave.button';
import Button from './actions/button';

Note.lastRecorded = 'C3';
Mode.index = Math.floor(Math.random() * 4);
Mode.current = Mode.IONIAN;
Note.lastOctave = 'C3';
Mode.init();

const actionsArray: Array<Button> = [small,chord,transpose,octave];

main()

async function main(){
    for await (const action of actionsArray) {
        console.log(action.toString() + " is playing")
        action.onPress()
        await delay(3000);
    }
}




//WebMidi.enable().then(onEnabled).catch((err: any) => console.log(err));

// let output = WebMidi.getOutputByName("toKeyscape").channels[1]; 


// function onEnabled() {
//   //console.log(WebMidi.inputs);
//   //console.log(WebMidi.inputs[3]);
//   //console.log("Channel", WebMidi.inputs[3].channels[1]);

  
//   console.log(output)
//     //output.playNote(["G4", "G5"], {duration: 10000});
//     //Chord.Chord.onPress();
// };

