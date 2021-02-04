import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RootComponent } from './root/root.component';
import { AddRecordComponent } from './root/add-record/add-record.component';
import { ResultsComponent } from './root/results/results.component';

@NgModule({
  declarations: [
    AppComponent,
    RootComponent,
    AddRecordComponent,
    ResultsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
