import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';

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
        ForbiddenComponent,
        HomeComponent,
        HeadComponent,
        LoginComponent,
        NeckComponent,
        PageNotFoundComponent,
        TorsoComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        AppMaterialModule,
        FlexLayoutModule,
        ReactiveFormsModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
