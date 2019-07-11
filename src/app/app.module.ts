import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { MenuItemComponent } from './components/multi-level-menu/menu-item/menu-item.component';
import { MenuComponent } from './components/multi-level-menu/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuItemComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
