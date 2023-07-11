import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title: 'Training';
  Off: boolean = true;
  lifecycle: boolean = false;

  constructor(private router: Router) {}

  navigateToHome() {
    this.router.navigate(['']);
    this.lifecycle = false;
    this.Off = true;
  }

  navigateToBindings() {
    this.router.navigate(['/bindings']);
    this.lifecycle = false; 
    this.Off = true;
  }

  navigateToEmployee() {
    this.router.navigate(['/employee']);
    this.lifecycle = false;
    this.Off = true;
  }

  navigateToTForm() {
    this.router.navigate(['/tForm']);
    this.lifecycle = false;
    this.Off = true;
  }

  navigateToRForm() {
    this.router.navigate(['/rForm']);
    this.lifecycle = false;
    this.Off = true;
  }

  navigateToQnA() {
    this.router.navigate(['/q&a']);
    this.lifecycle = false;
    this.Off = true;
  }
  lifecycleRun() {
    console.log('works');

    if (this.lifecycle) {
      this.lifecycle = false;
      this.Off = true;
    } else {
      this.lifecycle = true;
      this.Off = false;
    }
  }
}
