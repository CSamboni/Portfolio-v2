import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ArticleService } from '../services/articles.service';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {
  public name: string;
  public username: string;
  public avatar: string;


  @Output() subscribed = new EventEmitter<boolean>();

  constructor(private articlesS : ArticleService) { }

  ngOnInit() {
  	this.name = 'Cristian';
  	this.username = 'CSamboni';
  	this.avatar = 
  	'https://avatars1.githubusercontent.com/u/24655632?s=460&v=4';

    setTimeout(() => this.subscribed.emit(true) ,3000)
    setTimeout(() => this.name = 'Cris!', 6000)

    this.articlesS.articleCount = 30;
  }
    changing(event : any){
      this.username = event.target.value;
    }
}
