import { Component, ElementRef, EventEmitter, Input, Output, Renderer2, ViewChild } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-welcom',
  templateUrl: './welcom.component.html',
  styleUrls: ['./welcom.component.css']
})
export class WelcomComponent {
  @ViewChild('name') namekey!: ElementRef;

  userName: string = '';


  constructor(private router: Router) { }
  startquiz() {
    if (this.namekey.nativeElement.value) {
      localStorage.setItem('userName', this.namekey.nativeElement.value);
      this.router.navigate(['/quiz']);
    }
    else {
      alert('please enter your name');
      this.router.navigate(['/welcome']);
    }
  }

}
