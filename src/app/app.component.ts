import { Component, HostListener, OnInit, Renderer2 } from "@angular/core";
import { Language } from './shared/interfaces/Language';
import { LanguageService } from './shared/services/language.service';
import { DomSanitizer } from "@angular/platform-browser";
import { MatIconRegistry } from "@angular/material/icon";
const THUMBUP_ICON =
  `
  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px">
    <path d="M0 0h24v24H0z" fill="none"/>
    <path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.` +
  `44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5` +
  `1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01L23 10z"/>
  </svg>
`;
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
      .addSvgIcon('instagram',this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/instagram.svg'))
      .addSvgIcon('whatsapp',this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/whatsapp.svg'))
      .addSvgIcon('facebook',this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/facebook.svg'))
      .addSvgIcon('tiktok',this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/tiktok.svg'))
    ;

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
