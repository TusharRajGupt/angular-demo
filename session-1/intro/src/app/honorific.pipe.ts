import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'honorific'
})



export class HonorificPipe implements PipeTransform {

  transform(name: string, gender = "Male", knight?: string): string {
    let title = gender == "Male" ? 'Mr.' : 'Ms.'
    if(knight){
      title = gender == "Male" ? 'Sir' : 'Dame'
    }
    return title + ' ' + name;
  }

}
