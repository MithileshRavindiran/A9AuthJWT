import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class BidAuthGuard implements CanActivate {

  constructor(private authService:AuthService, private route:Router) { }
  canActivate(route: import("@angular/router").ActivatedRouteSnapshot, state: import("@angular/router").RouterStateSnapshot): boolean | import("@angular/router").UrlTree | import("rxjs").Observable<boolean | import("@angular/router").UrlTree> | Promise<boolean | import("@angular/router").UrlTree> {
    console.log('inside bid auth guard')
    if (!this.authService.currentUser.admin) {
      return true;
    }else {
      console.log('inside else')
      this.route.navigate(['/no-access']);
      return false;
    }
    
  }
}
