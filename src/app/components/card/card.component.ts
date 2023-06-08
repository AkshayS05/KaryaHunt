import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Card } from 'src/app/card.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  @Input() card!: Card;
  // to get out the data from the component
  @Output() onCardSelect = new EventEmitter<Card>();

  handleClick() {
    this.onCardSelect.emit(this.card);
  }
}
