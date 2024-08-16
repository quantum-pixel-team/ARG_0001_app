import { Component, HostListener, Renderer2 } from '@angular/core';
import { Language } from './shared/interfaces/Language';
import { LanguageService } from './shared/services/language.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  private scriptAdded = false;
  title = 'aragosta-app';

  constructor(
    private languageService: LanguageService,
    private renderer: Renderer2,
  ) {}

  onLanguageChanged(language: Language) {
    this.languageService.setLanguage(language);
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    if (!this.scriptAdded) {
      this.addGtagScripts();
      this.scriptAdded = true;
    }
  }

  private addGtagScripts(): void {
    // Add the async Google Tag Manager script
    const gtagScript = this.renderer.createElement('script');
    gtagScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-FT7XLT2T0D';
    gtagScript.async = true;
    this.renderer.appendChild(document.head, gtagScript);

    // Add the inline script for gtag configuration
    const inlineScript = this.renderer.createElement('script');
    inlineScript.text = `
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        dataLayer.push(arguments);
      }
      gtag('js', new Date());
      gtag('config', 'G-FT7XLT2T0D');
    `;
    this.renderer.appendChild(document.head, inlineScript);
  }
}
