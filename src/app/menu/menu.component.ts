import { Component, OnInit } from '@angular/core';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  // isUserLogin:boolean;

  constructor(private authService:HardcodedAuthenticationService) { }

  ngOnInit() {

    // this.isUserLogin=this.authService.isUserLoggedIn()
  }

}
