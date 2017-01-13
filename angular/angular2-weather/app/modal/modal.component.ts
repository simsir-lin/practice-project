import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { RegionService } from '../region/region.service';

@Component({
  selector: 'modal',
  templateUrl: './app/modal/modal.html',
  styleUrls: [ './app/modal/modal.css' ]
})

export class ModalComponent implements OnInit {
  constructor(
    private regionService: RegionService
  ) { }

  isValidate: boolean;
  city: string;
  citys: any[];

  ngOnInit(): void {
    this.regionService.getRegionsByAPI().then(list => {
      this.citys = list;
    });

    this.isValidate = false;
  }

  @Output() close = new EventEmitter<string>();

  onClose() {
    this.close.emit(null);
  }

  onOk() {
    this.citys.forEach(item => {
      if (item.city === this.city) {
        this.close.emit(this.city);
      }
    });
  }

  onChange(event) {
    this.isValidate = false;
    this.citys.forEach(item => {
      if (item.city === this.city) {
        this.isValidate = true;
      }
    });    
  }
}
