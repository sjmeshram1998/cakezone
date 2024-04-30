import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { MenuPricingComponent } from './components/menu-pricing/menu-pricing.component';
import { TeamMembersComponent } from './components/team-members/team-members.component';
import { OurServicesComponent } from './components/our-services/our-services.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: "home", component: HomeComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'about', component: AboutComponent},
  {path: 'menu', component: MenuPricingComponent},
  {path: 'master-chefs', component: TeamMembersComponent},
  {path: 'our-services', component: OurServicesComponent},
  {path: 'testimonials', component: TestimonialsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
