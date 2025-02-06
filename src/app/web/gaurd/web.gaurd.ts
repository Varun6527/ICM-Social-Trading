import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { WebService } from '../service/web.service';
import { AuthService } from '../../auth/service/auth.service';

@Injectable({
    providedIn: 'root'
})

export class MyProviderGaurd implements CanActivate {

    constructor(private _webService: WebService, private _router: Router) {
    }

    canActivate(): boolean {
        let flag = this._webService.isProviderAccount;
        if (!flag) {
            this._router.navigate(['./portal']);
            return false;
        } else {
            return true;
        }
    }
}

@Injectable({
    providedIn: 'root'
})

export class MyFollowerGaurd implements CanActivate {

    constructor(private _webService: WebService, private _router: Router) {
    }

    canActivate(): boolean {
        let flag = this._webService.isSubscriptionAccount;
        if (!flag) {
            this._router.navigate(['./portal']);
            return false;
        } else {
            return true;
        }
    }
}

@Injectable({
    providedIn: 'root'
})

export class MyRatingsGaurd implements CanActivate {

    constructor(private _authService: AuthService, private _router: Router) {
    }

    canActivate(): boolean {
        let flag = this._authService.userConfig.ratings.integrationMode == "EmbeddedPage";
        if (!flag) {
            this._router.navigate(['./portal']);
            return false;
        } else {
            return true;
        }
    }
}