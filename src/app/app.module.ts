import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './features/user/components/user/user.component';
import { ToolbarComponent } from './shared/components/toolbar/toolbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { UserTableComponent } from './features/user/components/user-table/user-table.component';
import { HttpClientModule} from "@angular/common/http";
import { UserContainerComponent } from './features/user/components/user-container/user-container.component';
import { UserHeaderComponent } from './features/user/components/user-header/user-header.component';
import { ServerErrorComponent } from './shared/components/server-error/server-error.component';
import {FormsModule} from "@angular/forms";

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
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
