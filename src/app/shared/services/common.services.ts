import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CommonServices {
  navigateToArgLocation() {
    open('https://maps.app.goo.gl/9prZ1wKksVvmixwE7');
  }

  openWhatsapp() {
    open('whatsapp://send?phone=355683337050');
  }
}
