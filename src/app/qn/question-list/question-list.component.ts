import { Component, OnInit } from '@angular/core';
import { ServerService } from '../../server.service';
import { FormsModule } from '@angular/forms';
import { Response } from '@angular/http';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit {
  questions = [];

  constructor(private serverService: ServerService) { }

  ngOnInit() {
    this.serverService.getQuestions()
      .subscribe(
        (questions: any[]) => this.questions = questions,
        (error) => console.log(error)
      );
  }
}
