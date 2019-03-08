import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  email = 'martin@nuc.cz';
  address = {
    street: '',
    city: ''
  };
  constructor() { }

  ngOnInit() {
  }

}
