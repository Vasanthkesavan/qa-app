import { Component, OnInit } from '@angular/core';
import { Answer } from '../shared/answer.model';
import { AnswersListService } from './answers-list.service';

@Component({
  selector: 'app-answers-list',
  templateUrl: './answers-list.component.html',
  styleUrls: ['./answers-list.component.css']
})
export class AnswersListComponent implements OnInit {
  answers: Answer[];

  constructor(private answerService: AnswersListService) { }

  ngOnInit() {
    this.answers = this.answerService.getAnswers();
    this.answerService.answersChanged
    .subscribe(
      (answers: Answer[]) => {
        this.answers = answers;
      }
    );
  }
}
