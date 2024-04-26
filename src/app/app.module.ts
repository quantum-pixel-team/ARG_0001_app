import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './features/user/components/user/user.component';

import { UserTableComponent } from './features/user/components/user-table/user-table.component';
import { HttpClientModule } from '@angular/common/http';
import { UserContainerComponent } from './features/user/components/user-container/user-container.component';
import { UserHeaderComponent } from './features/user/components/user-header/user-header.component';

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
import { MatSidenavContainer } from '@angular/material/sidenav';
import { MatDialogActions, MatDialogContent } from '@angular/material/dialog';
import { CoreModule } from './core/core.module';
import { NgIf, NgSwitch } from '@angular/common';
import { SharedModule } from './shared/shared.module';
import { HomeImageComponent } from './home/components/home-image/home-image.component';
import { WelcomePageComponent } from './home/components/welcome-page/welcome-page.component';
import { HomeModule } from './home/components/home.module';

const app_modules = [CoreModule, SharedModule, HomeModule];

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
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
    HomeImageComponent,
    WelcomePageComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
