import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  person={
    id:1,
    nom:"saif"
  }

  quantite!:1;
  imagesrc="/assets/test.png"
  height=200
  width=200   

  color:string="red";
  acheter(){
    this.quantite --;
  }
  onInputChange($event: Event) {
    const el=event?.target as HTMLInputElement
    this.color =el.value;
    }
}
