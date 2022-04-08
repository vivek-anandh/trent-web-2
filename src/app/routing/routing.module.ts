import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Ec2Component } from '../ec2/ec2.component';
import { AppComponent } from '../app.component';
import { AuthGuardModule } from '../auth/auth-guard.module';

const appRoutes: Routes = [
  { path: '', component: AppComponent, canActivate: [AuthGuardModule] },
  { path: 'ec2', component: Ec2Component, canActivate: [AuthGuardModule] },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
  declarations: [],
})
export class RoutingModule {}
