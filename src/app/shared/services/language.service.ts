import { EventEmitter, Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Language } from '../interfaces/Language';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  onLangChange = new EventEmitter<Language>();

  constructor(private translateService: TranslateService) {
    const savedLanguage = localStorage.getItem('language') ?? 'en';
    this.translateService.setDefaultLang(savedLanguage);
    this.translateService.use(savedLanguage);
  }

  get currentLang(): string {
    return this.translateService.currentLang;
  }

  setLanguage(language: Language): void {
    this.translateService.use(language.code).subscribe({
      next: () => {
        localStorage.setItem('language', language.code);
        this.onLangChange.emit(language);
      },
    });
  }
}
