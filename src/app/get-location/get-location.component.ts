import { Component } from '@angular/core';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {FormBuilder, FormGroup, FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { GetDataService } from '../services/get-data.service';
import {MatListModule} from '@angular/material/list';
import { Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import {MatLine} from "@angular/material/core";


@Component({
  selector: 'app-get-location',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatDividerModule,
    MatButtonModule,
    MatProgressBarModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatListModule,
    MatLine
  ],
  templateUrl: './get-location.component.html',
  styleUrl: './get-location.component.css'
})
export class GetLocationComponent {

  form: FormGroup

  constructor(
    private getDataService: GetDataService,
    private router: Router,
    fb: FormBuilder) {
    this.form = fb.group({
      city: ['Lehi'],
      state: ['Utah'],
    });
  }

  isLoading = false;
  location = 'Lehi, UT';
  weatherData: any[] = [];

  getWeather(){
    this.isLoading = true;
    this.location = this.form.controls["city"].getRawValue() + ", " + this.form.controls["state"].getRawValue();
    this.getDataService.getWeather(this.location).subscribe((res: any) => {
      this.weatherData = res.weather;
      this.getDataService.setApiResponseCache(res);
      this.isLoading = false;
      this.router.navigate(['/weather']);
    });
  }

  clearCity(): void {
    this.form.controls['city'].setValue('');
  }

  clearState(): void {
    this.form.controls['state'].setValue('');
  }
}
