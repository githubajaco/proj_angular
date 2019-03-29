import { Component, OnInit, Input } from '@angular/core';
import * as moment from 'moment';
import { Rdv } from '../modeles/rdv';
import { RdvService } from '../rdv.service';

@Component({
  selector: 'app-rdv',
  templateUrl: './rdv.component.html',
  styleUrls: ['./rdv.component.css']
})
export class RdvComponent implements OnInit {
  //valeurButton arrive direct ici à la validation du formulaire de boutons radio:
  public valeurButton: number;
  //date formatée retournée par le choix sur le date picker:
  public dateSaisie: string;
  //tableau des rdv:
  private rdvs: Rdv[];
  //tableau de 8 booleans (initialisés à false) correspondant aux créneaux horaires d'une dateSaisie
  creneauOccupe: number [] = [0, 0, 0, 0, 0, 0, 0, 0];

  constructor(private rdvService: RdvService) { }

  ngOnInit() {
    //au démarrage on ramène le tableau des rdv: 
    this.rdvService.findRdvs().subscribe(
      rdvs => {
        this.rdvs = rdvs;
        console.log(rdvs);
      }      
    )  
  }
//@Input()
//disabled: boolean
  //recup valeur du date picker en la formatant avec moment:
  public choixDate(date){
    console.log(moment(date.value).format('DD/MM/YYYY'));  
    this.dateSaisie = moment(date.value).format('DD/MM/YYYY');
    if(this.isRdvComplet(this.dateSaisie)){

      alert("Date complète, choisissez une autre date !");
    }
  }
  

  //entrer un rdv dans la base:
  public envoiResult(){
    console.log(this.valeurButton)
    const rdv: Rdv = {
      date_rdv: this.dateSaisie,
      heure_rdv: this.valeurButton,
      userId: 1
    }
    this.rdvService.addRdv(rdv).subscribe(
      result => {alert("Rdv ajouté !")},
      error => {alert("Ajout non réalisé")}
    )
    
  }  
  public isRdvComplet(d: string): boolean{
    let somHeures: number = 0;
    for(let item of this.rdvs ){
      //pour chaque rdv correspondant au choix du date picker et si l'heure est disponible:      
        if(item.date_rdv == d) {
          this.creneauOccupe[item.heure_rdv-1] = item.heure_rdv;
          somHeures += item.heure_rdv;
        }      
    }
    if(somHeures == 36)
    return true;
    else{
      console.log(this.creneauOccupe);
      return false;
    } 
  }
  
}