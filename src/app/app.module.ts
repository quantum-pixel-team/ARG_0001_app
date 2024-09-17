import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CoreModule } from './core/core.module';
import { NgOptimizedImage } from '@angular/common';

import { HomeModule } from './home/components/home.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { moduleHttpLoaderFactory } from './core/config/translate-http-loader-factory';
import { SharedModule } from './shared/modules/shared.module';
import { StoreModule } from '@ngrx/store';
import { hotelReducer } from './features/hotel/store/hotel.reducer';
import { MatIcon } from "@angular/material/icon";

const app_modules = [CoreModule, SharedModule, HomeModule];

@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgOptimizedImage,
    ...app_modules,
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: moduleHttpLoaderFactory,
        deps: [HttpClient],
      },
      isolate: false,
    }),
    StoreModule.forRoot({ hotel: hotelReducer }, {}),
    MatIcon,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
