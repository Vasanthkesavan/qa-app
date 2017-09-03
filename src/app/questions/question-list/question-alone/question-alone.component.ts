import { Component, OnInit, Input, Output } from '@angular/core';
import { Question } from '../../question.model';
import { QuestionService } from '../../question.service';

@Component({
  selector: 'app-question-alone',
  templateUrl: './question-alone.component.html',
  styleUrls: ['./question-alone.component.css']
})
export class QuestionAloneComponent implements OnInit {
  @Input() question: Question;


  constructor(private questionService: QuestionService) { }

  ngOnInit() {
  }

  onSelected() {
    this.questionService.questionSelected.emit(this.question);
  }
}
