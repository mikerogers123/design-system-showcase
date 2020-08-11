import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BreadcrumbsModule } from '@ukho/components';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BreadcrumbsModule,
],
  bootstrap: [AppComponent],
})
export class AppModule {}
