import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Question } from '../../question.model';

@Component({
  selector: 'app-question-alone',
  templateUrl: './question-alone.component.html',
  styleUrls: ['./question-alone.component.css']
})
export class QuestionAloneComponent implements OnInit {
  @Input() question: Question;
  @Output() questionSelected = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  onSelected() {
    this.questionSelected.emit();
  }
}
