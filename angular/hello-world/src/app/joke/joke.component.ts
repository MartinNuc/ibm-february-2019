import { Component, OnInit } from '@angular/core';
import { JokeService } from '../joke.service';
import { ResourceLoader } from '@angular/compiler';

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.css']
})
export class JokeComponent implements OnInit {

  joke = '';

  constructor(public jokeService: JokeService) {
    this.reloadJoke();
  }

  reloadJoke() {
    this.jokeService.fetchJoke()
      .subscribe(response => this.joke = response.value)
  }

  ngOnInit() {
  }

}
