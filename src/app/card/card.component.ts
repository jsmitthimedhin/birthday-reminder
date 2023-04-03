import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  cardIsCleared = false;

  clearAll() {
    this.cardIsCleared = true;
  }

  generatePersons() {
    this.cardIsCleared = false;
  }
}
