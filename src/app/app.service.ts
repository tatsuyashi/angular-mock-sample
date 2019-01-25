import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private httpClient: HttpClient) { }

  getGuitars(): Observable<Guitar[]> {
    return of(GET_GUITARS_MOCK);
    // return this.httpClient.get<Guitar[]>('/api/guitars');
  }

  postGuitar(guitar: Guitar): Observable<Guitar> {
    return of(guitar);
    // return this.httpClient.post<Guitar>('/api/guitars', guitar);
  }

}

export const GET_GUITARS_MOCK: Guitar[] = [
  {maker: 'Gibson', name: 'Les Paul'},
  {maker: 'Fender', name: 'Stratocaster'}
];

export interface Guitar {
  maker: string;
  name: string;
}