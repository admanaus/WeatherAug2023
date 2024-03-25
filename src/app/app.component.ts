import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GetLocationComponent } from './get-location/get-location.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, GetLocationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'weatherApp';
}
