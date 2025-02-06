import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../../auth/service/auth.service';

@Injectable({
    providedIn: 'root'
})

export class AuthGuard implements CanActivate {

    constructor(private _authService: AuthService, private _router: Router) {
    }

    canActivate(): boolean {
        let flag = this._authService.isAccessTokenGenerated();
        if (!flag) {
            this._router.navigate(['./portal/login']);
            return false;
        } else {
            return true;
        }
    }
}