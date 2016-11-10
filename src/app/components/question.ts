import { Subject } from './subject';
import { Answer } from './answer';

export class Question {
    test: string;
    difficulty: number;
    answers: Answer[];
    correctAnswer: number;
    subject: Subject;
};
