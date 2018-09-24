import { BrowserModule } from 'node_modules/@angular/platform-browser';
import { NgModule } from 'node_modules/@angular/core';
import { AppComponent } from './app.component';
import { TopoComponent } from './topo/topo.component';
import {PainelComponent } from './painel/painel.component';

@NgModule({
  declarations: [
    AppComponent,
    TopoComponent,
    PainelComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
