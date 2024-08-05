import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ControlContainer, FormControl, FormControlName, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-book-now-option-row',
  templateUrl: './book-now-option-row.component.html',
  styleUrl: './book-now-option-row.component.scss',
})
export class BookNowOptionRowComponent implements OnInit {
  public form!:FormGroup;

  ngOnInit(): void {

    this.control.valueChanges.subscribe((sub:number)=> {
      this.quantityChange.emit(sub)
      this.quantity=sub
    })

  }
  quantity = 0;
  @Input() label!: string;
  @Output() quantityChange = new EventEmitter<number>();
  @Input() control!: FormControl;
  @Input() minValue!: number;


  decrementQuantity() {
    this.quantity -= 1;
    this.quantityChange.emit(this.quantity);
  }

  incrementQuantity() {
    this.quantity += 1;
    this.quantityChange.emit(this.quantity);
  }
}
