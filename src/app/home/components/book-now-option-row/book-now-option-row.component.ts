import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-book-now-option-row',
  templateUrl: './book-now-option-row.component.html',
  styleUrl: './book-now-option-row.component.scss',
})
export class BookNowOptionRowComponent {
  @Input() quantity = 0;

  @Input() label!: string;
  @Input() minQuantity!: number;
  @Output() quantityChange = new EventEmitter<number>();

  decrementQuantity() {
    this.quantity -= 1;
    this.quantityChange.emit(this.quantity);
  }

  incrementQuantity() {
    this.quantity += 1;
    this.quantityChange.emit(this.quantity);
  }
}
