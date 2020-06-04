import { Component, OnInit } from '@angular/core';
import {Apollo} from 'apollo-angular';
import gql from 'graphql-tag';

@Component({
  selector: 'app-launches',
  templateUrl: './launches.component.html',
  styleUrls: ['./launches.component.css']
})
export class LaunchesComponent implements OnInit {
  launches: any[];
  loading = true;
  error: any;

  constructor(private apollo: Apollo) { }

  ngOnInit(): void {
    this.apollo
      .watchQuery({
        query: gql`
        {
          launches {
            flight_number,
            mission_name,
            launch_year,
          }
        }
        `,
      })
      .valueChanges.subscribe(result => {
        this.launches = result.data && result.data['launches'];
        console.log(result.data);
        this.loading = result.loading;
        this.error = result['error'];
      });
  }

}
