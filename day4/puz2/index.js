const { printAnswer, inputLoader } = require('../../helper/utils');

const input = inputLoader('../input.txt');
const test = `7,4,9,5,11,17,23,2,0,14,21,24,10,16,13,6,15,25,12,22,18,20,8,19,3,26,1

22 13 17 11  0
 8  2 23  4 24
21  9 14 16  7
 6 10  3 18  5
 1 12 20 15 19

 3 15  0  2 22
 9 18 13 17  5
19  8  7 25 23
20 11 10 24  4
14 21 16 12  6

14 21 17 24  4
10 16 15  9 19
18  8 23 26 20
22 11 13  6  5
 2  0 12  3  7`;

const parts = input.split(/\n\n/g);

const generateBoardMatrix = (board) => {
    const rows = board.split(/\n/g);

    return rows.map((row) => {
        const cleanedRow = row.replace(/\s+/g, ' ');
        const columns = cleanedRow.trimStart().split(/\s/g);
        return [...columns];
    });
};

const [numbersToDraw, ...rawBoards] = parts;
let boards = rawBoards.map(generateBoardMatrix);
const n = numbersToDraw.split(',');

let sumMap = new Array(boards.length).fill(null).map(() => [
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
]);

let rowCount = 0;
let colCount = 0;
let bla = [];
let sumsArr = [];

const checkSumMapRow = (board, idx, markNum) => {
    for (let col = 0; col < 5; col++) {
        rowCount = 0;
        for (let row = 0; row < 5; row++) {
            if (board[idx][row][col] === 1) {
                rowCount++;
                //console.log('row count ad coor', row, col, board[idx], idx, rowCount);
            }
            if (rowCount === 5) {
                bla.push(idx);
                sumsArr.push(sums(boards[idx].flat(Infinity), board[idx].flat(Infinity), markNum));
                return true;
            }
        }
    }
};
const checkSumMapCol = (board, idx, markNum) => {
    for (let row = 0; row < 5; row++) {
        colCount = 0;
        for (let col = 0; col < 5; col++) {
            if (board[idx][row][col] === 1) {
                colCount++;
                //console.log('col count at coor', row, col, board[idx], idx, colCount);
            }
            if (colCount === 5) {
                bla.push(idx);
                sumsArr.push(sums(boards[idx].flat(Infinity), board[idx].flat(Infinity), markNum));
                return true;
            }
        }
    }
};
let hardReset = false;
let markNum = 0;

while (n.length > 0 && boards.length) {
    markNum = n.shift();
    for (let idx = 0; idx < boards.length; idx++) {
        if (bla.includes(idx)) {
            continue;
        } else {
            for (let row = 0; row < 5; row++) {
                for (let col = 0; col < 5; col++) {
                    if (boards[idx][row][col] === markNum) {
                        sumMap[idx][row][col]++;
                        console.log('found nr', markNum, boards[idx][row], idx);
                    }
                }
            }
            checkSumMapRow(sumMap, idx, markNum);
            checkSumMapCol(sumMap, idx, markNum);
        }
    }
}

function sums(board, sumMap, markNum) {
    let notMarkedSum = 0;
    for (let i = 0; i < sumMap.length; i++) {
        //console.log('board i: ', board[i], board[i] === 0);
        if (sumMap[i] === 0) {
            notMarkedSum += Number(board[i]);
        }
    }

    //console.log(board, sumMap, markNum, notMarkedSum * markNum);
    return notMarkedSum * markNum;
}

printAnswer(sumsArr.pop());
