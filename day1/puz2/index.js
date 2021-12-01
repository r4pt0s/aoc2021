const { inputLoader, printAnswer } = require('../../helper/utils');
const { increaseCounter } = require('../puz1');

const parts = inputLoader('../input.txt').split('\n');
let end = 0;
const sumPool = [];
const length = parts.length - 2;

while (end < length) {
    const [first, second, third] = parts;

    sumPool.push(Number(first) + Number(second) + Number(third));

    parts.shift();
    end++;
}

const answer = increaseCounter(sumPool);

printAnswer(answer);
