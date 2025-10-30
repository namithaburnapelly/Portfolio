import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeGridComponent } from './home-grid/home-grid.component';
import { WorkGridComponent } from './work-grid/work-grid.component';
import { ProjectsGridComponent } from './projects-grid/projects-grid.component';

const routes: Routes = [
  { path: '', component: HomeGridComponent, pathMatch: 'full' },
  { path: 'work', component: WorkGridComponent },
  { path: 'projects', component: ProjectsGridComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
