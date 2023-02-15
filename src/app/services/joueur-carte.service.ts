import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export type Data<T> = T extends any[] ? { 'hydra:member': T } : T;


export interface PlayerCard {
  nom: string;
  carte_id: number;
}

export interface PlayerCardBis {
  joueur_id: number;
  // image_name: File;
  chiffre: number;
  description: Text;
  quantite_cartes: number;
}

@Injectable({
  providedIn: 'root'
})

export class JoueurCartesService {
  readonly API_URL = 'http://localhost:8000/api';
  readonly ENDPOINT = "/cartesJoueurAssociations";

  constructor(public httpClient: HttpClient) { }

  getJoueurCarte() {
    return this.httpClient.get<PlayerCardBis>(this.API_URL + this.ENDPOINT);
  }

  getOneJoueurCarte(id: number) {
    return this.httpClient.get<Data<PlayerCard>>(
      this.API_URL + this.ENDPOINT + '/' + id
    );
  }
}
