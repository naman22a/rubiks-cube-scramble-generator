import { Controller, Get, Query, ParseEnumPipe } from '@nestjs/common';
import { ScramblesService } from './scrambles.service';
import { PuzzleType } from '../interfaces';
import { puzzleTypeMap } from '../global';

@Controller('api')
export class ScramblesController {
    constructor(private scramblesService: ScramblesService) {}

    @Get()
    getScramble(
        @Query('puzzleType', new ParseEnumPipe(PuzzleType))
        puzzleType: PuzzleType,
    ) {
        const { length, range } = puzzleTypeMap.get(puzzleType as any);

        const scramble = this.scramblesService.scrambleGenrator({
            length,
            range,
        });

        return { scramble };
    }
}
