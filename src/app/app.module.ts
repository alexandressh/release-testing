import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {SharedUiModule} from '@shopping/shared/ui';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, SharedUiModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
