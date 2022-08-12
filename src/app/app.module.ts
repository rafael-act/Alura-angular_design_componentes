import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModalComponent } from './shared/components/modal/modal.component';
import { ModalService } from './shared/components/modal/services/modal.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FocusTrapDirective } from './shared/directives/focus-trap.directive';
import { FocusBackDirective } from './shared/directives/focus-back.directive';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ModalComponent,
    FocusTrapDirective,
    FocusBackDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  entryComponents:[
    ModalComponent
  ],
  providers: [ModalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
