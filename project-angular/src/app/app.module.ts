import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MeuPrimeiroComponent} from './meu-primeiro/meu-primeiro.component'
import { AppComponent } from './app.component';
import { CursosModule } from './cursos/cursos.module';
import { DataBindingComponenteComponent } from './data-binding-componente/data-binding-componente.component';

@NgModule({
  declarations: [
    AppComponent,
    MeuPrimeiroComponent,
    DataBindingComponenteComponent,
  ],
  imports: [
    BrowserModule,
    CursosModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
