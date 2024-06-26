import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HashLocationStrategy, LocationStrategy } from '@angular/common'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { CvComponent } from './pages/cv/cv.component';
import { RouterModule } from '@angular/router';
import { ProjectCardComponent } from './pages/projects/project-card/project-card.component';
import { FooterComponent } from './footer/footer.component';
import { MainCardComponent } from './pages/home/main-card/main-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuBarComponent,
    ProjectsComponent,
    CvComponent,
    ProjectCardComponent,
    FooterComponent,
    MainCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path:'',component: HomeComponent},
      {path:'home',component:HomeComponent},
      {path:'projects',component: ProjectsComponent},
      {path:'cv', component: CvComponent}
    ],{useHash:true})
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
