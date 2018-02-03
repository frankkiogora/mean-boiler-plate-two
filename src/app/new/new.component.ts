import { Component, OnInit } from '@angular/core';
import {HttpService} from './../http.service';
import { ActivatedRoute,Params,Router} from '@angular/router';


@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})

export class NewComponent implements OnInit {
  author:{name:""};
  data:any;


  constructor(private _httpService: HttpService, private _route: ActivatedRoute, private _router:Router) { }

  ngOnInit() {
    this._route.params.subscribe(data=>{
      this._route.params = data.id;
      this.data=data.id
     console.log('from params :',data);
     this.createAuthor();
    })
  }

  createAuthor(){
  console.log('createAuthor function is working',this.author)
   let observable = this._httpService.createAuthor(this.author);
      observable.subscribe(data=>{
        this.author = data['author']
        console.log('Got data from new @@@@@@@@ :',data['author']);
      })
  }
}
