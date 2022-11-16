import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private _http: HttpClient) { }
  getdata() {
    return this._http.get('https://countriesnow.space/api/v0.1/countries/capital');
  }
}
