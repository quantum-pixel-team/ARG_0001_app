import { Component } from '@angular/core';
import { Language } from './shared/interfaces/Language';
import { LanguageService } from './shared/services/language.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'aragosta-app';

  constructor(private languageService: LanguageService) {}

  onLanguageChanged(language: Language) {
    this.languageService.setLanguage(language);
  }
}
