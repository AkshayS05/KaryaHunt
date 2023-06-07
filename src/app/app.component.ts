import { Component, OnInit } from '@angular/core';
import { Card } from './card.model';
import { cardData } from './components/card/card.data';
import { JobsService } from './services/jobs.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'karya_hunt';
  cards: Card[] = [];

  currentSelectedCard!: Card;

  constructor(private jobsService: JobsService) {
    // this.jobsService = jobsService is created with this private keyword;
  }
  ngOnInit(): void {
    this.cards = this.jobsService.getCardData();
  }

  handleCardSelect(card: Card) {
    this.currentSelectedCard = card;
  }
}
