import octave from './actions/octave.action';
import small from './actions/small.action';
import vamp from './actions/vamp.action';
import chord from './actions/chord.action';
import harmony from './actions/harmony.action';
import transpose from './actions/transpose.action';
import key from './logic/Key';
import mode from './logic/Mode';
import note from './logic/Note';

/**  Set Initial Mode to Ionian or Aeolian. */
mode.index = Math.floor(Math.random() * mode.DATABASE.length);
mode.init();

/**
 * Generates a new note in the current key and mode, based of the last note played
 * @returns string
 */
export const getNote = () => {
  return small.onPress();
};

/**
 * Generates a new chord based on the current key and mode
 * @returns [Array] of [strings]
 */
export const getChord = () => {
  return vamp.onPress();
};

/**
 * Change the current mode and generates a new chord
 * @returns [Array] of [strings]
 */
export const getChordTransposition = () => {
  return chord.onPress();
}

/**
 * Generates a new note with an second note in an octave up or down
 * @returns [Array] of [strings]
 */
export const getOctave = () => {
  return octave.onPress();
}

/**
 * Generates a note and harmony note
 * @returns [Array] of [strings]
 */
export const getHarmony = () => {
  return harmony.onPress();
}

/**
 * Changes both the key and mode and generate a new chord
 * @returns [Array] of [strings]
 */
export const getTotalTransposition = () => {
  return transpose.onPress();
}

/**
 * Returns the current mode
 * @returns Object defining the current mode
 */
export const getMode = () => {
	return mode.current;
};

/**
 * Generates the notes for either major or minor, with C as a tonic.
 * @returns [Array] of [strings] defining the current key
 */
export const getKey = () => {
	return key.current;
};

/**
 * Gathers information on the current state of the alogrithm, and what it has generated.
 * @returns Object with details on the current session
 */
export const getSession = () => {
  return {
    current: {
      key: key.current,
      mode: mode.current,
      note: note.lastPlayed
    },
    previous: {
      key: key.previous,
      mode: mode.previous,
      note: note.secondToLastPlayed,
      harmony: note.lastHarmony,
      octave: note.lastOctave,
    }
  };
};


export const changeKey = (): void => {
  key.change();
};

export const changeMode = (): void => {
  mode.change();
};
 