import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
// 
import { HeroService, Hero } from './hero.service';

@Component({
  selector: 'app-hero-list',
  template: `
  <h2>HEROES</h2>
  <ul class="items">
    <li *ngFor="let hero of heroes | async"
      (click)="onSelect(hero)">
      <span class="badge">{{ hero.id }}</span> {{ hero.name }}
    </li>
  </ul>

  <button routerLink="/sidekicks">Go to sidekicks</button>
  `
})

export class HeroListComponent implements OnInit {
  heroes: Observable<Hero[]>;
  private selectedId: number;

  constructor(
    private service: HeroService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.heroes = this.route.params
      .switchMap((params: Params) => {
        this.selectedId = +params['id'];
        return this.service.getHeroes();
      });
  }
  onSelect(hero: Hero) {
    this.router.navigate(['/hero', hero.id]);
  }
}
