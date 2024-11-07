import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private _httpClient=inject(HttpClient)
  getSomeTrips():Observable<any>{
    return this._httpClient.get(`${environment.baseUrl}/get-some-trips`)
  }
  getFamousTrips():Observable<any>{
    return this._httpClient.get(`${environment.baseUrl}/get-favourite-tours`)
  }
  getOffers():Observable<any>{
    return this._httpClient.get(`${environment.baseUrl}/get-all-offers`)
  }
  getById(id:number|null|string):Observable<any>{
    return this._httpClient.get(`https://alrmoz.com/marsa_back/public/ar/api/mobile/tours/get-tour/${id}`)

  }
}
