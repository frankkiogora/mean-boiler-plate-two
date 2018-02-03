import { Component, OnInit } from '@angular/core';
import {HttpService} from './../http.service';
import { ActivatedRoute,Params,Router} from '@angular/router';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
authorId:string;
author:string;
quote:{quote:""};
errorMsg:string;


constructor(private _httpService: HttpService, private _route: ActivatedRoute, private _router:Router) { }
 

  ngOnInit() {
    this._route.params.subscribe(data=>{
      this._route.params = data.id;
      this.getOneAuthor();
    })
  }

  addQuote(){
    console.log("I am adding a quote")
    this._httpService.addQuoteToAuthor(this.authorId, this.quote).subscribe(data=>{
      if(data['message']=="Success"){
        this.quote={quote:""};
      }
      else{
        this.errorMsg =['error']['errors']['quotes']['errors']['quote']['message']
      }
    });
  }

  getOneAuthor(){
    let observable =this._httpService.getOneAuthor(this.authorId);
    observable.subscribe(data=>{
      console.log("Got data from find one", data);
      if(data['message'] == 'Success'){
        this.author = data['author']['name']
        this._router.navigate(['/quotes', this.authorId])
      }
    })
  }
}
