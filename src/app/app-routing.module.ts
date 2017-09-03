import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuestionsComponent } from './questions/questions.component';
import { AnswersListComponent } from './answers-list/answers-list.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/questions', pathMatch: 'full' },
    { path: 'questions', component: QuestionsComponent },
    { path: 'answers-list', component: AnswersListComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule {

}
