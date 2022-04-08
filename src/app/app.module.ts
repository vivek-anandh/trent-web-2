import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { Ec2Component } from './ec2/ec2.component';
import { RoutingModule } from './routing/routing.module';
import { AuthGuardModule } from './auth/auth-guard.module';

@NgModule({
  imports: [BrowserModule, FormsModule, RoutingModule],
  declarations: [AppComponent, Ec2Component],
  bootstrap: [AppComponent],
  providers: [AuthGuardModule],
})
export class AppModule {}
