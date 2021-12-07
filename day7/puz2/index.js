const { printAnswer, inputLoader } = require('../../helper/utils');

const input = inputLoader('../input.txt');

const test = `16,1,2,0,4,2,7,1,2,14`;

const craps = input.split(',').map(Number);

const max = Math.max(...craps);

const fuelRate = (steps) => {
    const temp = new Array(steps).fill(null).map((_, idx) => (idx += 1));

    return temp.reduce((acc, curr) => (acc += curr), 0);
};
const fuelPool = [];

for (let i = 0; i < max; i++) {
    let calc = 0;
    for (let j = 0; j < craps.length; j++) {
        const move = Math.abs(i - craps[j]);
        calc += fuelRate(move);
    }

    fuelPool.push(calc);
}

printAnswer(Math.min(...fuelPool));
