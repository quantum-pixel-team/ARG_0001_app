import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './features/user/components/user/user.component';
import { HomeComponent } from './home/home.component';
import { UserTableComponent } from './features/user/components/user-table/user-table.component';
import { HttpClientModule } from '@angular/common/http';
import { UserContainerComponent } from './features/user/components/user-container/user-container.component';
import { UserHeaderComponent } from './features/user/components/user-header/user-header.component';
import { ServerErrorComponent } from './shared/components/server-error/server-error.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatInput, MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSortModule } from '@angular/material/sort';
import { MatTabBody } from '@angular/material/tabs';
import {
  MatSidenavContainer,
  MatSidenavModule,
} from '@angular/material/sidenav';
import { MatDialogActions, MatDialogContent } from '@angular/material/dialog';
import { CoreModule } from './core/core.module';
import { AsyncPipe, NgIf, NgSwitch } from '@angular/common';
import { LanguageSelectorComponent } from './shared/components/language-selector/language-selector.component';
import { MatMenu, MatMenuItem, MatMenuTrigger } from '@angular/material/menu';
import { MainNavComponent } from './shared/components/main-nav/main-nav.component';
import { MatListModule } from '@angular/material/list';
import { MatButtonToggle } from '@angular/material/button-toggle';
import { MatSelectModule } from '@angular/material/select';
import { SharedModule } from './shared/shared.module';
import {HomeWelcomeComponent} from "./home/components/home-welcome/home-welcome.component";
import {WelcomHomeComponent} from "./home/components/welcom-home/welcom-home.component";

const app_modules = [CoreModule, SharedModule];

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    HomeComponent,
    UserTableComponent,
    UserContainerComponent,
    UserHeaderComponent,
  ],
  imports: [
    ...app_modules,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatSnackBarModule,
    MatCardModule,
    MatRadioModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    MatTableModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatInput,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSortModule,
    MatTabBody,
    MatSidenavContainer,
    MatDialogContent,
    MatDialogActions,
    NgSwitch,
    NgIf,
    HomeWelcomeComponent,
    WelcomHomeComponent
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
