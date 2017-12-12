import { Component, OnInit } from '@angular/core';
import { HeroService } from '../services/hero.service';
import { StorageSpace, StorageHouse, Owner } from '../shared/IStorageUnits'
import { StorageHouses } from '../shared/sampleStorageUnits'

@Component({
  selector: 'my-map',
  templateUrl: './map.component.html',
  styleUrls: [ './map.component.css' ]
})
export class MapComponent implements OnInit {
  public storageHouses: StorageHouse[];

  constructor(private heroService: HeroService) {
    this.storageHouses = StorageHouses;
  }

  ngOnInit(): void {
    console.log('Map Component');
    this.heroService.getStorageHouses()
      .then(storageHouses =>{
        this.storageHouses = storageHouses;
      }
    );
  }
}

