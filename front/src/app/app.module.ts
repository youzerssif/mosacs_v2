import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormationComponent } from './formation/formation.component';
import { ServiceComponent } from './components/service/service.component';
import { BlogComponent } from './components/blog/blog.component';
import { TestimonialComponent } from './components/testimonial/testimonial.component';
import { PartenariatComponent } from './components/partenariat/partenariat.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { HowToWorkComponent } from './components/how-to-work/how-to-work.component';
import { TechStackComponent } from './components/tech-stack/tech-stack.component';
import { DevelopmentApproachComponent } from './components/development-approach/development-approach.component';
import { HireProcessComponent } from './hire-process/hire-process.component';
import { ContactComponent } from './components/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FormationComponent,
    ServiceComponent,
    BlogComponent,
    TestimonialComponent,
    PartenariatComponent,
    ProjectsComponent,
    HowToWorkComponent,
    TechStackComponent,
    DevelopmentApproachComponent,
    HireProcessComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
