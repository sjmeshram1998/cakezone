import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { MenuPricingComponent } from './components/menu-pricing/menu-pricing.component';
import { SpecialComboComponent } from './components/special-combo/special-combo.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule} from '@angular/common/http';
import { TeamMembersComponent } from './components/team-members/team-members.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { OurServicesComponent } from './components/our-services/our-services.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroComponent,
    AboutComponent,
    MenuPricingComponent,
    SpecialComboComponent,
    FooterComponent,
    ContactComponent,
    HomeComponent,
    TeamMembersComponent,
    TestimonialsComponent,
    OurServicesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
