import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myVariable = 'Hello this is a test';
  counter = 0;
  happy = true;
  opened = false;

  toggleDropdown() {
    this.opened = !this.opened;
  }

  incrementCounter() {
    this.counter++;
  }

  switchMood() {
    this.happy = !this.happy;
  }
}
