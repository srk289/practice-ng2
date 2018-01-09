import { Directive, OnInit, Inject, ElementRef, Input } from "@angular/core"
import { JQ_TOKEN } from "./jquery.service"

@Directive({
  selector: '[modal-trigger]'
})

export class ModalTriggerDirective implements OnInit{
  private el: HTMLElement
  @Input('modal-trigger') modalId:string
  
  constructor(eleRef: ElementRef , @Inject(JQ_TOKEN) private $: any) {
    this.el = eleRef.nativeElement
  }

  ngOnInit() {
    this.el.addEventListener('click', (e => {
      this.$(`#${this.modalId}`).modal({})
    }).bind(this))
  }
  
}