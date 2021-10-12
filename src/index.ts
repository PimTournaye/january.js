import { delay } from './utils/delay';
import mode from './logic/Mode';
import chord from './actions/chord.action';
import small from './actions/small.action';
import transpose from './actions/transpose.action';
import octave from './actions/octave.action';
import Action from './actions/action';

const five: any = require('johnny-five');
const pixel: any = require('node-pixel')


//Pinouts are bound to change

const smallButton1 = five.Button(2);
const smallButton2 = five.Button(3);
const smallButton3 = five.Button(4);

const octaveButton = five.Button(5);
const vampButton = five.Button(6);
const chordButton = five.Button(7);

const harmonyButton = five.Button(8);
const transposeButton = five.Button(9);

const PIXEL_STICK_1_PIN = 10
const PIXEL_STICK_2_PIN = 11
const PIXEL_STICK_3_PIN = 12
const PIXEL_STICK_4_PIN = 13

let pixelStick1, pixelStick2, pixelStick3, pixelStick4: any;

let board = new five.Board();

board.on("ready", () => {

    pixelStick1 = new pixel.Strip({
        board: this,
        controller: "FIRMATA",
        strips: [ {pin: PIXEL_STICK_1_PIN, length: 8}, ],
        gamma: 2.8,
      });

    // Create a standard `led` component instance
    
    // "blink" the led in 500ms
    // on-off phase periods
});



/* 
const ACTIONS_NAMES_ARRAY: Array<Action> = [small,chord,transpose,octave]; //small ,chord,transpose,octave
main()
   
async function main(){
    mode.init();

    for await (const action of ACTIONS_NAMES_ARRAY) {
        console.log(action.toString() + " is playing")
        action.onPress()
        await delay(3000);
    }
}
 */