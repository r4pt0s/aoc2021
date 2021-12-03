const { printAnswer, inputLoader, binaryToDecimal } = require('../../helper/utils');

const input = inputLoader('../input.txt');

// oxygen generator rating => 10111
// CO2 scrubber rating => 01010
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

const checkScrubbes = (zero, one, term) => {
    let returnVal = false;

    switch (term) {
        case 'o2':
            if (zero > one) {
                returnVal = 'zero';
            } else if (one > zero || one === zero) {
                returnVal = 'one';
            }
            break;
        case 'co2':
            if (zero < one || zero === one) {
                returnVal = 'zero';
            } else if (one < zero) {
                returnVal = 'one';
            }
            break;
        default:
            break;
    }

    return returnVal;
};
const generator = (parts, commandCnt, scrubTerm, pos = 0) => {
    let one = 0,
        zero = 0;

    let indexStore = {
        zero: [],
        one: [],
    };

    if (pos === commandCnt - 1 || parts.length === 1) {
        return parts.pop();
    }

    parts.forEach((byte) => {
        switch (byte[pos]) {
            case '0':
                zero++;
                indexStore.zero.push(byte);
                break;
            case '1':
                one++;
                indexStore.one.push(byte);
                break;
            default:
                break;
        }
    });

    const handOver = checkScrubbes(zero, one, scrubTerm);
    let input = [...indexStore[handOver]];

    return generator(input, commandCnt, scrubTerm, (pos += 1));
};

const parts = input.split('\n');
const commandCnt = parts[0].length;
const o2 = generator(parts, commandCnt, 'o2');
const co2 = generator(parts, commandCnt, 'co2');

printAnswer(binaryToDecimal(o2.split('')) * binaryToDecimal(co2.split('')));
