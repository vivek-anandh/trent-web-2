import { NgModule, Injectable } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

@NgModule({
  imports: [CommonModule],
  declarations: [],
})
@Injectable()
export class AuthGuardModule implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    console.log('This is a test');
    return true;
  }
}
