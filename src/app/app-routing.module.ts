import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ExtendedObjectDetailsComponent } from './extended-object-details/extended-object-details.component';

const routes: Routes = [
  { path: 'detail/:id', component: ExtendedObjectDetailsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
