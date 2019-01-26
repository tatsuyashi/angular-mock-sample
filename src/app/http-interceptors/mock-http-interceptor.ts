import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';

@Injectable()
export class MockHttpInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {
    
    if (environment.production || !environment.mock) {
      return next.handle(req);
    }

    const mockRequest = this.makeMockRequest(req.method, req.url);
    const newReq = req.clone({ ...mockRequest });
    return next.handle(newReq);
  }

  /**
   * make mock method and url.
   * @param method http method
   * @param url request url
   */
  private makeMockRequest(method: string, url: string): { method: string, url: string} {
    // method
    const mockMethod = 'GET';
    // change url
    const mockUrl = `mock/${method}/${url}.json`;

    return {method: mockMethod, url: mockUrl};
  } 


}