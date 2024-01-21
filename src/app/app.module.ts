import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {UserComponent} from './features/user/components/user/user.component';
import {ToolbarComponent} from './shared/components/toolbar/toolbar.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {HomeComponent} from './home/home.component';
import {UserTableComponent} from './features/user/components/user-table/user-table.component';
import {HttpClientModule} from "@angular/common/http";
import {UserContainerComponent} from './features/user/components/user-container/user-container.component';
import {UserHeaderComponent} from './features/user/components/user-header/user-header.component';
import {ServerErrorComponent} from './shared/components/server-error/server-error.component';
import {FormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSnackBar, MatSnackBarModule} from "@angular/material/snack-bar";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatRadioModule} from "@angular/material/radio";
import {MatCardModule} from "@angular/material/card";
import {MatTableModule} from "@angular/material/table";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatTooltipModule} from "@angular/material/tooltip";

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    ToolbarComponent,
    HomeComponent,
    UserTableComponent,
    UserContainerComponent,
    UserHeaderComponent,
    ServerErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    BrowserAnimationsModule,
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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
