import { Component } from '@angular/core';
import { TitleComponent } from './title/title.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  public userSubscribed : boolean = false;

  subscriptionChanged(ev : any){
  	console.log('El usuario se suscribió');
  	this.userSubscribed = ev;
  }
}
