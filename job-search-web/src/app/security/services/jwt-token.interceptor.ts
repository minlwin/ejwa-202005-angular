import {
  HttpEvent, HttpHandler,

  HttpInterceptor, HttpRequest, HttpResponse
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { SecurityService } from './security.service';

const TOKEN = "jdc-jwt-token"

@Injectable()
export class JwtTokenInterceptor implements HttpInterceptor {

  constructor(private security: SecurityService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    let clone = request

    if (this.security.token) {
      clone = request.clone({ headers: request.headers.append(TOKEN, this.security.token) })
    }

    return next.handle(clone).pipe(tap(event => {
      if (event instanceof HttpResponse) {
        this.security.token = event.headers.get(TOKEN)
      }
    }));
  }
}
