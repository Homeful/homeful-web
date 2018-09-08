import { Pipe, PipeTransform } from '@angular/core';
import { Member } from '../models/member';

@Pipe({
  name: 'members'
})
export class MembersPipe implements PipeTransform {

  transform(members: Member[]): string {
    return members.map(m => m.name).join(", ");
  }

}
