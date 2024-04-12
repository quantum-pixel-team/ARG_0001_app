import {
  Component,
  EventEmitter,
  Input,
  isStandalone,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { Language } from '../../interfaces/Language';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';

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
