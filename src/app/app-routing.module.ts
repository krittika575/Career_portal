import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { JobListingsComponent } from './job-listings/job-listings.component';
import { JobDetailComponent } from './job-detail/job-detail.component';
import { ApplyJobComponent } from './apply-job/apply-job.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutComponent } from './about/about.component';
import { SuccessComponent } from './success/success.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'jobs', component: JobListingsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'login', component: LoginComponent },
  { path: 'job/:id', component: JobDetailComponent },
  { path: 'apply/:id', component: ApplyJobComponent },
  { path: 'contact', component: ContactUsComponent },
  { path: 'success', component: SuccessComponent },
  {path:'register', component: RegisterComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' }
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
