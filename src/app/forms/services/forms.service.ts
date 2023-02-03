import { Persona } from './../interfaces/persona.intefaces';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class FormsService {
  private urlBackend = 'http://localhost:8080/registerForms/';

  constructor(private http: HttpClient) {}

  getPersonas() {
    return this.http.get<Persona>(this.urlBackend+`${'personas'}`);
  }

  createNewUser(persona: Persona) {
   return this.http.post<Persona>(this.urlBackend+`${'personas'}`, persona);
  }
}
