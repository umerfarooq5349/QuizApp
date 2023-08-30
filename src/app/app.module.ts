import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomComponent } from './quiz/welcom/welcom.component';
import { QuizComponent } from './quiz/quiz/quiz.component';
import { HeaderComponent } from './quiz/header/header.component';
import { ChangebgDirective } from './changebg.directive';

@NgModule({
  declarations: [
    AppComponent,
    WelcomComponent,
    QuizComponent,
    HeaderComponent,
    ChangebgDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
