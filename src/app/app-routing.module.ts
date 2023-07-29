import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParentComponent } from './parent/parent.component';
import { RouteType } from 'src/smart/data-access/enum/keys.enum';
import { ChildComponent } from './child/child.component';
import { ErrorPageComponent } from './error-page/error-page.component';

//define the routes for the entire project
const routes: Routes = [
  {
    path: '',
    component: ParentComponent,
    canActivate: [],
    pathMatch: 'full'
  },
  {
    path: RouteType.BOOKING_ISM,
    component: ParentComponent
  },
  {
    path: RouteType.BOOKING_LSM,
    component: ChildComponent
  },
  {
    path: RouteType.SEATS_ERROR,
    component: ErrorPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
