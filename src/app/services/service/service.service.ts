import { Injectable } from '@angular/core';
import  offers  from '../../../assets/json/ofertas.json'

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor() { }

  getData() {
    return offers;
  }
}
