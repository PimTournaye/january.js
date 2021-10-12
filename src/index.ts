import { delay } from './utils/delay';
import mode from './logic/Mode';
import chord from './actions/chord.action';
import small from './actions/small.action';
import transpose from './actions/transpose.action';
import octave from './actions/octave.action';
import Action from './actions/action';
import { randomNumber } from './utils/randomNumber';
import vamp from './actions/vamp.action';
import harmony from './actions/harmony.action';

const five: any = require('johnny-five');
const pixel: any = require('node-pixel')


//Pinout init
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

const PIXEL_RING_SMALL_PIN = "AO";
//const PIXEL_RING_BIG_CHORDS_PIN = null;
//const PIXEL_RING_BIG_CHORDS_PIN = null;
//const PIXEL_RING_BIG_CHORDS_PIN = null;


let pixelStick1, pixelStick2, pixelStick3, pixelStick4;
let smallRings;
let smallRingOctave;
let bigRingsChords;
let bigRingsHarmony;
let bigRings



//Gamification
let smallButtonScore: number = 0;
let chordsScore: number = 0;
let specialScore: number = 0;


let smallThreshold: number;
let chordThreshold: number;
let specialThreshold: number;

let octaveUnlockScore: number;
let chordsUnlockScore: number;
let specialUnlockScore: number;

let chordsAreUnlocked: boolean = false;
let specialsAreUnlocked: boolean = false;



// MAIN

let board = new five.Board();

board.on("ready", () => {


    //NeoPixel init
    pixelStick1 = new pixel.Strip({
        board: this,
        controller: "FIRMATA",
        strips: [ {pin: PIXEL_STICK_1_PIN, length: 8}, ],
        gamma: 2.8,
      });
    pixelStick2 = new pixel.Strip({
        board: this,
        controller: "FIRMATA",
        strips: [ {pin: PIXEL_STICK_2_PIN, length: 8}, ],
        gamma: 2.8,
      });
    pixelStick3 = new pixel.Strip({
        board: this,
        controller: "FIRMATA",
        strips: [ {pin: PIXEL_STICK_3_PIN, length: 8}, ],
        gamma: 2.8,
      });
    pixelStick4 = new pixel.Strip({
        board: this,
        controller: "FIRMATA",
        strips: [ {pin: PIXEL_STICK_4_PIN, length: 8}, ],
        gamma: 2.8,
      });

    // Small rings init

    smallRings = new pixel.Strip({
        board: this,
        controller: "FIRMATA",
        strips: [ {pin: PIXEL_RING_SMALL_PIN, length: 64}, ],
        gamma: 2.8,
      });


      //Score functions
      function smallScore() {

        // When a basic button is pressed, add 1 to 3 points to the score towards unlocking chords (smallButtonScore)
          smallButtonScore += randomNumber(3);

      }

      function chordScore() {

        // When a chord button is pressed, check if the chords are unlocked or if score is sufficient.
        if (chordsScore >= chordThreshold) {
            
        }

        // Substract some points / currency to prevent spamming

        // Add 1 to 3 points to the score towards unlocking specials.
          
      }

      function specialScore() {

        // When a special button is pressed, check if the specials are unlocked or if score is sufficient.

        // Substract some points / currency to prevent spamming
          
      }

      // Basic/small button functions

    function smallAction() {
        smallScore();
        console.log("Small note");
        small.onPress();
    }


    // Buttons init

    smallButton1.on("down", smallAction());
    smallButton2.on("down", smallAction());
    smallButton3.on("down", smallAction());

    octaveButton.on("down", () => {
        console.log("Octave notes");
        octave.onPress();
        smallScore();
    })
    
    vampButton.on("down", () => {
        console.log("Vamp chord");
        vamp.onPress();
        chordScore();
    })

    chordButton.on("down", () => {
        console.log("Vamp chord");
        vamp.onPress();
        chordScore();
    })

    harmonyButton.on("down", () => {
        console.log("Harmony action");
        harmony.onPress();
        specialScore();
    })

    transposeButton.on("down", () => {
        console.log("Transposed!");
        transpose.onPress();
        specialScore();
    })

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