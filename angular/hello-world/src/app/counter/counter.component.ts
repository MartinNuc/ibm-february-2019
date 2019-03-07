import { Component, OnInit } from '@angular/core';
import { TimestampService } from '../timestamp.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  constructor(public service: TimestampService) { }

  ngOnInit() {
  }

}
