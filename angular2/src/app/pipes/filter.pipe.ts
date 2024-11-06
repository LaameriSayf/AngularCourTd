import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(values:any[], titre:string): unknown {
    if(titre =='' ){return values; }
  
  return values.filter((e)=>e.title.toLowerCase()==titre.toLowerCase())
}
}
