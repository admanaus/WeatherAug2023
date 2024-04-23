import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { mergeMap, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  constructor(private http: HttpClient) { }

  apiResponseCache: any[] = [];


  getWeather(location: string) {
    return of(location, "Glacier National Park").    // user defined location plus Glacer National Park
              pipe(
                mergeMap(location => this.http.get<any>(`https://wttr.in/${location}?format=j1`))
              )
  }

  setApiResponseCache(data: any) {
    this.apiResponseCache.push(data);
  }

  getApiResponseCache() {
    return this.apiResponseCache;
  }
}
