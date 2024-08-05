import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child-age-now-option-row',
  templateUrl: './child-age-option-row.component.html',
  styleUrl: './child-age-option-row.component.scss',
})
export class ChildAgeOptionRowComponent {
  @Input()quantity !: number;
  @Input() label!: string;
  @Output() quantityChange = new EventEmitter<number>();

  decrementQuantity() {
    this.quantity -= 1;
    console.log("somes")
    this.quantityChange.emit(this.quantity);
  }

  incrementQuantity() {
    this.quantity += 1;
    this.quantityChange.emit(this.quantity);
  }
}
