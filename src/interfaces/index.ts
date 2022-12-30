export interface ScrambleGeneratorOptions {
    length: number;
    range: [number, number];
}

export enum PuzzleType {
    '3x3',
    '2x2',
    '4x4',
    '5x5',
    '6x6',
    '7x7',
}

export interface PuzzleTypeObject {
    length: number;
    range: [number, number];
    type: string;
}
