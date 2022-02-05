import { HttpEvent, HttpHandler, HttpInterceptor, HttpParams, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";

export class SessionInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const accessToken = sessionStorage.getItem('access_token');

        if (accessToken !== null) {
            const authenticatedRequest = request.clone({
                headers: request.headers.set('Authorization', `Bearer ${accessToken}`)
            });

            return next.handle(authenticatedRequest);
        } 

        return next.handle(request);
    }
}