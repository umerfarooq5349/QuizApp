import { Component, } from '@angular/core';
import { interval } from 'rxjs'
import { QuestionServiceService } from 'src/app/service/question-service.service';


@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent {
  public userName: string = '';
  qNum: number = 0;
  question: any[] = [];
  points: number = 0;
  counter: number = 60;
  interval$: any;
  correctAnswers = 0;
  progressBar: string = '0';
  inCorrectAnswer = 0;
  isQuizCompleted: boolean = false;
  constructor(private questionsList: QuestionServiceService) {

  }
  ngOnInit() {
    this.userName = localStorage.getItem('userName')!;
    this.loadQuestions();
    this.startCounter();

  }


  loadQuestions() {

    this.questionsList.getquestions().subscribe((result) =>
      this.question = result
    );
  }
  previousQuestion() {

    if (this.qNum > 0) {
      this.qNum--;

    }

  }
  nextQuestion() {

    if (this.qNum < this.question.length - 1) {
      this.qNum++;
    }
  }
  userAnswer(qNum: number, ClickedOption: any) {
    console.log("qnum: " + qNum + " option: " + ClickedOption.text);
    if (qNum === this.question.length - 1) {
      setTimeout(() => {
        this.isQuizCompleted = true;
        this.stopCounter()
      }, 1000);

    }
    if (ClickedOption.correct) {
      this.points += 10;
      setTimeout(() => {
        console.log("qNum: " + qNum + " this.qnum: " + this.qNum)
        this.getProgressvalue()
        this.correctAnswers++;
        this.restartCounter();

      }, 1000);
    }
    else {
      setTimeout(() => {
        console.log("qNum: " + qNum + " this.qnum: " + this.qNum)
        // this.nextQuestion()
        this.restartCounter();
        this.inCorrectAnswer++;
        this.getProgressvalue();
      }, 1000);
    }
  }
  startCounter() {
    this.interval$ = interval(1000).subscribe(val => {
      this.counter--
      if (this.counter === 0) {
        this.counter = 60;
        // this.qNum++;
        this.nextQuestion()
      }
    }); setTimeout(() => { this.interval$.unsubscribe(); }, 600000)


  }
  stopCounter() {
    this.interval$.unsubscribe();
    this.counter = 60;

  }
  restartCounter() {
    this.stopCounter();
    this.nextQuestion()
    this.startCounter();
  }
  getProgressvalue() {
    this.progressBar = (((this.qNum / this.question.length) * 100).toFixed(0)).toString();
    return this.progressBar;
  }
}
