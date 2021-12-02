const { printAnswer, inputLoader } = require('../../helper/utils');

const input = inputLoader('../input.txt');
const test = `forward 5
down 5
forward 8
up 3
down 8
forward 2`;

const parts = input.split('\n');
const regex = /\b/gm;

const posMap = {
    horizontal: 0,
    depth: 0,
};

parts.forEach((command) => {
    const [direcion, , rawOffset] = command.split(regex);
    const offset = Number(rawOffset);

    switch (direcion) {
        case 'forward':
            posMap.horizontal += offset;
            break;
        case 'up':
            posMap.depth -= offset;
            break;
        case 'down':
            posMap.depth += offset;
            break;
        default:
            break;
    }
});

printAnswer(posMap.horizontal * posMap.depth);
