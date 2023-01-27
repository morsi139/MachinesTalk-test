import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { launches } from 'src/app/graphql/graphql.queries';


@Component({
  selector: 'app-launch-list',
  templateUrl: './launch-list.component.html',
  styleUrls: ['./launch-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LaunchListComponent {




  constructor(private apollo: Apollo) {




  }
  searchText = '';

  launches: any[] = [];
  loading = true;
  error: any;


  ngOnInit() {







    this.apollo.watchQuery({ query: launches }).valueChanges.subscribe((result: any) => {


      this.launches = result?.data?.launches;
      this.loading = result.loading;
      this.error = result.error;
    })
  }






}



