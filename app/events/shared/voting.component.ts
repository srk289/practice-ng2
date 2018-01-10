import { Component, Input, Output, EventEmitter } from "@angular/core"

@Component({
  selector: 'voting',
  template: `
    <span (click)="voteClickEvent()">
      <i class="glyphicon glyphicon-heart" [style.color]="heartColor"></i>
    </span><br>
    <span>{{count}}</span>
  `,
  styles: [`
    i {cursor: pointer}
  `]
})

export class VotingComponent {
  @Input() count:number
  @Input() set voted(val) {
    this.heartColor = val ? 'red' : 'white'
  }
  @Output() clickVote = new EventEmitter()
  heartColor:string

  voteClickEvent() {
    this.clickVote.emit()
  }

}