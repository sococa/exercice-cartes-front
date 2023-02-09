import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Data } from '@angular/router';


@Injectable({
  providedIn: 'root',
})
export class JoueursService {
  readonly API_URL = 'http://localhost:8000/api';
  readonly ENDPOINT_JOUEURS = '/joueurs';

  constructor(public httpClient: HttpClient){

  }

  getJoueurs() {
    return this.httpClient.get<Data>(this.API_URL+this.ENDPOINT_JOUEURS)
  }

}

