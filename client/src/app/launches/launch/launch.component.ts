import { Component, OnInit, Input } from '@angular/core';
import {Apollo} from 'apollo-angular';
import gql from 'graphql-tag';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-launch',
  templateUrl: './launch.component.html',
  styleUrls: ['./launch.component.css']
})
export class LaunchComponent implements OnInit {
  launch: any[];
  loading = true;
  error: any;
  flightNumber: number;

  constructor(private apollo: Apollo, route: ActivatedRoute) {
    this.flightNumber = +route.snapshot.params.flight_number;
  }

  ngOnInit(): void {
    this.apollo
      .watchQuery({
        query: gql`
        {
          launch(flight_number: ${this.flightNumber}) {
            flight_number,
            mission_name,
            launch_year,
            launch_success,
            launch_date_local,
            rocket {
              rocket_id,
              rocket_name,
              rocket_type
            }
          }
        }
        `,
      })
      .valueChanges.subscribe(result => {
        this.launch = result.data && result.data['launch'];
        console.log(this.launch);
        this.loading = result.loading;
        this.error = result['error'];
      });
  }

}
