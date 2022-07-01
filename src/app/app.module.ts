import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderModule } from './header/header.module';
import { LoginModule } from './auth/login/login.module';
import { SignUpModule } from './auth/sign-up/sign-up.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HeaderModule,
    // Auth Modules
    LoginModule,
    SignUpModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
