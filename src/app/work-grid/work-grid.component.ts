import { Component } from '@angular/core';

@Component({
  selector: 'app-work-grid',
  standalone: false,
  templateUrl: './work-grid.component.html',
  styleUrl: '../app.component.css',
})
export class WorkGridComponent {
  heading: string = 'Work Experience';
  subheading: string = "Here are the places I've worked";
}
