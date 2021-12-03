const fs = require('fs');

const inputLoader = (path) => {
    try {
        const data = fs.readFileSync(path, 'utf8');
        return data;
    } catch (err) {
        console.log('file not found ', err, path);
    }
};

const printAnswer = (answer) => {
    console.log('########################################\n\n');
    console.log(`The answer is: ${answer}`);
    console.log('\n\n########################################\n\n');
};

const binaryToDecimal = (inputArray) => parseInt(inputArray.join(''), 2);

module.exports = {
    inputLoader,
    printAnswer,
    binaryToDecimal,
};
