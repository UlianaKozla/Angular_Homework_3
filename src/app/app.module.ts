import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { CurrencyPipe } from './pipe/currency.pipe';
import { HoverDirective } from './hover/hover.directive';
import { FlatComponentComponent } from './components/flat-component/flat-component.component';
import { LoginComponentComponent } from './components/login-component/login-component.component';
import { RegisterComponentComponent } from './components/register-component/register-component.component';
import { CreateFlatComponentComponent } from './components/create-flat-component/create-flat-component.component';


@NgModule({
  declarations: [
    AppComponent,
    CurrencyPipe,
    HoverDirective,
    FlatComponentComponent,
    LoginComponentComponent,
    RegisterComponentComponent,
    CreateFlatComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
