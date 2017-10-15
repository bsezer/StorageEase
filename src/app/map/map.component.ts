import { Component, OnInit } from '@angular/core';

import { Hero }        from '../shared/hero';
import { HeroService } from '../services/hero.service';

@Component({
  selector: 'my-map',
  templateUrl: './map.component.html',
  styleUrls: [ './map.component.css' ]
})
export class MapComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.heroService.getHeroes()
      .then(heroes => this.heroes = heroes.slice(1, 5));
  }
}
