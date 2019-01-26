import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { MockHttpInterceptor } from './mock-http-interceptor';
import { XxxInterceptor } from './xxx-http-interceptor';
import { environment } from '../../environments/environment';

const devHttpInterceptorProviders = environment.production ? [] :  [
  { provide: HTTP_INTERCEPTORS, useClass: MockHttpInterceptor, multi: true },
];

export const httpInterceptorProviders = [
  ...devHttpInterceptorProviders,
  { provide: HTTP_INTERCEPTORS, useClass: XxxInterceptor, multi: true },
];
