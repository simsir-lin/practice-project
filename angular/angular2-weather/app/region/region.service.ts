import { Injectable } from '@angular/core';
import { Http }    from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Region } from './region';
import { LocalStorageService } from '../localstorage/localstorage.service';

@Injectable()
export class RegionService {
  private url: string = 'https://api.heweather.com/x3/citylist?search=allchina&key=347f18ef3e5c4f64b7f8ce6917d550d5';
  private cacheKey: string = 'regions';
  private _regions: Region[] = [];

  constructor(private http: Http, private localstorage: LocalStorageService) {  }

  getRegionsByAPI(): Promise<Region[]> {
    if (this._regions.length <= 0) {
      return this.http.get(this.url)
        .toPromise()
        .then((response) => {
          this._regions = response.json().city_info as Region[];
          return this._regions;
        }, () => {
          return [];
        });
    } else {
      return Promise.resolve(this._regions);
    }
  }

  set(region: string): void {
    let regions: string[] = [];
    let isHas: boolean = false;
    if (this.get()) {
      regions = this.get();
    }
    regions.forEach(function (item) {
      if (item === region) {
        isHas = true;
      }
    });
    if (!isHas) {
      regions.push(region);
    }
    this.localstorage.set(this.cacheKey, regions);
  }

  get(): string[] {
    return this.localstorage.get(this.cacheKey) || [];
  }

  remove(region: string): void {
    let regions: string[] = [];
    let index: number;
    if (this.get()) {
      regions = this.get();
    }
    if (regions.length === 0) {
      return;
    }
    for (let i:number = 0;i < regions.length; i++) {
      if (regions[i] === region) {
        index = i;
      }
    }
    if (!index) {
      return;
    }
    regions.splice(index, 1);
    this.localstorage.set(this.cacheKey, regions);
  }
}
