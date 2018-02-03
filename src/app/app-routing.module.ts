import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { NewComponent } from './new/new.component';
import { CreateComponent } from './create/create.component';
import { WriteComponent } from './write/write.component';
import { QuotesComponent } from './quotes/quotes.component';

const routes: Routes = [
  { path: '',component: HomeComponent },
  { path: 'new',component: NewComponent },
  { path: 'quotes/:id',component: QuotesComponent },
  { path: 'write/:id',component: WriteComponent },
  { path: '**',component: NewComponent },
  { path: 'new',redirectTo:'/' },
  { path: '', pathMatch: 'full', redirectTo: '/new' },
  // { path: '**', component: '/PageNotFoundComponent' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
