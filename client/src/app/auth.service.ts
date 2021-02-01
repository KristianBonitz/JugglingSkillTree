import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  authToken = ""

  setKey(key: string){
  	this.authToken = key;
  }

  getKey(){
  	return this.authToken;
  }

}
