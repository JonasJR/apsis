var frame = 1;
var total = 0;
var rolls = [];

/**
 * Clears the global values for another run
 */
function clearValues(){
    frame = 1;
    total = 0;
    rolls = [];
}

/**
 * Takes the frames as an argument and loops through them and puts the values in an array
 * @param {*} frames 
 */
function parseFrames(frames){
    var result = [];
    frames.forEach(e => {
        if (e.first != "") {
            result.push(parseInt(e.first));
        } else {
            result.push(0);
        }
        if (e.second != ""){
            result.push(parseInt(e.second));
        } else {
            result.push(0);
        }
        if (e.third != ""){
            result.push(parseInt(e.third));
        } 
    });
    return result;
}

/**
 * Calculates an ordinary roll
 * @param {*} i 
 */
function calcOrdinary(i) {
    return total + rolls[i];
}

/**
 * Calculates a strike
 * @param {*} i 
 */
function calcStrike(i){
    return total + 10 + rolls[i+1] + rolls[i+2];
}

/**
 * Calculates a spare
 * @param {*} i 
 */
function calcSpare(i){
    return total + 10 + rolls[i+1];
}

/**
 * Keeps track of the frame and calls different calculations depending on the quality of the roll
 * @param {*} i 
 */
function calculateScore(i) {
    if(frame >= 10) {
        return calcOrdinary(i);
    }
    if(rolls[i] === 10) { //if the roll is a strike
        frame++;
        return calcStrike(i);
    }
    if(frame % 2 == 0) {
        frame = Math.floor(++frame);
        if(rolls[i] + rolls[i-1] === 10) {
            return calcSpare(i); 
        }
        return calcOrdinary(i);
    }
    frame += 0.5;
    return calcOrdinary(i);
  }

/**
 * Main function that is called from outside.
 * Parses the frames to an array with all rolls and parses in to Int
 * Loops through the created array and adds the adds score to the total
 * depending on the different values in the roll
 */
module.exports = { calculateScore: function (frames){
        rolls = parseFrames(frames);
        for (i = 0; i < rolls.length; i++){
            total = calculateScore(i);
        }
        var json = {"score": total};
        clearValues();
        return json;
    }
};