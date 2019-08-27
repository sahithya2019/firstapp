import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn:'root'})
export class AuthService {
  static gettoken() {
    throw new Error("Method not implemented.");
  }

  constructor(private http:HttpClient) { }


  fetch(){
    return this.http.get("https://jsonplaceholder.typicode.com/posts/1")
  }
  
  getToken(){
    return localStorage.getItem('token')
  }
}