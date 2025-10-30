import { Component } from '@angular/core';

@Component({
  selector: 'app-projects-grid',
  standalone: false,
  templateUrl: './projects-grid.component.html',
  styleUrl: '../app.component.css',
})
export class ProjectsGridComponent {
  heading: string = 'Projects';
  subheading: string = "Here are some of the projects I've worked on";
}
