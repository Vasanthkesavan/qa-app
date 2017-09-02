import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { QuestionStructure } from './question.structure';
import { ServerService } from '../../server.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ask-question',
  templateUrl: './ask-question.component.html',
  styleUrls: ['./ask-question.component.css']
})
export class AskQuestionComponent implements OnInit {
  @Input() tinymce: string;

  textValue = '';
  questionName = '';

  questionData = new QuestionStructure(this.questionName, this.textValue);

  constructor(private serverService: ServerService) { }

  ngOnInit() {
  }

  onBodyEditorKeyUp(textValue) {
    this.questionData.textValue = textValue;
  }

  onSubmit() {
    this.serverService.storeQuestions([this.questionData])
    .subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    );
  }
}
