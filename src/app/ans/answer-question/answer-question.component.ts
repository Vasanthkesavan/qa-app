import { Component, OnInit, Input } from '@angular/core';
import { QuestionListComponent } from '../../qn/question-list/question-list.component';
import { QuestionDetailComponent } from '../../qn/question-list/question-detail/question-detail.component';

@Component({
  selector: 'app-answer-question',
  templateUrl: './answer-question.component.html',
  styleUrls: ['./answer-question.component.css']
})
export class AnswerQuestionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
