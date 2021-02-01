import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { User } from '../user';
import { AuthService } from '../auth.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent{

	constructor(private http: HttpClient, private authService : AuthService){}

	model = new User('username');

	submitted = false;

	onSubmit(){ this.submitted = true }

	userLogin(){ 
		// submit login post request
		this.http.post("https://localhost:5001/api/Account/login", this.model).subscribe(
  		response => {
  			console.log(response.authToken)
  			this.authService.setKey(response.authToken);
  			console.log(this.authService.getKey())
  		}, error => {
  			console.log(error)
  		})
		// forward page to user details
		this.model = new User('username')
	}

	diagnostic() { return JSON.stringify(this.model); }
}
