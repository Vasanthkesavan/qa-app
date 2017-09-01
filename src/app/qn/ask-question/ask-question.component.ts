import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { QuestionStructure } from './question.structure';

@Component({
  selector: 'app-ask-question',
  templateUrl: './ask-question.component.html',
  styleUrls: ['./ask-question.component.css']
})
export class AskQuestionComponent implements OnInit {
  @Input() tinymce: string;

  questionData = new QuestionStructure();

  constructor() { }

  ngOnInit() {
  }

  onBodyEditorKeyUp(questionName, textValue) {
    this.questionData.questionName = questionName;
    this.questionData.textValue = textValue;
  }

  onSubmit() {
    console.log(this.questionData);
  }
}
