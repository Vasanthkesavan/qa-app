import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ServerService } from '../../server.service';
import { FormsModule } from '@angular/forms';
import { Response } from '@angular/http';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit {
  @Output() questionWasSelected = new EventEmitter<Array<string>>();

  questions = [];
  // tslint:disable-next-line:no-input-rename
  @Input('master') masterName: string;
  // tslint:disable-next-line:no-trailing-whitespace
  
  toAnswerIndex: number;

  constructor(private serverService: ServerService) { }

  ngOnInit() {
    this.serverService.getQuestions()
      .subscribe(
        (questions: any[]) => this.questions = questions,
        (error) => console.log(error)
      );
  }

  toAnswer(index: number) {
    this.toAnswerIndex = index;
  }

  onQuestionSelected(question: Array<string>) {
    this.questionWasSelected.emit(question);
  }
}
