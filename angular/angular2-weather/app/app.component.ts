import { Component, OnInit, trigger,
  state,
  style,
  transition,
  animate } from '@angular/core';

import { AppService } from './app.service';
import { RegionService } from './region/region.service';
import { WeatherService } from './weather/weather.service';
import { Weather } from './weather/weather';
import { Daily } from './weather/daily/daily';
import { Now } from './weather/now/now';

import { LocalStorageService } from './localstorage/localstorage.service';

@Component({
  selector: 'weather',
  templateUrl: './app/app.component.html',
  styleUrls: [ './app/app.component.css' ],
  providers: [ AppService, RegionService, WeatherService, LocalStorageService ],
  animations: [
    trigger('weather', [
      state('state', style({
        opacity: 1
      })),
      transition('void => *', [
        style({
          transform: 'translateY(30%)',
          opacity: 0
        }),
        animate(300)
      ]),
      transition('* => void', [
        animate(500, style({
          transform: 'translateY(100%)',
          opacity: 0
        }))
      ])
    ])
  ]
})

export class AppComponent implements OnInit {
  style = {
    backgroundImage: ''
  };
  dailys: Daily[] = [];
  now: Now = new Now();

  regions: string[] = [];
  regionsIndex: number = 0;

  isShowModal: boolean = false;

  weatherState: string = 'state';

  constructor(
    private appService: AppService,
    private regionService: RegionService,
    private weatherService: WeatherService
  ) { }

  showModal(): void {
    this.isShowModal = !this.isShowModal;
  }
  addRegion(region: string): void {
    this.isShowModal = !this.isShowModal;
    if (region) {
      this.regionService.set(region);
      this.setWeather(region);
      location.reload();
    }
  }

  outputIconElement(code: string): string {
    return '<i class="iconfont-lg">' + code + '</i>'
  }

  changeRegion(region: string) {
    this.weatherState = 'void';
    this.setWeather(region);
  }

  setWeather(city: string) {
    this.weatherService.query(city).then((weather) => {
      this.style.backgroundImage = 'url(' + this.weatherService.getImage(parseInt(weather.now.cond.code)) + ')';

      this.now.region = city;
      this.now.tmp = weather.now.tmp;
      this.now.pop = weather.daily_forecast[0].pop;
      this.now.hum = weather.now.hum;
      this.now.wind = weather.now.wind.sc;

      this.dailys = [];
      for (let i:number = 0; i < 5; i++) {
        let daily = new Daily();
        daily.icon = this.outputIconElement(
          this.weatherService.getIcon(parseInt(weather.daily_forecast[i].cond.code_n))
        );
        daily.date = this.appService.getChineseWeek(this.appService.getNowWeekNumber() + i);
        daily.txt = weather.daily_forecast[i].cond.txt_n;
        daily.maxmin = weather.daily_forecast[i].tmp.min + '°-' + weather.daily_forecast[i].tmp.max + '°';

        this.dailys.push(daily);
      }

      this.weatherState = 'state';
    });
  }

  ngOnInit(): void {
    this.regions = this.regionService.get();

    if (this.regions.length) {
      this.setWeather(this.regions[0]);
    }
  }
}
