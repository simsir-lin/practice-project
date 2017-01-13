const ICONSCODE: number[] = [
  100, 102, 104, 306, 312, 313, 401,
  502, 503, 504, 506, 901, 900, 999
];

const ICONSMAP: string[] = [
  '&#xe638;', '&#xe609;', '&#xe6fc;', '&#xe621;', '&#xe627;', '&#xe628;', '&#xe632;', '&#xe6f2;', '&#xe686;', '&#xe60c;', '&#xe644;', '&#xe63f;', '&#xe620;', '&#xe60b;'
];

export class Icon {
  public SingleCodeIcons: number[] = ICONSCODE;
  public SingleCodeIconsMap: string[] = ICONSMAP;

  getOtherIcon(code): string {
    let icon: string = '',
      isOther = false;

    switch (code)
    {
      case 101:
      case 103:
        icon = '&#xe886;';
        break;
      case 305:
      case 309:
        icon = '&#xe621;';
        break;
      case 307:
      case 308:
      case 310:
      case 311:
        icon = '&#xe623;';
        break;
      case 400:
      case 407:
        icon = '&#xe631;';
        break;
      case 402:
      case 403:
        icon = '&#xe633;';
        break;
      case 404:
      case 405:
      case 406:
        icon = '&#xe62d;';
        break;
      case 500:
      case 501:
        icon = '&#xe606;';
        break;
      case 507:
      case 508:
        icon = '&#xe637;';
        break;
      default:
        isOther = true;
    }

    if (isOther) {
      if (code >= 200 && code <= 204) {
        icon = '&#xe60e;';
      } else if (code >= 205 && code <= 208) {
        icon = '&#xe60d;';
      } else if (code >= 209 && code <= 213) {
        icon = '&#xe71c;';
      } else if (code >= 300 && code <= 304) {
        icon = '&#xe726;';
      }
    }

    return icon;
  }
}
