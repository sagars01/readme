import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './_layout/header/header.component';
import { BodyComponent } from './_layout/body/body.component';
import { FooterComponent } from './_layout/footer/footer.component';
import { IntroductionComponent } from './_components/introduction/introduction.component';

import { ApphelperModule } from './_modules/apphelper/apphelper.module';
import { ReadmeBioModule } from './_modules/readme.bio/readme.bio.module';
import { TwoColumnInfoComponent } from './_layout/two-column-info/two-column-info.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    IntroductionComponent,
    TwoColumnInfoComponent
  ],
  imports: [
    BrowserModule,
    ApphelperModule,
    ReadmeBioModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
