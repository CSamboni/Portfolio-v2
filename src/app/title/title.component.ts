import { Component, OnInit, Input } from '@angular/core';

@Component({
 selector: 'app-title',
 templateUrl: 'title.component.html',
 styleUrls: ['title.component.css']
})
export class TitleComponent implements OnInit{
  public name : string = 'Cristian';
  public edad : number;
  public edades : number[];
  public moreInformation : boolean = false;
  //public css_classes : string[] = ['active', 'shadow'];
  public isAvailable : boolean = false;
  public topics : string[]
  public category : string; //Mobile, web, other
  public jman : string[];
  public launchDate : Date;
  public price : number = 25;
  public seconds : number = 3660;

  @Input() subscribed : boolean;

  constructor(){}
    ngOnInit(){
    this.category = 'web';
    this.name = 'Cristian';
    this.launchDate = new Date(2018,11,5);
    //this.edad = 16;
    this.topics = [
    'Fundamentos del framework',
    'Componentes',
    'Directivas',
    'Animaciones',
    'Servicios',
    'RxJS',
    'Binding'
    ];

    this.jman = [
    'Día del maestro',
    'Horario del Martes',
    'Descanso único',
    'Celebración en el aula. Grados impares'
    ];
    //setTimeout(() => this.name = 'DeveloperJS' ,3000)
    //setTimeout(() => this.isAvailable = false ,4000)
    //setTimeout(() => this.css_classes = ['shadow'], 5000)
    //setTimeout(() => this.moreInformation = true, 3000)
}

  //getEdadNombre() : string {
  	//return`${this.name} : ${this.edad}`;

  //}

  toggleMoreInformation(){
    this.moreInformation = !this.moreInformation;
  }
}
