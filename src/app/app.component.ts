import { Component, HostListener, OnInit, Renderer2 } from '@angular/core';
import { Language } from './shared/interfaces/Language';
import { LanguageService } from './shared/services/language.service';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  private scriptAdded = false;
  title = 'aragosta-app';

  constructor(
    private languageService: LanguageService,
    private renderer: Renderer2,
    private iconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
  ) {}

  ngOnInit(): void {
    this.iconRegistry
      .addSvgIcon(
        'instagram',
        this.domSanitizer.bypassSecurityTrustResourceUrl(
          'assets/icons/instagram.svg',
        ),
      )
      .addSvgIcon(
        'whatsapp',
        this.domSanitizer.bypassSecurityTrustResourceUrl(
          'assets/icons/whatsapp.svg',
        ),
      )
      .addSvgIcon(
        'facebook',
        this.domSanitizer.bypassSecurityTrustResourceUrl(
          'assets/icons/facebook.svg',
        ),
      )
      .addSvgIcon(
        'tiktok',
        this.domSanitizer.bypassSecurityTrustResourceUrl(
          'assets/icons/tiktok.svg',
        ),
      );
  }

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
