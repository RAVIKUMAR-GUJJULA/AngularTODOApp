import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string = 'Ravikumar'
  password: string = ''
  errorMessage = 'Invalid Credintials'
  isInvalidLogin = false

  constructor(private router: Router, private authenticateService: HardcodedAuthenticationService) { }

  ngOnInit() {
  }


  handleLogin() {

    console.log(this.username)
    console.log(this.password)

    // if(this.username==='Ravikumar' && this.password==='monkey'){

    if (this.authenticateService.authenticate(this.username, this.password)) {


      this.router.navigate(['welcome', this.username])


      this.isInvalidLogin = false;
    } else {
      this.isInvalidLogin = true;
    }


  }

}
