import { Component } from "@angular/core"

@Component({
    selector: 'container-well',
    template: `
            <div class="well">
                <h4 (click)="toggleVisible()"><ng-content select="[well-title]"></ng-content></h4>
                <ng-content *ngIf="visible" select="[well-body]"></ng-content>
            </div>
    `,
    styles: [`
        h4{cursor: pointer}
    `]
})

export class ContainerWellComponent {
    visible:boolean = true
    toggleVisible() {
        this.visible = !this.visible
    }
}