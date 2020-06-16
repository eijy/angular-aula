import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

import {ApiServicesService} from "../../services";
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnChanges {
  @Input() user: any;
  constructor(private apiService: ApiServicesService) { }

  ngOnInit(): void {
  }
  ngOnChanges(changes: SimpleChanges) {
    if (changes.user.currentValue) {
      console.log(changes.user.currentValue);
      this.apiService.getUser(changes.user.currentValue)
        .subscribe(
          res => {
            this.user = res
          },
          err => {
            console.log(err);
          }
        )
    }
  }
}
