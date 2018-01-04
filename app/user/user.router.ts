import { Routes } from "@angular/router"
import { ProfileComponent } from "./profile.component"
import { LoginComponent } from "./login.component"
import { UserAuthenticate } from "./shared/user.authenticate";

export const userRouter:Routes = [
  {path: 'profile', component: ProfileComponent, canActivate: [UserAuthenticate]},
  {path: 'login', component: LoginComponent},
  {path: '', redirectTo: 'login', pathMatch: 'full'}
]