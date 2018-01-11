import { Directive } from "@angular/core"
import { Validators, FormGroup, NG_VALIDATORS} from '@angular/forms'

@Directive({
  selector: '[validateLocation]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: LocationValidatorDirective,
      multi: true
    }
  ]
})

export class LocationValidatorDirective implements Validators {
  validate(formGroup: FormGroup):{[key:string]: any} {
    let address = formGroup.controls['address']
    let city = formGroup.controls['city']
    let country = formGroup.controls['country']
    let onlineUrl = (<FormGroup>formGroup.root).controls['onlineUrl']
    if( (address && address.value && city && city.value && country && country.value)|| (onlineUrl && onlineUrl.value) ) 
      return null
    return { validateLocation: false }
  }
}