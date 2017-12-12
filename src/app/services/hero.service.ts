import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Hero } from '../shared/hero';
import { StorageHouse } from '../shared/IStorageUnits';
import { StorageHouses } from '../shared/sampleStorageUnits';
import { JsonPipe } from '@angular/common/src/pipes';


@Injectable()
export class HeroService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private heroesUrl = 'api/heroes';  // URL to web api

  constructor(private http: Http) { }

  getHeroes(): Promise<Hero[]> {
    return this.http.get(this.heroesUrl)
               .toPromise()
               .then(response => response.json().data as Hero[])
               .catch(this.handleError);
  }


  getHero(id: number): Promise<Hero> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Hero)
      .catch(this.handleError);
  }

  getStorageHouse(id: number): Promise<StorageHouse> {
    console.log('id: ' + id);
    const url = `${this.heroesUrl}/${id}`;
    var storageHouses : StorageHouse[] = StorageHouses;
    return Promise.resolve(StorageHouses[id])    
    // return this.http.get(url)
    //   .toPromise()
    //   .then(response => response.json().data as Hero)
    //   .catch(this.handleError);
  }

  getStorageHouses(): Promise<StorageHouse[]> {
    // const url = `${this.heroesUrl}/${id}`;
    // return this.http.get(url)
    //   .toPromise()
    //   .then(response => response.json().data as Hero)
    //   .catch(this.handleError);
    return Promise.resolve(StorageHouses)
  }

  delete(id: number): Promise<void> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  create(name: string): Promise<Hero> {
    return this.http
      .post(this.heroesUrl, JSON.stringify({name: name}), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data as Hero)
      .catch(this.handleError);
  }

  update(hero: Hero): Promise<Hero> {
    const url = `${this.heroesUrl}/${hero.id}`;
    return this.http
      .put(url, JSON.stringify(hero), {headers: this.headers})
      .toPromise()
      .then(() => hero)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}

