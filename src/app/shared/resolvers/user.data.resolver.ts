import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable, of, tap } from 'rxjs';
import { AuthService } from '../../auth/service/auth.service';

@Injectable({
  providedIn: 'root',
})
export class UserDataResolver implements Resolve<any> {
  constructor(private _authService: AuthService) {}

  resolve(): Observable<any> {
    return this._authService.getUserConfiguration().pipe(
      tap((data) => this._authService.userConfig = data) // Store data in service variable should be stored in ngrx
    );
  }
}
