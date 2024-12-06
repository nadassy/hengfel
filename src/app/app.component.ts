import { CommonModule } from '@angular/common'; // CommonModule importálása
import { Component } from '@angular/core';
import { InputComponent } from './input/input.component'; // a

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [InputComponent, CommonModule],  // CommonModule és InputComponent importálása
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tetrader';
}


