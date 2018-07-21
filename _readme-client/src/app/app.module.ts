import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './_layout/header/header.component';
import { BodyComponent } from './_layout/body/body.component';
import { FooterComponent } from './_layout/footer/footer.component';
import { IntroductionComponent } from './_components/introduction/introduction.component';

import { ApphelperModule } from './_modules/apphelper/apphelper.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    IntroductionComponent
  ],
  imports: [
    BrowserModule,
    ApphelperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
