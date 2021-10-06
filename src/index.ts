import { delay } from './utils/delay';
import mode from './logic/Mode';
import chord from './actions/chord.action';
import small from './actions/small.action';
import transpose from './actions/transpose.action';
import octave from './actions/octave.action';
import Action from './actions/action';

const ACTIONS_NAMES_ARRAY: Array<Action> = [small,chord,transpose,octave];

main()

async function main(){
    mode.init();

    for await (const action of ACTIONS_NAMES_ARRAY) {
        console.log(action.toString() + " is playing")
        action.onPress()
        await delay(3000);
    }
}




// Note.lastRecorded = 'C3';
// Mode.index = Math.floor(Math.random() * 4);
// Mode.current = Mode.IONIAN;
// Note.lastOctave = 'C3';

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

