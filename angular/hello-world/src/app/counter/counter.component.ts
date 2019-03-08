import { Component, OnInit } from '@angular/core';
import { TimestampService } from '../timestamp.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  count$ = this.service.getObservable().pipe(
    map(array => array.length)
  );
  constructor(public service: TimestampService) {

  }

  ngOnInit() {
  }

}
