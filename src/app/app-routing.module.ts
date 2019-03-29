import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookListComponent } from './book-list/book-list.component';//ancienne appli
import { LoginComponent } from './login/login.component';
import { AccueilComponent } from './accueil/accueil.component';
import { RdvComponent } from './rdv/rdv.component';
import { DesignComponent } from './design/design.component';

const routes: Routes = [
  {
    path: '', component: AccueilComponent
  },
  {
    path: 'rdv', component: RdvComponent
  },
  {
    path: 'accueil', component: AccueilComponent
  },
  {
    path: 'design', component: DesignComponent
  },  
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'books', component: BookListComponent    
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
