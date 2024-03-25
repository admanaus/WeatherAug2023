import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  constructor(private http: HttpClient) { }

  getWeather(location: string) {
    return this.http.get<any>(
      `https://wttr.in/${location}?format=j1`
    );
  }
}
