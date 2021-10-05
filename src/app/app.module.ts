import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GigaaaTopbarComponent } from './gigaaa-topbar/gigaaa-topbar.component';
import { GigaaaSidebarComponent } from './gigaaa-sidebar/gigaaa-sidebar.component';
import { GigaaaAccountMenuComponent } from './gigaaa-account-menu/gigaaa-account-menu.component';
import { CreatefirstletterPipe } from './pipes/createfirstletter.pipe';
import { ShowemailorphonePipe } from './pipes/showemailorphone.pipe';
import { ShowexpansionaccountPipe } from './pipes/showexpansionaccount.pipe';

@NgModule({
  declarations: [
    AppComponent,
    GigaaaTopbarComponent,
    GigaaaSidebarComponent,
    GigaaaAccountMenuComponent,
    CreatefirstletterPipe,
    ShowemailorphonePipe,
    ShowexpansionaccountPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
