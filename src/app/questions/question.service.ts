import { EventEmitter } from '@angular/core';
import { Question } from './question.model';
import { Answer } from '../shared/answer.model';

export class QuestionService {
    questionSelected = new EventEmitter<Question>();

    private questions: Question[] = [
        new Question('What is this app?', 'I dont understand this question', [
            new Answer('Some answer it is, but yeah lets see')
        ]),
        new Question('What is this app again?', 'I dont understand this question', [
            new Answer('Again, some answer it is, but yeah lets see')
        ])
      ];

    getQuestions() {
        return this.questions.slice();
    }
}
