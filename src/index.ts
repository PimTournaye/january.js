import {Intervals} from './logic/Intervals';
import {Key} from './logic/Key';
import {Note} from './logic/Note';
import {Mode} from './logic/Mode';
import {Small} from './sounds/Small';
import {Harmony} from './sounds/Harmony';
import {Octave} from './sounds/Octave';
import {Button} from './actions/Button';
import {Transpose} from './sounds/Transpose';
import {Chord} from './sounds/Chord';
import { WebMidi } from 'webmidi';

// import * as WebMidi from 'webmidi';
// //import WebMidi from 'webmidi';
// const {WebMidi}: any = require("webmidi");


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



Note.lastRecorded = 'C3';
Mode.index = Math.floor(Math.random() * 4);
Mode.current = Mode.IONIAN;
Note.lastOctave = 'C3';
Mode.init();

while(true){
    Button.playChord();
    setTimeout(() => {
        console.log('Small playNote');
        Small.playNote();
    }, 3000);
    
    setTimeout(() => {
        console.log('Chord playChord');
        Chord.onPress();
    }, 6000);
    
    setTimeout(() => {
        console.log('playing Transpose');
        Transpose.onPress();
    }, 9000);
    setTimeout(() => {
        console.log('playing Octave');
        Octave.onPress();
    }, 12000);
}