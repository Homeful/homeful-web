import { Pipe, PipeTransform } from '@angular/core';
import { Stop } from '../models/route';

@Pipe({
  name: 'stops'
})
export class StopsPipe implements PipeTransform {

  transform(stops: Stop[]): string {
    return stops.map(s => s.camp.name).join(", ");
  }

}
