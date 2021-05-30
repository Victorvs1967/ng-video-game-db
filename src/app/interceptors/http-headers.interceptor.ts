import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class HttpHeadersInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    req = req.clone({
      setHeaders: {
        "x-rapidapi-key": "c3a3a1f5bcmsh4cc8762b081790ap1fb4bcjsn4477ad658522",
        "x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com",
      },
      setParams: {
        key: 'f959a9792af34a0c9ba6cea238ac34b1'
      }
    });
    
    return next.handle(req);
  }


}