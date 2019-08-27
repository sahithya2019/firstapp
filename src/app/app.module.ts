import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { RootComponent } from './root/root.component';
import{ HttpClientModule ,HTTP_INTERCEPTORS} from '@angular/common/http';
import { TokenInterceptor } from './token-interceptor.service';
import { AuthService } from './auth.service';
import { httpprovider } from '.';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RootComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AuthService,{provide:HTTP_INTERCEPTORS,useClass:TokenInterceptor,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
