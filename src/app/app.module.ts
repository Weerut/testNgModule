import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';;
// Main App
import { AppComponent } from './app.component';
// Main Module
import { AppRoutingModule } from './app-routing.module';
// Component Module
import { HeroesModule } from './heroes/heroes.module';
import { CrisisCenterModule } from './crisis-center/crisis-center.module';
// Child Component
import { ComposeMessageComponent } from './compose-message.component/compose-message.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
// Service
import { DialogService } from './dialog.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    HeroesModule,
    CrisisCenterModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    ComposeMessageComponent,
    PageNotFoundComponent
  ],
  providers: [
    DialogService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
