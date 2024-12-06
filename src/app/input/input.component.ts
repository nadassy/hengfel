/*
 File: input.component.ts
 Author: Nádassy Ilona
 Copyright: 2024, Nádassy Ilona
 Group: 2024-25 SZOFT II/2/E
 Date: 2024-12-06
 Github: https://github.com/nadassy/
 Licenc: GNU GPL
*/


import { CommonModule } from '@angular/common'; // CommonModule importálása
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // FormsModule importálása

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule]  // Importálás hozzáadása
})
export class InputComponent {
  radius: number = 0;
  height: number = 0;
  surfaceArea: number | null = null;

  calculateSurfaceArea() {
    this.surfaceArea = 2 * Math.PI * this.radius * (this.radius + this.height);
  }
}


