import { Component } from '@angular/core';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { GetDataService } from '../services/get-data.service';
import {MatListModule} from '@angular/material/list';


@Component({
  selector: 'app-get-location',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatDividerModule,
    MatButtonModule,
    MatProgressBarModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatListModule
  ],
  templateUrl: './get-location.component.html',
  styleUrl: './get-location.component.css'
})
export class GetLocationComponent {

  constructor(private getDataService: GetDataService) { }

  isLoading = false;
  location = 'Lehi, UT';
  weatherData: any[] = [];

  getWeather(){
    this.isLoading = true;
    this.getDataService.getWeather(this.location).subscribe((res: any) => {
      this.weatherData = res.weather;
      console.log(res);
      this.isLoading = false;
    });
  }
}
