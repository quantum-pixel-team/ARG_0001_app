import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { Language } from '../../interfaces/Language';
import { TranslateService } from '@ngx-translate/core';

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
    { code: 'it', name: 'Italian' },
  ];
  selectedLanguage: Language = this.languages[0];
  @Input() whiteColor = false;
  @Output() languageChanged = new EventEmitter<Language>();
  @Input() mobile!: boolean;

  constructor(readonly translateService: TranslateService) {}

  onLanguageChange(selectedLanguage: Language) {
    this.languageChanged.emit(selectedLanguage);
    this.translateService.use(selectedLanguage.code);
  }
}
