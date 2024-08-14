import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MaterialModule } from './material/material.module';
import { Header2Component } from './header2/header2.component';
import { ServicesComponent } from './services/services.component';
import { ProjectsComponent } from './projects/projects.component';
import { HistoryComponent } from './history/history.component';
import { EndComponent } from './end/end.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { WorkComponent } from './work/work.component';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    Header2Component,
    ServicesComponent,
    ProjectsComponent,
    HistoryComponent,
    EndComponent,
    AboutComponent,
    ContactComponent,
    WorkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
