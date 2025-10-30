import { Component } from '@angular/core';

@Component({
  selector: 'app-home-grid',
  standalone: false,
  templateUrl: './home-grid.component.html',
  styleUrl: '../app.component.css',
})
export class HomeGridComponent {
  heading: string = 'Namitha Burnapelly';
  subheading: string = 'Full-Stack Developer & Fiber Artist';
}
