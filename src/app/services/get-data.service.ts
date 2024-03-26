import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  constructor(private http: HttpClient) { }

  apiResponseCache: any = {};

  getWeather(location: string) {
    return this.http.get<any>(
      `https://wttr.in/${location}?format=j1`
    );
  }

  setApiResponseCache(data: any) {
    this.apiResponseCache = data;
  }

  getApiResponseCache() {
    return this.apiResponseCache;
  }
}
