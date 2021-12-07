const { printAnswer, inputLoader } = require('../../helper/utils');

const input = inputLoader('../input.txt');

const test = `3,4,3,1,2`;

const startLanternfish = test.split(',').map(Number);

const lanternfish = [...startLanternfish];
const lifecycle = (state) => {
    let nextState = 0;

    switch (state) {
        case 0:
            lanternfish.push(8);
            nextState = 6;
            //console.log('new fish');
            break;
        default:
            nextState = state - 1;
            break;
    }

    return nextState;
};

let day = 0;

// at 0 => creates new laternfish with timer 8
while (day < 80) {
    lanternfish.forEach((fishState, idx) => {
        lanternfish[idx] = lifecycle(fishState);
    });

    day++;
    if (day > lanternfish.length - 1) {
        day = 0;
    }
}

printAnswer(lanternfish.length);

// a=5, t=80 => y(80)=5934
// 5934 = 5 * e^2k
//divide both sides with 5
// 1186,8 = e^2k
// ln(1186,8) = 2k
// 2k = ln(1185.8)
// k = ln(1185.8)/2
