import { NgModule } from "@angular/core"
import { BrowserModule } from "@angular/platform-browser"
import { RouterModule } from "@angular/router"
import { FormsModule, ReactiveFormsModule } from "@angular/forms"
import { appRouter } from "./router"

import { EventsApp } from "./events-app"
import { NavBarComponent } from "./nav/nav-bar.component"
import { Http404 } from "./errors/404.component"

import {  EventListComponent,
          EventThumbComponent,
          EventsService, 
          CreateEventComponent,
          EventDetailsComponent,
          EventDetailsActivator,
          EventListResolver,
          CreateSessionComponent, 
          SessionListComponent,
          DurationPipe,  
          VotingComponent,
          VotingService,
          LocationValidatorDirective} from "./events/index"

import {  JQ_TOKEN, 
          TOASTR_TOKEN, 
          IToaster, 
          ContainerWellComponent,
          ModalTriggerDirective,   
          SimpleModalComponent} from "./common/index"
          
import { UserAuthenticate } from "./user/shared/user.authenticate"

declare let toastr:IToaster
declare let jQuery:Object

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRouter),
  ],
  declarations: [
    EventsApp, 
    NavBarComponent,
    EventListComponent, 
    EventThumbComponent,
    CreateEventComponent,
    EventDetailsComponent,
    CreateSessionComponent,
    SessionListComponent,
    ContainerWellComponent,
    SimpleModalComponent,
    ModalTriggerDirective,
    LocationValidatorDirective,
    DurationPipe,
    VotingComponent,
    Http404
  ],
  bootstrap: [EventsApp],
  providers: [
    EventsService,
    EventDetailsActivator,
    EventListResolver,
    {
      provide: TOASTR_TOKEN,
      useValue: toastr
    },
    {
      provide: JQ_TOKEN,
      useValue: jQuery
    },
    {
      provide: 'createEventDeactivate',
      useValue: createEventDeactivate
    },
    UserAuthenticate,
    VotingService
  ]
})

export class AppModule{

}

function createEventDeactivate(createEventComp: CreateEventComponent) {
  if(createEventComp.isDirty)
    return window.confirm('Do you want to exit without saving?')

  return true
}