import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Question } from '../question.model';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit {
  @Output() questionWasSelected = new EventEmitter<Question>();

  questions: Question[] = [
    new Question('What is this app?', 'This is to ask question and answer question'),
    new Question('What is this app again?', 'Again, this is to ask question and answer question')
  ];

  constructor() { }

  ngOnInit() {
  }

  onQuestionSelected(question: Question) {
    this.questionWasSelected.emit(question);
  }
}
