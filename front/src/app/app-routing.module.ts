import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FormationComponent } from './formation/formation.component';
import { BlogComponent } from './components/blog/blog.component';
import { HireProcessComponent } from './hire-process/hire-process.component';
import { ContactComponent } from './components/contact/contact.component';
import { DetailFormationComponent } from './components/detail-formation/detail-formation.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: '', component: HomeComponent 
  },
  {
    path: 'formation', component: FormationComponent 
  },
  {
    path: 'formation/formation-detail', component: DetailFormationComponent 
  },
  {
    path: 'blog', component: BlogComponent 
  },
  {
    path: 'hire', component: HireProcessComponent 
  },
  {
    path: 'contact', component: ContactComponent 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
