import { Component, OnInit } from '@angular/core';
import {HttpService} from './../http.service';
import { ActivatedRoute,Params,Router} from '@angular/router';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  authorId:string;
  author:[any];
  quotes:any;
  errorMsg:string;

  constructor(private _httpService: HttpService, private _route: ActivatedRoute, private _router:Router) { }

  ngOnInit() {
  }
  getOneAuthor(){
    let observable =this._httpService.getOneAuthor(this.authorId);
    observable.subscribe(data=>{
      console.log("Got data from find one", data);
      if(data['message'] == 'Success'){
        this.author = data['author']['name']
        this.author = data['author']['quote']
        this._router.navigate(['/quotes', this.authorId])
      }
    })
  }

}




