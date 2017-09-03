import { Component, OnInit } from '@angular/core';
import { Answer } from '../shared/answer.model';

@Component({
  selector: 'app-answers-list',
  templateUrl: './answers-list.component.html',
  styleUrls: ['./answers-list.component.css']
})
export class AnswersListComponent implements OnInit {
  answers: Answer[] = [
    new Answer('Basically an angular application which I\'m building as a MVP'),
    new Answer('Again, Basically an angular application which I\'m building as a MVP')
  ];

  constructor() { }

  ngOnInit() {
  }

}
