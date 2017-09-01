import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SignupComponent} from './auth/signup/signup.component';
import { SigninComponent} from './auth/signin/signin.component';
import { Routes, RouterModule } from '@angular/router';
import { AuthService } from './auth/auth.service';
import { QuestionPageComponent } from './qn/question-page/question-page.component';
import { QuestionListComponent } from './qn/question-list/question-list.component';
import { AskQuestionComponent } from './qn/ask-question/ask-question.component';

const appRoutes: Routes = [
  { path: 'sign-in', component: SigninComponent },
  { path: '', component: SignupComponent },
  { path: 'sign-up', component: SignupComponent },
  { path: 'question-page', component: QuestionPageComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent,
    QuestionPageComponent,
    QuestionListComponent,
    AskQuestionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
