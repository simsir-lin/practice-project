import { Injectable } from '@angular/core';
import { Http, Headers }    from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Weather } from './weather';
import { Icon } from './icon';

@Injectable()
export class WeatherService {
  private domian = 'https://api.heweather.com/x3/weather';
  private key = '347f18ef3e5c4f64b7f8ce6917d550d5';
  private icon: Icon;

  constructor(private http: Http) {
    this.icon = new Icon();
  }

  private getURL(city: string): string {
    return this.domian + '?city=' + city + '&key=' + this.key;
  }

  query(city: string): Promise<Weather> {
    // , { headers: new Headers({'Cache-Control': 'no-cache'}) }
    return this.http.get(this.getURL(city))
      .toPromise()
      .then((response) => {
        return response.json()['HeWeather data service 3.0'][0] as Weather;
      })
      .catch(this.handleError);
  }

  getIcon(code: number): string {
    let icon: string = '',
      isOther = false;

    let index: number = this.icon.SingleCodeIcons.indexOf(code);
    if (index >= 0) {
      return this.icon.SingleCodeIconsMap[index];
    }

    return this.icon.getOtherIcon(code);
  }

  getImage(code: number):string {
    let name = '',
      isOther = false,
      pre = 'assets/images/',
      ext = '.jpg';

    switch (code)
    {
      case 100:
      case 101:
        name = 'spring';
        break;
      case 201:
        name = 'calm';
        break;
      case 200:
      case 202:
      case 203:
      case 204:
        name = 'wind';
        break;
      case 900:
        name = 'sunmer';
        break;
      case 901:
        name = 'winter';
        break;
      default:
        isOther = true;
    }

    if (isOther) {
      if (code >= 205 && code <= 213) {
        name = 'autumn';
      } else if (code >= 300 && code <= 313) {
        name = 'rain';
      } else if (code >= 400 && code <= 407) {
        name = 'winter';
      } else if (code >= 501 && code <= 503) {
        name = 'foggy';
      }
    }

    return pre + name + ext;
  }

  private handleError(error: any): Promise<any> {
    return Promise.reject(error.message || error);
  }
}
