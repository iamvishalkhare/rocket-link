import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { OnloadService } from './onload.service';

@Injectable({
  providedIn: 'root'
})
export class AuthguardGuard implements CanActivate, CanLoad {

  constructor(private router: Router, private onload: OnloadService) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    if (this.onload.user$) return true;
    this.router.navigate(['signup']);
    return false;
  }
}
