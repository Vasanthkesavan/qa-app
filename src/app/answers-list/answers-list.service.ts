import { Answer } from '../shared/answer.model';
import { EventEmitter } from '@angular/core';

export class AnswersListService {
    answersChanged = new EventEmitter<Answer[]>();

   private answers: Answer[] = [
        new Answer('Basically an angular application which I\'m building as a MVP'),
        new Answer('Again, Basically an angular application which I\'m building as a MVP')
      ];

    getAnswers() {
        return this.answers.slice();
    }

    addAnswer(answer: Answer) {
        this.answers.push(answer);
        this.answersChanged.emit(this.answers.slice());
    }
}
