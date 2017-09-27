import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {WhoComponent} from './components/who/who.component';

const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'who', component: WhoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
