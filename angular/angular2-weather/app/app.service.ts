import { Injectable } from '@angular/core';

@Injectable()
export class AppService {
  getNowSeason(): String {
    let month = new Date().getMonth() + 1;
    let name: String;
    switch (month)
    {
      case 3:
      case 4:
      case 5:
        name = 'spring';
        break;
      case 6:
      case 7:
      case 8:
        name = 'summer';
        break;
      case 9:
      case 10:
      case 11:
        name = 'autumn';
        break;
      case 12:
      case 1:
      case 2:
        name = 'winter';
        break;
    }
    return name;
  }

  getNowSeasonImage(): String {
    let pre = 'assets/images/',
      ext = '.jpg';
    return pre + this.getNowSeason() + ext;
  }

  getNowWeekNumber(): number {
    return new Date().getDay();
  }

  getChineseWeek(week: number): string {
    week = week >= 7 ? week - 7 : week;
    let weeks: string[] = ["日", "一", "二", "三", "四", "五", "六"];
    return '星期' + weeks[week];
  }
}
