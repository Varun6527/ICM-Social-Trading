import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../../auth/service/auth.service';

@Injectable()
export class WebAuthInterceptor implements HttpInterceptor {

  constructor(private _authService: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const accessToken = this._authService.getAccessToken();
    if (accessToken) {
      const cloned = req.clone({
        setHeaders: {
          Authorization: `Bearer ${accessToken}`
        }
      });
      return next.handle(cloned);
    }
    return next.handle(req);
  }
}
