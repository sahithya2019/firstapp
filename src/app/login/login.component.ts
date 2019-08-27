import { Component, OnInit } from '@angular/core';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
 title="Organic Foods"
  constructor(private test:AuthService) { }

 
fetch1(){
  return this.test.fetch().subscribe(res => {console.log(res)})
}


  

}
