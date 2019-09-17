import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';


@Injectable({
  providedIn: 'root',
})
export class CanActivateGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    let url: string = state.url;

    let currentUser = localStorage.getItem('user');
    console.log(currentUser);
    if(currentUser) {
        return true;
    } else {
        this.router.navigate(['/signin']);
        return false;
    }
  }

  
}