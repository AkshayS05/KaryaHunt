import { Component } from '@angular/core';
import { Card } from './card.model';
import { cardData } from './components/card/card.data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {
  title = 'karya_hunt';
  cards: Card[] = cardData;

  currentSelectedCard!: Card;

  handleCardSelect(card:Card){
    this.currentSelectedCard = card;
    console.log(this.currentSelectedCard);
  }
}
