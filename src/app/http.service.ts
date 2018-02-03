import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';//add this line

@Injectable()
export class HttpService {
  constructor(private _http: HttpClient){ }// add this and below

  getAuthors(){
    return this._http.get('/authors');
  }

  createAuthor(author){
    return this._http.post('/author', author);
  }

  getOneAuthor(id){
    return this._http.get('/author/'+ id);
  }

  addQuoteToAuthor(id, quote){
    return this._http.patch('/author/'+id, quote);
    
  }

}

