import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switch-style',
  templateUrl: './switch-style.component.html',
  styleUrls: ['./switch-style.component.css']
})
export class SwitchStyleComponent implements OnInit {

  styles = {
    red: true,
    large: true
  };

  constructor() { }

  ngOnInit() {
  }

  changeColor() {
    this.styles.red = !this.styles.red;
  }

  changeFontsize() {
    this.styles.large = !this.styles.large;
  }
}
