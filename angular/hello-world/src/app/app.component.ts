import { Component } from '@angular/core';
import { TimestampService } from './timestamp.service';
import { interval, Observable } from 'rxjs';
import { map, take, filter, tap } from 'rxjs/operators';

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

  timestamps$ = this.timestampService.getObservable();

  constructor(public timestampService: TimestampService) {

  }

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

  switchMood() {
    this.happy = !this.happy;
  }
}
