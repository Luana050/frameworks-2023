import { Component } from '@angular/core';
import { Hero } from 'src/app/hero';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  vetor = [1, 5, 13, 24];

  heroes = ["miranha", "homem d ferro", "dr estranho", "thanos"];

  hero: Hero = {
    id:1,
    nome: "Capitão America",
  }

}
