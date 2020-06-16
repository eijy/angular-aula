import { Component } from '@angular/core';
import {ApiServicesService} from "./services";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title:string = 'github';
  user:string;
  result:any;

  constructor(private apiService: ApiServicesService) {

  }

  buscar() {
    this.apiService.getUsers(this.user)
      .subscribe(
        res => {
          this.result = res
        }, 
        err => {
          console.log(err);
        }
      )
  }
  goToGithub(url) {
    window.open(url,'_blankl');
  }
}
