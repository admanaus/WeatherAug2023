import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { GetLocationComponent } from './get-location/get-location.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    GetLocationComponent,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  constructor(private router: Router){}

  title = 'weatherApp';

  goToLocation(){
    console.log("a thing")
    this.router.navigate(['/location']);
  }
}
