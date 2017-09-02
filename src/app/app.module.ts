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
import { EditorComponent } from './qn/ask-question/editor/editor.component';
import { ServerService } from './server.service';
import { HttpModule } from '@angular/http';
import { HeadercomponentComponent } from './headercomponent/headercomponent.component';
import { AuthGuard } from './auth/auth-guard.service';

const appRoutes: Routes = [
  { path: 'sign-in', component: SigninComponent },
  { path: '', component: SignupComponent },
  { path: 'sign-up', component: SignupComponent },
  { path: 'question-page', component: QuestionPageComponent, canActivate: [AuthGuard] },
  { path: 'ask-question', component: AskQuestionComponent, canActivate: [AuthGuard] }
];

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent,
    QuestionPageComponent,
    QuestionListComponent,
    AskQuestionComponent,
    EditorComponent,
    HeadercomponentComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpModule
  ],
  providers: [AuthService, ServerService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
