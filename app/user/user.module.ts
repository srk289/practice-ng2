import { NgModule } from "@angular/core"
import { CommonModule } from "@angular/common"
import { RouterModule } from "@angular/router"
import { userRouter } from "./user.router"
import { ProfileComponent } from "./profile.component"
import { LoginComponent } from "./login.component"
import { FormsModule, ReactiveFormsModule } from "@angular/forms"

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(userRouter)
  ],
  declarations: [
    ProfileComponent,
    LoginComponent
  ]
})

export class UserModule {}