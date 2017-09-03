import { Component, OnInit } from '@angular/core';
import { Question } from './question.model';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  selectedQuestion: Question;

  constructor() { }

  ngOnInit() {
  }

}
