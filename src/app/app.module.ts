import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { BannerComponent } from './components/banner/banner.component';
import { CardComponent } from './components/card/card.component';
import { ExperiencePipe } from './pipes/experiencePipe/experience.pipe';
import { DatePipe } from './pipes/datePipe/date.pipe';
import { DatePostedComponent } from './components/date-posted/date-posted.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { JobsComponent } from './pages/jobs/jobs.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { JobDetailComponent } from './pages/job-detail/job-detail.component';
import { HoverDirective } from './directives/hover.directive';
import { JobsbylevelComponent } from './pages/jobsbylevel/jobsbylevel.component';
import { AdminComponent } from './pages/admin/admin.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    BannerComponent,
    CardComponent,
    ExperiencePipe,
    DatePipe,
    DatePostedComponent,
    HomeComponent,
    ContactComponent,
    JobsComponent,

    NotFoundComponent,
    JobDetailComponent,
    HoverDirective,
    JobsbylevelComponent,
    AdminComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FontAwesomeModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
