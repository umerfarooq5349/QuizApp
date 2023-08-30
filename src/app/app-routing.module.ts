import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomComponent } from './quiz/welcom/welcom.component';
import { QuizComponent } from './quiz/quiz/quiz.component';

const routes: Routes = [
  { path: "", redirectTo: "welcome", pathMatch: "full" },
  {
    path: "welcome",
    component: WelcomComponent
  },
  {
    path: "quiz",
    component: QuizComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
