import { Injectable ,Injector} from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { AuthService } from './auth.service';
//import { getToken } from '@angular/router/src/utils/preactivation';

@Injectable()
export class TokenInterceptor implements HttpInterceptor{
  constructor(private injector:Injector ){}
  
  intercept(request, next){
    let authservice =this.injector.get(AuthService)
    
    let authtoken = request.clone({setHeaders:{Authorization:`Auth Token ${authservice.getToken()}`}})
    return next.handle(authtoken)
  }
 
}
