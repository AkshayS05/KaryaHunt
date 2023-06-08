import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { JobsService } from 'src/app/services/jobs.service';
import { Card } from 'src/app/card.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  // for observables we need to tell our app by $ sign
  cards$!: Observable<Card[]>;
  currentSelectedCard!: Card;

  //injecting a service-- here component is getting created
  constructor(private jobsService: JobsService) {}

  //here component is completely built
  ngOnInit(): void {
    this.cards$ = this.jobsService.getCardData();
  }

  handleCardSelect(card: Card) {
    this.currentSelectedCard = card;
  }
}
