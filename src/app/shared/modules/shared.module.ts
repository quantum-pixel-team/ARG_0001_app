import { NgModule } from '@angular/core';
import { CommonModule, NgIf, NgOptimizedImage } from '@angular/common';
import { MainNavComponent } from '../components/main-nav/main-nav.component';
import { LanguageSelectorComponent } from '../components/language-selector/language-selector.component';
import { ServerErrorComponent } from '../components/server-error/server-error.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule, MatRippleModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatIconAnchor, MatIconButton } from '@angular/material/button';
import { FooterComponent } from '../components/footer/footer.component';

import { MatTooltipModule } from '@angular/material/tooltip';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    MainNavComponent,
    LanguageSelectorComponent,
    ServerErrorComponent,
    FooterComponent,
  ],
  exports: [
    MainNavComponent,
    ServerErrorComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule,
    MatIconModule,
    FormsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    NgOptimizedImage,
    MatIconButton,
    NgIf,
    RouterLink,
    RouterLinkActive,
    MatIconAnchor,
    MatTooltipModule,
    MatRippleModule,
    TranslateModule,
  ],
})
export class SharedModule {}
