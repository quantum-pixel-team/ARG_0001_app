import {
  AfterViewInit,
  Component,
  HostListener,
  OnInit,
  Renderer2,
} from '@angular/core';
import { Language } from './shared/interfaces/Language';
import { LanguageService } from './shared/services/language.service';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'aragosta-app';
  isContentLoaded = false;

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
    if (!this.isContentLoaded) {
      this.contentLoaded();
    }
  }

  private contentLoaded() {
    if (this.isContentLoaded) { return; }
    this.isContentLoaded = true;
    this.addGtmScript();
    this.addGtmNoscript();
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.contentLoaded();
    }, 1000);
  }
  addGtmScript(): void {

    const scriptContent = `
      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-M5KC45GC');
    `;

    const head = document.head || document.getElementsByTagName('head')[0];
    const scriptElement = document.createElement('script');
    scriptElement.type = 'text/javascript';
    scriptElement.innerHTML = scriptContent;
    head.insertBefore(scriptElement, head.firstChild);

  }


  private addGtmNoscript(): void {
    const noscript = this.renderer.createElement('noscript');
    const iframe = this.renderer.createElement('iframe');
    this.renderer.setAttribute(
      iframe,
      'src',
      'https://www.googletagmanager.com/ns.html?id=GTM-M5KC45GC',
    );
    this.renderer.setAttribute(iframe, 'height', '0');
    this.renderer.setAttribute(iframe, 'width', '0');
    this.renderer.setStyle(iframe, 'display', 'none');
    this.renderer.setStyle(iframe, 'visibility', 'hidden');
    this.renderer.appendChild(noscript, iframe);
    this.renderer.insertBefore(document.body, noscript, document.body.firstChild);
  }
}
