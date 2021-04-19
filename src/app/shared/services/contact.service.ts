import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Contact } from '../models/Contact';
@Injectable({
  providedIn: 'root'
})
export class ContactService {
  endpoint = environment.endpoint;
  constructor(private http: HttpClient) { }

  getContacts(params: string) {
    const queryParam = this.endpoint + `` + params;
    return this.http.get<{contacts: Contact[], count: number}>(queryParam);
  }
}
