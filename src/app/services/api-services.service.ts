import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment"
@Injectable({
  providedIn: 'root'
})
export class ApiServicesService {

  constructor(private httpClient: HttpClient) { }

  getUsers(username):any {
    return this.httpClient.get(`${environment.urlBase}/${username}/repos`)
  }
}
