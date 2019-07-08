import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  authStatus: boolean;

  constructor(private serviceAuth: AuthService, private router: Router) { }

  ngOnInit() {
    this.authStatus = this.serviceAuth.isAuth;
  }

  signIn() {
    this.serviceAuth.signIn().then(
      () => {
        alert('Connexion établie');
        this.authStatus = this.serviceAuth.isAuth;
        this.router.navigate(['liste-des-posts']);
      }
    );
  }

  signOut() {
    alert('Vous êtes à présent déconnecté');
    this.serviceAuth.signOut();
    this.authStatus = this.serviceAuth.isAuth;
  }

}
