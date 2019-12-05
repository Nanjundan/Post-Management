import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'companyName'
})
export class CompanyNamePipe implements PipeTransform {

  transform(company: any): any {
    if(company)
      return company.name;
    return "";
  }

}
