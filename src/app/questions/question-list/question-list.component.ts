import { Component, OnInit } from '@angular/core';
import { Question } from '../question.model';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit {
  questions: Question[] = [
    new Question('What is this app?', 'This is to ask question and answer question'),
    new Question('What is this app again?', 'Again, this is to ask question and answer question')
  ];

  constructor() { }

  ngOnInit() {
  }

}
