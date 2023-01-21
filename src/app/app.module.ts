import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularCountriesFlagsModule } from 'angular-countries-flags';
import { MatSelectModule } from '@angular/material/select';
 import { MatMenuModule } from '@angular/material/menu';
 import { MatDividerModule } from '@angular/material/divider';
 import { MatListModule } from '@angular/material/list';
 import { MatTooltipModule } from '@angular/material/tooltip';
 import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatIconModule,
    AngularCountriesFlagsModule,
    MatSelectModule,
    MatMenuModule,
    MatDividerModule,
    MatListModule,
    MatTooltipModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
