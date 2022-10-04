import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  URL = "http://localhost:3000";

  websiteURL;


  constructor(private http: HttpClient) {}



  parseUrl(){
    let body ={
      url: this.websiteURL
    }
    this.http.post('http://localhost:3000/parseurl', body)
    .subscribe((data) =>{
      console.log(data);
      
    },(err) =>{
      console.log(err);
      
    })

  }


}
