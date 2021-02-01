import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component} from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent {

  model: any;

  constructor(private http: HttpClient, private httpHeaders: HttpHeaders){}

  viewDetails() { 
  	this.http.get("https://localhost:5001/api/Users/4").subscribe(
  		response => {
  			console.log(response)
  		}, error => {
  			console.log(error)
  		})
  	this.model = new User('test')
  }

  diagnostic() { return JSON.stringify(this.model); }
}
