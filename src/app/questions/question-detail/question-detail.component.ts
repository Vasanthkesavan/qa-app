import { Component, OnInit, Input } from '@angular/core';
import { Question } from '../question.model';
import { QuestionService } from '../question.service';

@Component({
  selector: 'app-question-detail',
  templateUrl: './question-detail.component.html',
  styleUrls: ['./question-detail.component.css']
})
export class QuestionDetailComponent implements OnInit {
  @Input() question: Question;

  constructor(private questionService: QuestionService) { }

  ngOnInit() {
  }

  onAddToAnswers() {
    this.questionService.addAnswersToAnswersList(this.question.answers);
  }
}
