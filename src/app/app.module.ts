import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidenavComponent } from '../components/shared/sidenav/sidenav.component';
import { FooterComponent } from '../components/shared/footer/footer.component';
import { BannerComponent } from '../components/banner/banner.component';
import { AboutMeComponent } from '../components/about-me/about-me.component';
import { EducationComponent } from '../components/education/education.component';
import { ExperienceComponent } from '../components/experience/experience.component';
import { PortfolioComponent } from '../components/portfolio/portfolio.component';
import { ReviewComponent } from '../components/review/review.component';
import { ContactMeComponent } from '../components/contact-me/contact-me.component';
import { HomeComponent } from './pages/home/home.component';
import { SidebarComponent } from 'src/components/shared/sidebar/sidebar.component';
import { ProfessionalServicesComponent } from 'src/components/professional-services/professional-services.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    FooterComponent,
    BannerComponent,
    AboutMeComponent,
    EducationComponent,
    ExperienceComponent,
    PortfolioComponent,
    ReviewComponent,
    ContactMeComponent,
    HomeComponent,
    SidebarComponent,
    ProfessionalServicesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
