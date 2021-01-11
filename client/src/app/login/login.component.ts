import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { User } from '../user';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent{

	constructor(private http: HttpClient){}

	model = new User('username');

	submitted = false;

	onSubmit(){ this.submitted = true }

	userLogin(){ 
		// submit login post request
		this.http.post("https://localhost:5001/api/Account/login", this.model).subscribe(
  		response => {
  			console.log(response)
  		}, error => {
  			console.log(error)
  		})
		// capture the authtoken
		// send it to root, 
		// so that all future request send it as a header
		this.model = new User('username')
	}

	diagnostic() { return JSON.stringify(this.model); }
}
