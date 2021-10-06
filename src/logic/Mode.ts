import { AEOLIAN, LYDIAN, MIXOLYDIAN } from './../database/mode-def.database';
import { DORIAN, IONIAN } from "../database/mode-def.database";
import Intervals from "./Intervals";
import { ModeDef } from '../interface/mode.interface';

class Mode {

    // Modes. Ionian in Major is 3 Octaves, Aeolian in Minor. The rest are 2 octaves.
	public IONIAN = IONIAN;
	public DORIAN = DORIAN;
	public LYDIAN = LYDIAN;
	public MIXOLYDIAN = MIXOLYDIAN;
    public AEOLIAN = AEOLIAN;

	public  DATABASE: Array<ModeDef> = [this.IONIAN, this.DORIAN, this.LYDIAN, this.MIXOLYDIAN, this.AEOLIAN];
	public  index: number = 0;
	public  current: ModeDef;
	public  previous: ModeDef;


	public change(modeIndex = -1){

		if (modeIndex == -1){
		
			let newIndex = Math.floor(Math.random()* this.DATABASE.length);

			// Halve Probability of Mixolydian
			if (newIndex == 3) newIndex = Math.floor(Math.random()* this.DATABASE.length);

			while (newIndex == this.index){
				newIndex = Math.floor(Math.random()* this.DATABASE.length);
				this.index = newIndex;
			}
		} else {
			this.index = modeIndex;
			this.init();
		}
	}

	public init(){
		this.previous = this.current;
		console.log(`Previous mode: ${this.previous}`);

		this.current = this.DATABASE[this.index];
		console.log(`New mode: ${this.current}`);

		Intervals.updated = false;
		console.log(`Intervals updated: ${Intervals.updated}`);
		Intervals.populate();
	}
}

const mode = new Mode();
export default mode;


