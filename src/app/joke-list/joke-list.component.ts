import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Joke } from '../joke';
import { JokeService } from '../joke-service/joke.service';

@Component({
  selector: 'app-joke-list',
  templateUrl: './joke-list.component.html',
  styleUrls: ['./joke-list.component.scss']
})
export class JokeListComponent implements OnInit {
  jokes$: Observable<Array<Joke>>;

  constructor(private jokeService: JokeService) {}

  ngOnInit() {
    this.jokes$ = this.jokeService.jokes;
  }

}
