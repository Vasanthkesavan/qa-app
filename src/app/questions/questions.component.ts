import { Component, OnInit } from '@angular/core';
import { Question } from './question.model';
import { QuestionService } from './question.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css'],
  providers: [QuestionService]
})
export class QuestionsComponent implements OnInit {
  selectedQuestion: Question;

  constructor(private questionService: QuestionService) { }

  ngOnInit() {
    this.questionService.questionSelected
    .subscribe(
      (question: Question) => {
        this.selectedQuestion = question;
      }
    );
  }

}
