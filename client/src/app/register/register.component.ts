import { HttpClient } from '@angular/common/http';
import { Component} from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent{

  constructor(private http: HttpClient){}

  model = new User('username');

  submitted = false;

  onSubmit(){ this.submitted = true; }

  newUser() { 
  	this.http.post("https://localhost:5001/api/Account/register", this.model).subscribe(
  		response => {
  			console.log(response)
  		}, error => {
  			console.log(error)
  		})
  	this.model = new User('test')
  }

  diagnostic() { return JSON.stringify(this.model); }
}
