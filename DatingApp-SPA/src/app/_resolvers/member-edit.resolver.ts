import { AuthService } from './../_services/auth.service';
import { catchError } from 'rxjs/operators';
import { AlertifyService } from '../_services/alertify.service';
import { UserService } from '../_services/user.service';
import { Injectable } from '@angular/core';
import { User } from '../_models/user';
import { Resolve, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable()
export class MemberEditResolver implements Resolve<User> {
    // tslint:disable-next-line: max-line-length
    constructor(private userService: UserService, private router: Router, private alertify: AlertifyService, private authservice: AuthService) {

    }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): User | Observable<User> | Promise<User> {
       return this.userService.getUser(this.authservice.decodedToken.nameid).pipe(
           catchError(error => {
               this.alertify.error('Problem retreiving data');
               this.router.navigate(['/members']);
               return of(null);
           })
       );
    }
}
