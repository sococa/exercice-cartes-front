import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export type Data<T> = T extends any[] ? { 'hydra:member': T } : T;

export interface Player {
  id: number;
  nom: string;
  email: string;
}

@Injectable({
  providedIn: 'root',
})

export class JoueursService {
  readonly API_URL = 'http://localhost:8000/api';
  readonly ENDPOINT = '/joueurs';

  constructor(public httpClient: HttpClient) {}

  getJoueurs() {
    return this.httpClient.get<Data<Player[]>>(
      this.API_URL + this.ENDPOINT
    );
  }

  getOneJoueur(id: number) {
    return this.httpClient.get<Data<Player>>(
      this.API_URL + this.ENDPOINT + '/' + id
    );
  }
}
