const { printAnswer, inputLoader } = require('../../helper/utils');

const input = inputLoader('../input.txt');

const test = `3,4,3,1,2`;

const startLanternfish = input.split(',').map(Number);

const lm = {
    l0: 0,
    l1: 0,
    l2: 0,
    l3: 0,
    l4: 0,
    l5: 0,
    l6: 0,
    l7: 0,
    l8: 0,
};

startLanternfish.forEach((fish) => {
    lm[`l${fish}`] += 1;
});

let day = 0;
let newFish = 0;

while (day < 256) {
    for (let i = 0; i < 9; i++) {
        if (i === 0) {
            newFish = lm.l0;
            lm.l0 = 0;
        } else {
            lm[`l${i - 1}`] += lm[`l${i}`];
            lm[`l${i}`] = 0;
        }
    }
    lm.l6 += newFish;
    day++;
    lm.l8 += newFish;
}

const lanternfish = Object.entries(lm).reduce((acc, [key, val]) => (acc += val), 0);

printAnswer(lanternfish);
