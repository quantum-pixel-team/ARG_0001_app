import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'ecm-user-header',
  templateUrl: './user-header.component.html',
  styleUrls: ['./user-header.component.css']
})
export class UserHeaderComponent {
  @Output() save = new EventEmitter();
  @Output() discard = new EventEmitter();

  saveUsers() {
    this.save.emit()
  }
  discardChanges() {
    this.discard.emit()
  }

}
