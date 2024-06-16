import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { CoreModule } from "./core/core.module";
import { NgOptimizedImage } from "@angular/common";
import { SharedModule } from "./shared/shared.module";
import { HomeModule } from "./home/components/home.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

const app_modules = [
  CoreModule,
  SharedModule,
  HomeModule
];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgOptimizedImage,
    ...app_modules,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
