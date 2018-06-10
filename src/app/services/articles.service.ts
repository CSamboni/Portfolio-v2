import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

class Repo {
	constructor(public id: string, public name : string){}
}

@Injectable()
export class ArticleService{

  public articleCount : number = 0;
  constructor(private http : HttpClient){

  }

  getAll(){
  	this.http.get('https://api.github.com/users/csamboni/repos')
  	.subscribe(data => {
  		console.log(data);
  	})
  }
   buildObservable() : Observable<any> {
   	  return Observable.create(function(observer) {
        setInterval(() => observer.next("Hola"), 1000)
   	  })
   }
}