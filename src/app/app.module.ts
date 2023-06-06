import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { HomeComponent } from './core/components/home/home.component';
import { FormModule } from './core/components/form/form.module';

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    CoreModule,
    SharedModule,
    BrowserModule,
    AppRoutingModule,
    FormModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
