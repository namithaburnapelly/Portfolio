import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EducationComponent } from './education/education.component';
import { FollowingCursorComponent } from './following-cursor/following-cursor.component';
import { HomeGridComponent } from './home-grid/home-grid.component';
import { ProjectsComponent } from './projects/projects.component';
import { ResumeComponent } from './resume/resume.component';
import { ProjectsGridComponent } from './projects-grid/projects-grid.component';
import { TypewriterComponent } from './typewriter/typewriter.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { WorkGridComponent } from './work-grid/work-grid.component';

@NgModule({
  declarations: [
    AppComponent,
    EducationComponent,
    FollowingCursorComponent,
    HomeGridComponent,
    ProjectsComponent,
    ResumeComponent,
    ProjectsGridComponent,
    TypewriterComponent,
    WorkExperienceComponent,
    WorkGridComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
