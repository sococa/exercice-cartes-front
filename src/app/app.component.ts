import { Component } from '@angular/core';
import { JoueursService } from './services/joueurs.service';
import { OnInit } from '@angular/core';

interface Player {
  id: number;
  nom: string;
  email: string;
}

export interface Data {
  "hydra:member": Player[];
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [JoueursService],
})
export class AppComponent implements OnInit {
  title = 'exercice_carte_front';
  joueurs: Player[];

  constructor(private joueursService: JoueursService) {}

  ngOnInit() {
    this.joueursService.getJoueurs().subscribe((data) => {
      this.joueurs = data["hydra:member"];  
    });
  }
}
