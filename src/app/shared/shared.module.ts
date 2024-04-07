import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { MainNavComponent } from './components/main-nav/main-nav.component';
import { LanguageSelectorComponent } from './components/language-selector/language-selector.component';
import { ServerErrorComponent } from './components/server-error/server-error.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';
import { MatIconButton } from '@angular/material/button';

@NgModule({
  declarations: [
    MainNavComponent,
    LanguageSelectorComponent,
    ServerErrorComponent,
  ],
  exports: [MainNavComponent],
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
    RouterLink,
  ],
})
export class SharedModule {}
