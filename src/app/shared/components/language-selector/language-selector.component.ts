import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { Language } from '../../interfaces/Language';
import { TranslateService } from '@ngx-translate/core';
import {LanguageService} from "../../services/language.service";

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
  selectedLanguage: Language;
  @Input() whiteColor = false;
  @Output() languageChanged = new EventEmitter<Language>();
  @Input() mobile!: boolean;

  constructor(readonly languageService: LanguageService) {
    this.selectedLanguage =
      this.languages.find((lan) => lan.code === languageService.currentLang) ??
      this.languages[0];
  }

  onLanguageChange(selectedLanguage: Language) {
    this.languageChanged.emit(selectedLanguage);
  }
}
