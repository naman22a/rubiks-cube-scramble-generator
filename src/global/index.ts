import { PuzzleTypeObject } from '../interfaces';

const puzzleTypeObjects: PuzzleTypeObject[] = [
    {
        length: 15,
        range: [1, 6],
        type: '2x2',
    },
    {
        length: 25,
        range: [1, 6],
        type: '3x3',
    },
    {
        length: 30,
        range: [1, 12],
        type: '4x4',
    },
    {
        length: 35,
        range: [1, 12],
        type: '5x5',
    },
    {
        length: 40,
        range: [1, 18],
        type: '6x6',
    },
    {
        length: 45,
        range: [1, 18],
        type: '7x7',
    },
];

let puzzleTypeMap = new Map<string, PuzzleTypeObject>();

for (const puzzleObj of puzzleTypeObjects) {
    puzzleTypeMap.set(puzzleObj.type, puzzleObj);
}

export { puzzleTypeMap };
