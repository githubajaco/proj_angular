import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-design',
  templateUrl: './design.component.html',
  styleUrls: ['./design.component.css']
})
export class DesignComponent implements OnInit {

  public valeurButton: number;

  constructor() { }

  ngOnInit() {
  }

  afficheResult(){console.log(this.valeurButton)}
  
  public validation(){
    
  }
}