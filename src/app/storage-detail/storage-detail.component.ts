import 'rxjs/add/operator/switchMap';
import { Component, OnInit }        from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';
import { Hero }        from '../shared/hero';
import { HeroService } from '../services/hero.service';
import { StorageHouse } from '../shared/IStorageUnits';
import { StorageHouses } from '../shared/sampleStorageUnits';
import { Console } from '@angular/core/src/console';


@Component({
  selector: 'storage-detail',
  templateUrl: './storage-detail.component.html',
  styleUrls: [ './storage-detail.component.css' ]
})
export class StorageDetailComponent implements OnInit {
  public storageHouse: StorageHouse;

  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    console.log('At storage detail');
    this.route.paramMap
      .switchMap((params: ParamMap) => this.heroService.getStorageHouse(+params.get('id')))
      .subscribe(hero => this.storageHouse = StorageHouses[1]);
  }

  save(): void {
    // this.heroService.update(this.storageHouse)
    //   .then(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }
}
