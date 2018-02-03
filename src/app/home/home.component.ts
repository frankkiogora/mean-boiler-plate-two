import { Component, OnInit } from '@angular/core';
import {HttpService} from './../http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  author:[any];
  errorMsg:string;

  constructor(private _httpService: HttpService) { }
 
  ngOnInit() {
    this.getAuthors();
  }

  getAuthors(){
      this._httpService.getAuthors().subscribe(data=>{
          console.log("At Home component ++++  Got some data  bro !!!!!", data)
        if(data['message']=='Success'){
          this.author =data['authors']
        }else{
          this.errorMsg = "Some went wrong "
        }
      }
    )}
}
  

