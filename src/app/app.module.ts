import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { Routes, RouterModule } from '@angular/router';


import { HttpModule } from '@angular/http';
import { HeadercomponentComponent } from './headercomponent/headercomponent.component';
import { QuestionsComponent } from './questions/questions.component';
import { QuestionListComponent } from './questions/question-list/question-list.component';
import { QuestionDetailComponent } from './questions/question-detail/question-detail.component';
import { QuestionAloneComponent } from './questions/question-list/question-alone/question-alone.component';


@NgModule({
  declarations: [
    AppComponent,
    HeadercomponentComponent,
    QuestionsComponent,
    QuestionListComponent,
    QuestionDetailComponent,
    QuestionAloneComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
