import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Card } from 'src/app/card.model';
import { JobsService } from 'src/app/services/jobs.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  @Input() card!: Card;
  // to get out the data from the component
  @Output() onCardSelect = new EventEmitter<Card>();
  @Output() onCardDeleted = new EventEmitter<string>();

  constructor(private jobService: JobsService, private router: Router) {}

  handleClick() {
    this.onCardSelect.emit(this.card);
  }
  handleDelete(cardId: string): void {
    // Remove from the UI

    this.jobService.deleteJobById(cardId).subscribe(() => {
      // Deletion successful, perform any additional actions (e.g., navigate to a different page)
      this.onCardDelete(cardId);
      // Example: Navigate to a different page after deletion
      this.router.navigate(['/home']);
    });
  }
  onCardDelete(cardId: string): void {
    // Emit an event to notify the parent component about the deletion
    this.onCardDeleted.emit(cardId);
  }
}
