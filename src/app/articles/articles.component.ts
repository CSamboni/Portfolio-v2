import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../services/articles.service';
@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  constructor(private articlesS : ArticleService) { }

  ngOnInit() {
  	this.articlesS.getAll();


  	const observable = this.articlesS.buildObservable();

  	observable.subscribe((data) => {
      console.log(data);
  	});
  }

}


