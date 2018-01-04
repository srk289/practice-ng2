import { Component, OnInit } from "@angular/core"
import { FormControl, FormGroup, Validators } from "@angular/forms"
import { UserAuthenticate } from "./shared/user.authenticate"
import { Router } from "@angular/router"

@Component({
  template: `
  <h1>Edit profile</h1>
  <hr>
  <div class="col-md-4">
    <form autocomplete="off" [formGroup]="profileForm" (ngSubmit)="saveEdit(profileForm.value)">
      <div class="form-group" >
        <label for="firstname">Firstname:</label>
        <input formControlName="firstname" name="firstname" id="firstname" type="text" required class="form-control" placeholder="Firstname..." />
      </div>
      <div class="form-group" >
        <label for="lastname">Last Name:</label>
        <input formControlName="lastname" name="lastname" id="lastname" type="text" required class="form-control" placeholder="Last Name..." />
      </div>
      <span>
        <button type="submit" class="btn btn-primary">Save</button>
      </span>
      <button type="button" (click)="cancel()" class="btn btn-default">Cancel</button>
    </form>
  </div>
`,
styles: [`
  .form-group>em{float: right; color: red}
`]
})

export class ProfileComponent implements OnInit{
  
  firstname:FormControl
  lastname:FormControl
  profileForm:FormGroup
  
  constructor(private auth: UserAuthenticate, private router: Router) { }

  ngOnInit() {

    this.firstname = new FormControl(this.auth.currentUser.firstname, [Validators.required])
    this.lastname = new FormControl(this.auth.currentUser.lastname, [Validators.required])
    
    this.profileForm = new FormGroup({
      firstname: this.firstname,
      lastname: this.lastname
    })  
  }

  saveEdit(data) {
    this.auth.updateUser(data.firstname, data.lastname)
    this.router.navigate(['events'])
  }

  cancel() {
    this.router.navigate(['events'])
  }
}