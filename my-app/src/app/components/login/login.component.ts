import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  isError = false;

  isAprovado = false;

  user = ""
  pwd = ""

  login(){
    

    if (this.user == "luana050" && this.pwd == "12345") {
      this.isAprovado = true
      this.isError = false
      }  else { 

        this.isError= true;
        this.isAprovado = false
      }
    

      console.log("User = " + this.user + " Password = " + this.pwd)
    
    
  }
}
