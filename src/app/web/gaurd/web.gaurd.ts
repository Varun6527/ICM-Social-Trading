import { Injectable } from '@angular/core';
import { CanActivate, GuardResult, MaybeAsync, Router } from '@angular/router';
import { WebService } from '../service/web.service';
import { AuthService } from '../../auth/service/auth.service';

@Injectable({
    providedIn: 'root'
})

export class MyProviderGaurd implements CanActivate {

    constructor(private _webService: WebService, private _router: Router) {
    }

    canActivate(): MaybeAsync<GuardResult> {
        return new Promise((resolve, reject) => {
            this._webService.setOrRefreshUserProfileDataAsObserver().subscribe({
                next: (response) => {
                    let flag = this._webService.isProviderAccount;
                    if (!flag) {
                        this._router.navigate(['./portal']);
                        reject(false);
                    } else {
                        resolve(true);
                    }
                },
                error: (error) => {
                    this._router.navigate(['./portal'])
                    reject(false);
                }
            })
        })
    }
}

@Injectable({
    providedIn: 'root'
})

export class MyFollowerGaurd implements CanActivate {

    constructor(private _webService: WebService, private _router: Router) {
    }

    canActivate(): MaybeAsync<GuardResult> {
        return new Promise((resolve, reject) => {
            this._webService.setOrRefreshUserProfileDataAsObserver().subscribe({
                next: (response) => {
                    let flag = this._webService.isSubscriptionAccount;
                    if (!flag) {
                        this._router.navigate(['./portal']);
                        reject(false);
                    } else {
                        resolve(true);
                    }
                },
                error: (error) => {
                    this._router.navigate(['./portal'])
                    reject(false);
                }
            })
        })
    }
}

@Injectable({
    providedIn: 'root'
})

export class MyRatingsGaurd implements CanActivate {

    constructor(private _authService: AuthService, private _router: Router) {
    }

    canActivate(): MaybeAsync<GuardResult> {
        return new Promise((resolve, reject) => {
            this._authService.setOrRefreshUserConfiguration().subscribe({
                next: () => {
                    let flag = this._authService.userConfig.ratings.integrationMode == "EmbeddedPage";
                    if (!flag) {
                        this._router.navigate(['./portal']);
                        reject(false);
                    } else {
                        resolve(true);
                    }
                },
                error: () => {
                    this._router.navigate(['./portal']);
                    reject(false);
                }
            })
        })
    }
}

@Injectable({
    providedIn: 'root'
})

export class MyReportsGaurd implements CanActivate {

    constructor(private _webService: WebService, private _router: Router) {
    }

    canActivate(): MaybeAsync<GuardResult> {
        return new Promise((resolve, reject) => {
            this._webService.setOrRefreshUserProfileDataAsObserver().subscribe({
                next: (response) => {
                    let flag = (this._webService.isProviderAccount || this._webService.isSubscriptionAccount) && this._webService.isReportPageEnable;
                    if (!flag) {
                        this._router.navigate(['./portal']);
                        reject(false);
                    } else {
                        resolve(true);
                    }
                },
                error: (error) => {
                    this._router.navigate(['./portal'])
                    reject(false);
                }
            })
        })
    }
}

@Injectable({
    providedIn: 'root'
})

export class MyAuthGaurdWhenUserLoggedIn implements CanActivate {

    constructor(private _authService: AuthService, private _router: Router) {
    }

    canActivate(): boolean {
        let flag = this._authService.isAccessTokenGenerated();
        if (flag) {
            this._router.navigate(['./portal']);
            return false;
        } else {
            return true;
        }

    }
}