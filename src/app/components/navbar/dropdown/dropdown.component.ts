import { Component, OnInit } from '@angular/core';
import { JoueursService, Player } from 'src/app/services/joueurs.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css'],
  providers: [JoueursService],
})
export class DropdownComponent implements OnInit {
  title = 'exercice_carte_front';
  
  public joueurs: Player[];
  public id = this.route.snapshot.paramMap.get('id');

  constructor(
    private joueursService: JoueursService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {

    const id = this.route.snapshot.paramMap.get('id')

    this.joueursService.getJoueurs().subscribe((data) => {
      this.joueurs = data['hydra:member'];
    });

  }
}
