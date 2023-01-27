import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { map } from 'rxjs/operators';
//import { PastLaunchesListGQL } from 'src/app/services/spacexGraphql.service';
import { launches } from 'src/app/graphql/graphql.queries';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-launch-list',
  templateUrl: './launch-list.component.html',
  styleUrls: ['./launch-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LaunchListComponent {
  formGroup: FormGroup;


  constructor(private apollo:Apollo,private formBuilder: FormBuilder) {
    this.formGroup = formBuilder.group({ filter: [''] });


 

  }
  launches:any[]=[];
  loading=true;
  error:any;
  test:any[]=[];
  ngOnInit(  ) {
    this.apollo.watchQuery({query:launches}).valueChanges.subscribe((result:any)=>
    {    this.test.push("hello","hey","heeey again");


      this.launches=result?.data?.launches;
   
      this.loading=result.loading;
      this.error=result.error;
    })
  }
  public doFilter = (value: any) => {
    this.launches.filter = value.trim().toLocaleLowerCase();
  }


  
  }
  export interface Launch {
    id: string;
  }  


