import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-remember-button',
  templateUrl: './remember-button.component.html',
  styleUrls: ['./remember-button.component.css']
})
export class RememberButtonComponent implements OnInit {

  @Output()
  buttonClicked = new EventEmitter<Date>();

  constructor() { }

  ngOnInit() {
  }

  notifyParent() {
    const newDate = new Date();
    this.buttonClicked.emit(newDate);
  }

}
