import { Injectable } from '@nestjs/common';
import { ScrambleGeneratorOptions } from '../interfaces';

@Injectable()
export class ScramblesService {
    scrambleGenrator(options: ScrambleGeneratorOptions): string {
        const { length, range } = options;

        const notationMatrix = [
            ['U', "U'", 'U2'],
            ['D', "D'", 'D2'],
            ['R', "R'", 'R2'],
            ['L', "L'", 'L2'],
            ['F', "F'", 'F2'],
            ['B', "B'", 'B2'],
            ['Uw', "Uw'", 'Uw2'],
            ['Dw', "Dw'", 'Dw2'],
            ['Rw', "Rw'", 'Rw2'],
            ['Lw', "Lw'", 'Lw2'],
            ['Fw', "Fw'", 'Fw2'],
            ['Bw', "Bw'", 'Bw2'],
            ['3Uw', "3Uw'", '3Uw2'],
            ['3Dw', "3Dw'", '3Dw2'],
            ['3Rw', "3Rw'", '3Rw2'],
            ['3Lw', "3Lw'", '3Lw2'],
            ['3Fw', "3Fw'", '3Fw2'],
            ['3Bw', "3Bw'", '3Bw2'],
        ];

        const notations: string[] = [];

        // returns a random integer from interval [a,b]
        function randint(a: number, b: number): number {
            return Math.round(a + (b - a) * Math.random());
        }

        let i = 1;

        let lastIndex: number | null = null; // null is to avoid the typescript compliation error null will be never used 😅

        while (length >= i) {
            if (i == 1) {
                // making to 2 random integers for 2 indices of notationMatrix
                const ran1 = randint(range[0] - 1, range[1] - 1);
                const ran2 = randint(0, 2);

                let notation = notationMatrix[ran1][ran2];
                notations.push(notation);

                lastIndex = ran1; // to not repeat the same notation type like R R2 , should not come together

                i++;
                continue;
            }

            // making to 2 random integers for 2 indices of notationMatrix
            const ran1 = randint(range[0] - 1, range[1] - 1);
            const ran2 = randint(0, 2);

            // to not repeat the same notation type like R R2 , should not come together
            if (lastIndex != ran1) {
                let notation = notationMatrix[ran1][ran2];
                notations.push(notation);

                lastIndex = ran1;
            } else {
                continue;
            }

            i++;
        }

        // to convert array to notations to a single string
        return notations.join(' ');
    }
}
