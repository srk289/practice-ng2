import { Component, Input } from "@angular/core"

@Component({
    selector: 'container-well',
    template: `
        <div class="col-md-12">
            <div class="well">
                <h4>{{ title }}</h4>
                <ng-content></ng-content>
            </div>
        </div>
    `
})

export class ContainerWellComponent {
    @Input() title:string
}