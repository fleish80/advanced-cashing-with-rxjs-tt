import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, RouterEvent } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'advanced-cashing-with-rxjs-tt';
  isRoot: Observable<boolean>;

  constructor(private router: Router) {}

  ngOnInit() {
    this.isRoot = this.router.events.pipe(
      filter(x => x instanceof NavigationEnd),
      map((x: RouterEvent) => x.url != '/')
    );
  }

}
