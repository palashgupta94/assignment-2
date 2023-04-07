import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  userName = ""

  isDisabled() : boolean {
    if(this.userName === ""){
      return false;
    }
    else return true;
  }
  
  resetUserName() : void {
    console.log("resetting the user name...");
    this.userName = "";
  }

}
