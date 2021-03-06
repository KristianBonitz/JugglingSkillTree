import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.scss']
})

export class UserlistComponent implements OnInit {
  users: any;

  constructor(private http: HttpClient){}

  ngOnInit(): void{
    this.getUsers()
  }

  getUsers(){
    this.http.get("https://localhost:5001/api/Users").subscribe(
      response => {
      this.users = response;
    }, error => {
      console.log(error);
    })
  }
}
