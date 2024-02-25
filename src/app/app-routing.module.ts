import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CoursesComponent } from './courses/courses.component';
import { PagesComponent } from './pages/pages.component';
import { JoinusComponent } from './joinus/joinus.component';
import { ContactComponent } from './contact/contact.component';
import { AcheivmentsComponent } from './acheivments/acheivments.component';
import { StudentacheivmentsComponent } from './studentacheivments/studentacheivments.component';
import { FacultyachievmentsComponent } from './facultyachievments/facultyachievments.component';
import { PlacementsComponent } from './placements/placements.component';

const routes: Routes = [

{path: 'home', component: HomeComponent},
{path: 'about', component: AboutComponent},
{path :'courses', component:CoursesComponent },
{path: 'pages' ,component:PagesComponent },
{path :'contact', component: ContactComponent},
{path : 'joinus', component:JoinusComponent},
{path : 'acheivments', component:AcheivmentsComponent},
{path : 'studentacheivments', component:StudentacheivmentsComponent},
{path : 'facultyachievments', component:FacultyachievmentsComponent},
{path : 'placements', component:PlacementsComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
