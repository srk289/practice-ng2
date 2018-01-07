import { Component } from "@angular/core"

@Component({
    selector: 'container-well',
    template: `
        <div class="col-md-12">
            <div class="well" (click)="toggleVisible()">
                <h4><ng-content select="[well-title]"></ng-content></h4>
                <ng-content *ngIf="visible" select="[well-body]"></ng-content>
            </div>
        </div>
    `
})

export class ContainerWellComponent {
    visible:boolean = true
    toggleVisible() {
        this.visible = !this.visible
    }
}