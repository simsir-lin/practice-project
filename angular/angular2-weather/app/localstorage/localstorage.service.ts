import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService {
  private _storage = window.localStorage;
  private _flag = '{--}';

  constructor () { }

  set(key: string, value: any): void {
    let type = typeof value;
    if (type === 'string' || type === 'number') {
      type += this._flag;
      value = type + value;
    } else if (type === 'object') {
      value = type + this._flag + JSON.stringify(value);
    }
    this._storage[key] = value;
  }

  get(key: string): any {
    let value = this._storage[key];
    if (!value) {
      return undefined;
    }
    let res = value.split(this._flag);
    if (res[0] === 'string' || res[0] === 'number') {
      return res[1];
    } else {
      return JSON.parse(res[1]);
    }
  }

  clear(): void {
    this._storage.clear();
  }
}
