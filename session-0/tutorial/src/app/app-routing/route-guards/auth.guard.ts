import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { AuthService } from '../../auth.service';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    constructor(private authService: AuthService, private router: Router) { }

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

        // console.log('AuthGuard#canActivate called');
        const url: string = state.url;
        const isLoggedIn$ = this.authService.isLoggedIn$;
        isLoggedIn$.subscribe(bool => {
            if (bool) {
                console.log(bool)
                // this.router.navigate(['/admin']);
            } else {
                // this.router.navigate(['/forbidden']);
            }
        });

        return isLoggedIn$;
    }

}
