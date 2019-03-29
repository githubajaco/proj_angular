import { Component, OnInit, Input } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-design',
  templateUrl: './design.component.html',
  styleUrls: ['./design.component.css']
})
export class DesignComponent implements OnInit {

  public valeurButton: number;
  public dateSaisie: Date;

  //juste pour voir:
  public picker: string;

  constructor() { }
//afficher un console log => utiliser une fct ici ngInit...
  ngOnInit() {
    console.log(this.picker)
  }

  afficheResult(){console.log(this.valeurButton)}
  choixDate(date){
//afficher le contenu de l'objet...
 /*   console.log( 
      JSON.stringify(date.value)
      )*/
    console.log(moment(date.value).format('DD/MM/YYYY'));  
    this.dateSaisie = date.value
  }

  // on obtient un objet date et on va utiliser mommentjs pour formatter la date à l'affichage
}