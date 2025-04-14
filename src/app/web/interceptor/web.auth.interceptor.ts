import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { AuthService } from '../../auth/service/auth.service';
import { Router } from '@angular/router';

@Injectable()
export class WebAuthInterceptor implements HttpInterceptor {

  constructor(private _authService: AuthService, private _router: Router) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const accessToken = this._authService.getAccessToken();
    if (accessToken) {
      const cloned = req.clone({
        setHeaders: {
          Authorization: `Bearer ${accessToken}`
        }
      });
      return next.handle(cloned).pipe(
        catchError((error: HttpErrorResponse) => {
          if (error.status === 401) {
            this._authService.clearUserDataAndToken();
            this._router.navigate(['/portal/login']);
          }
          return throwError(() => error);
        })
      );
    }
    return next.handle(req);
  }
}
