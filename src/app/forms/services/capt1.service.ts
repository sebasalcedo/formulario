import { capt1, capt2 } from './../interfaces/questions.interfaces';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Capt1Service {

  private urlBackend = 'http://localhost:8080/registerForms/';

  constructor(private http: HttpClient) { }


  CreateNewresCap1(resCap1: capt1) {
    return this.http.post<capt1>(this.urlBackend+`${'capt1'}`, resCap1);

   }


   CreateNewresCap2(resCap2: capt2) {
    return this.http.post<capt1>(this.urlBackend+`${'capt2'}`, resCap2);

   }
}
