import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { PosterShowComponent } from './poster/poster-show/poster-show.component';
import { PosterEditComponent } from './poster/poster-edit/poster-edit.component';
import { PosterOptionsComponent } from './poster/poster-options/poster-options.component';
import { AngularDraggableModule } from 'angular2-draggable';
import { ReactiveFormsModule } from '@angular/forms';

registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
    PosterShowComponent,
    PosterEditComponent,
    PosterOptionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgZorroAntdModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AngularDraggableModule
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }],
  bootstrap: [AppComponent]
})
export class AppModule { }
