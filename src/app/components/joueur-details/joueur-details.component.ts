import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JoueursService } from 'src/app/services/joueurs.service';
import { JoueurCartesService } from 'src/app/services/joueur-carte.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-joueur-details',
  templateUrl: './joueur-details.component.html',
  styleUrls: ['./joueur-details.component.css'],
  providers: [JoueursService, JoueurCartesService],
})
export class JoueurDetailsComponent implements OnInit {
  joueurs: any;
  joueurCartes: any;

  constructor(
    private route: ActivatedRoute,
    private joueursService: JoueursService,
    private JoueurCartesService: JoueurCartesService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    this.joueursService.getOneJoueur(+id!).subscribe((data) => {
      this.joueurs = data;
    });

    this.JoueurCartesService.getJoueurCarte().subscribe((data) => {
      this.joueurCartes = data;
      console.log(data);
    });
  }
}
