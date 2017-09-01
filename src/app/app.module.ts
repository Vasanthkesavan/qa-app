import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SignupComponent} from './auth/signup/signup.component';
import { SigninComponent} from './auth/signin/signin.component';
import { Routes, RouterModule } from '@angular/router';
import { AuthService } from './auth/auth.service';

const appRoutes: Routes = [
  { path: 'sign-in', component: SigninComponent },
  { path: '', component: SignupComponent },
  { path: 'sign-up', component: SignupComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent
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
