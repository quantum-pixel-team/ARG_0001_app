import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { Language } from '../../interfaces/Language';

@Component({
  selector: 'app-language-selector',
  templateUrl: './language-selector.component.html',
  styleUrl: './language-selector.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class LanguageSelectorComponent {
  languages: Language[] = [
    { code: 'en', name: 'English' },
    { code: 'sq', name: 'Shqip' },
  ];
  selectedLanguage: Language = this.languages[0];
  @Input() whiteColor = false;
  @Output() languageChanged = new EventEmitter<Language>();

  onLanguageChange(selectedLanguage: Language) {
    this.languageChanged.emit(selectedLanguage);
  }
}
