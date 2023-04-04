import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  numeros = [5, 10, 15, 20, 25]

  heroes = ["Capitão America", "Batman", "Mulher Maravilha", "Homem Aranha", "Lanterna Verde"]

}
