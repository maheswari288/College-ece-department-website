import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CoursesComponent } from './courses/courses.component';
import { PagesComponent } from './pages/pages.component';
import { ContactComponent } from './contact/contact.component';
import { JoinusComponent } from './joinus/joinus.component';
import { AcheivmentsComponent } from './acheivments/acheivments.component';
import { StudentacheivmentsComponent } from './studentacheivments/studentacheivments.component';
import { FacultyachievmentsComponent } from './facultyachievments/facultyachievments.component';
import { PlacementsComponent } from './placements/placements.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    CoursesComponent,
    PagesComponent,
    ContactComponent,
    JoinusComponent,
    AcheivmentsComponent,
    StudentacheivmentsComponent,
    FacultyachievmentsComponent,
    PlacementsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
