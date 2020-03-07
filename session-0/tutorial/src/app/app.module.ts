import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppMaterialModule } from './app-material.module';

import { AppComponent } from './app.component';
import { HeadComponent } from './app-layout/head/head.component';
import { NeckComponent } from './app-layout/neck/neck.component';
import { TorsoComponent } from './app-layout/torso/torso.component';

import { LoginComponent } from './app-routes/login/login.component';
import { HomeComponent } from './app-routes/home/home.component';
import { ForbiddenComponent } from './app-routing/error-pages/forbidden/forbidden.component';
import { PageNotFoundComponent } from './app-routing/error-pages/page-not-found/page-not-found.component';
import { ConfirmationDialogComponent } from './shared/confirmation-dialog/confirmation-dialog.component';
import { ResetPasswordComponent } from './app-routes/reset-password/reset-password.component';

@NgModule({
    declarations: [
        AppComponent,
        ForbiddenComponent,
        HeadComponent,
        HomeComponent,
        LoginComponent,
        NeckComponent,
        PageNotFoundComponent,
        TorsoComponent,
        ConfirmationDialogComponent,
        ResetPasswordComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        AppRoutingModule,
        AppMaterialModule,
        FlexLayoutModule,
        ReactiveFormsModule,
    ],
    providers: [],
    entryComponents: [
        ConfirmationDialogComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
