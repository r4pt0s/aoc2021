const { inputLoader, printAnswer } = require('../../helper/utils');

const increaseCounter = (parts) =>
    parts.reduce((acc, curr, idx) => {
        if (Number(curr) < Number(parts[idx + 1])) {
            acc++;
        }

        return acc;
    }, 0);

const parts = inputLoader('../input.txt').split('\n');

const answer = increaseCounter(parts);

printAnswer(answer);

module.exports = {
    increaseCounter,
};
