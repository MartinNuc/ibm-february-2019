import { Component } from '@angular/core';
import { TimestampService } from './timestamp.service';
import { interval } from 'rxjs';
import { map, take } from 'rxjs/operators';

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

  constructor(public timestampService: TimestampService) {}

  toggleDropdown() {
    this.opened = !this.opened;
  }

  recordTimestamp(date: Date) {
    this.timestampService.recordDate(date);
  }

  incrementCounter() {
    this.recordTimestamp(new Date());
    this.counter++;
  }

  startObservable() {
    interval(1000)
      .pipe(
        map(x => x * 2),
        take(5)
      ).subscribe(value => console.log(value));
  }

  switchMood() {
    this.happy = !this.happy;
  }
}
