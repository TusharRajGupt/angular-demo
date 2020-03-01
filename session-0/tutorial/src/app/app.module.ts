import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppMaterialModule } from './app-material.module';

import { AppComponent } from './app.component';
import { HeadComponent } from './app-layout/head/head.component';
import { NeckComponent } from './app-layout/neck/neck.component';
import { TorsoComponent } from './app-layout/torso/torso.component';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ForbiddenComponent } from './errors/forbidden/forbidden.component';
import { PageNotFoundComponent } from './errors/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    HeadComponent,
    NeckComponent,
    TorsoComponent,
    ForbiddenComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppMaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
