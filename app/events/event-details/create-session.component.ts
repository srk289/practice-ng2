import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core"
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { ISession } from "../index"
import { EventsService } from "../shared/index"
import { restrictedWords } from "../../common/index";

@Component({
  selector: 'create-session',
  templateUrl: '/app/events/event-details/create-session.component.html',
  styles: [`
    .form-group>em{float: right; color: red}
    .error input {background: #E3C3C5}
    .error ::-webkit-input-placeholder {color: #999}
    .error ::-moz-placeholder {color: #999}
    .error :-moz-placeholder {color: #999}
    .error :ms-input-placeholder {color: #999}
  `]
})

export class CreateSessionComponent implements OnInit {
  @Output() cancelClick = new EventEmitter()
  @Output() saveSession = new EventEmitter()

  sessionForm: FormGroup 
  name: FormControl
  presenter: FormControl
  duration: FormControl
  level: FormControl
  abstract: FormControl
  constructor(private router: Router, private eventsService: EventsService) {}
  
  ngOnInit() {
    this.name = new FormControl('', Validators.required)
    this.presenter = new FormControl('', Validators.required)
    this.duration = new FormControl('', Validators.required)
    this.level = new FormControl('', Validators.required)
    this.abstract = new FormControl('', [ Validators.required, Validators.maxLength(400), restrictedWords(['foo', 'bar']) ])

    this.sessionForm = new FormGroup({
      name: this.name,
      presenter: this.presenter,
      duration: this.duration,
      level: this.level,
      abstract: this.abstract
    })

  } 
  saveForm(formData) {
    let data:ISession = {
      id: undefined,
      name: formData.name,
      presenter: formData.presenter,
      duration: +formData.duration,
      level: formData.level,
      abstract: formData.abstract,
      voters: []
    }
    this.saveSession.emit(data)
    // this.cancel()
  }

  
  cancel() {
    this.cancelClick.emit()
  }
  

}