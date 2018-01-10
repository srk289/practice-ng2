import { Injectable } from "@angular/core"
import { Router, CanActivate } from "@angular/router"
import { ICurrentUser } from "./user.model"

@Injectable()
export class UserAuthenticate implements CanActivate{
  currentUser:ICurrentUser
  constructor(private router: Router) {}

  login(username: string, password: string) {
    this.currentUser = {
      id: 1,
      firstname: 'Srk',
      lastname: 'Konda',
      username: 'srk289'
    }
    this.router.navigate(['events'])
  }

  isAuthenticated() {
    return !!this.currentUser
  }

  canActivate() {
    let isAuth = this.isAuthenticated()
    if(!isAuth)
      this.router.navigate(['user/login'])

    return isAuth
  }

  updateUser(firstname: string, lastname: string) {
    this.currentUser.firstname = firstname
    this.currentUser.lastname = lastname 
  }

}