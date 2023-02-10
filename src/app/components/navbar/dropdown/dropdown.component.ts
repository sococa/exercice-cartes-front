import { Component } from '@angular/core';
import { JoueursService } from 'src/app/services/joueurs.service';
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
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css'],
  providers: [JoueursService],
})
export class DropdownComponent implements OnInit {
  title = 'exercice_carte_front';
  joueurs: Player[];

  constructor(private joueursService: JoueursService) {}

  ngOnInit() {
    this.joueursService.getJoueurs().subscribe((data) => {
      this.joueurs = data["hydra:member"];  
    });

    this.joueursService.getOneJoueur(1).subscribe((data) => {
      this.joueurs = data["hydra:member"];
    })
  }
}