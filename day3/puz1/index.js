const { printAnswer, inputLoader, binaryToDecimal } = require('../../helper/utils');

const input = inputLoader('../input.txt');

// gamma => 10110
// epsilon => 01001
const test = `00100
11110
10110
10111
10101
01111
00111
11100
10000
11001
00010
01010`;

const parts = input.split('\n');
const commandCnt = parts[0].length;
const joined = parts.join('');
const storeGamma = new Array(commandCnt).fill(null).map(() => [0, 0]);

let i = 0;
let j = 0;

while (i < joined.length - 1) {
    const whichIndex = joined[i] === '0' ? 0 : 1;
    if (j >= commandCnt) {
        j = 0;
    }
    storeGamma[j][whichIndex]++;

    j++;
    i++;
}

const gamma = storeGamma.reduce((acc, curr) => {
    acc.push(curr[0] > curr[1] ? 0 : 1);
    return acc;
}, []);

const epsilon = storeGamma.reduce((acc, curr) => {
    acc.push(curr[0] < curr[1] ? 0 : 1);
    return acc;
}, []);

printAnswer(binaryToDecimal(gamma) * binaryToDecimal(epsilon));
