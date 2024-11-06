import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isAdmin!:boolean;

change(isAdmin: boolean) {
  
  if(!isAdmin)
this.isAdmin=true;
else{this.isAdmin=false}
}

}
