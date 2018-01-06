import { Component, Input } from "@angular/core"
import { ISession } from "../index";

@Component({
    selector: 'session-list',
    template: `
        <div class="row" *ngFor="let session of sessions">
            <div class="col-md-12">
                <div class="well">
                    <h4>{{session.name}}</h4>
                    <h6>{{session.presenter}}</h6>
                    <span>Duration: {{session.duration}}</span><br />
                    <span>Level: {{session.level}}</span>
                    <p>{{session.abstract}}</p>
                </div>
            </div>
        </div>
    `,
    styles: [`

    `]
})

export class SessionListComponent{
    @Input() sessions:ISession[]
}