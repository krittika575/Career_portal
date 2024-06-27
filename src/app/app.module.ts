import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { JobListingsComponent } from './job-listings/job-listings.component';
import { JobDetailComponent } from './job-detail/job-detail.component';
import { ApplyJobComponent } from './apply-job/apply-job.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SuccessComponent } from './success/success.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'jobs', component: JobListingsComponent },
  { path: 'contact', component: ContactUsComponent },
  { path: 'apply/:id', component: ApplyJobComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    JobListingsComponent,
    JobDetailComponent,
    ApplyJobComponent,
    ContactUsComponent,
    NavbarComponent,
    AboutComponent,
    SuccessComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
