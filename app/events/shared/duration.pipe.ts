import { Pipe, PipeTransform } from "@angular/core"
@Pipe({
    name: 'duration'
})

export class DurationPipe implements PipeTransform {
    transform(val:number): string {
        switch(val) {
            case 1: 
                return 'Half Hour'
            case 2:
                return 'An Hour'
            case 3: 
                return 'Half Day'
            case 4:
                return 'Full Day'
            default: 
                return val.toString()
        }
    }
}