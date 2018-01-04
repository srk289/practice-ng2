import { Component } from "@angular/core"
import { Router } from "@angular/router"
import { UserAuthenticate } from "./shared/user.authenticate";

@Component({
  template: `
  <h1>Login</h1>
  <hr>
  <div class="col-md-4">
    <form autocomplete="off" #loginForm="ngForm" (ngSubmit)="login(loginForm.value)" novalidate>
      <div class="form-group" >
        <label for="userName">User Name:</label>
        <em [hidden]="!(loginForm.controls.userName?.invalid && (loginForm.controls.userName?.touched || submitHover))">
            <sup>*</sup>Required
        </em>
        <input (ngModel)="userName" name="userName" id="userName" type="text" required class="form-control" placeholder="User Name..." />
      </div>
      <div class="form-group" >
        <label for="password">Password:</label>
        <em [hidden]="!(loginForm.controls.password?.invalid && (loginForm.controls.password?.touched || submitHover))">
            <sup>*</sup>Required
        </em>
        <input (ngModel)="password" name="password" id="password" type="password" required class="form-control" placeholder="Password..." />
      </div>
      <span (mouseenter)="submitHover = true" 
            (mouseleave)="submitHover = false">
        <button type="submit" [disabled]="loginForm.invalid" class="btn btn-primary">Login</button>
      </span>
      <button type="button" (click)="cancel()" class="btn btn-default">Cancel</button>
    </form>
  </div>
`,
styles: [`
  .form-group>em{float: right; color: red}
`]
})

export class LoginComponent {
  constructor(private router: Router, private auth: UserAuthenticate) {}
  cancel() {
    this.router.navigate(['events'])
  }

  login(data) {
    this.auth.login(data.username, data.password)
  }
}