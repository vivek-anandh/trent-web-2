import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppModule } from '../app.module';
import { RouterModule, Routes } from '@angular/router';
import { Ec2Component } from '../ec2/ec2.component';
import { AppComponent } from '../app.component';

const appRoutes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: 'ec2',
        children: [{ path: 'ec2', component: Ec2Component }],
      },
    ],
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(appRoutes)],
  declarations: [],
})
export class RoutingModule {}
