## example queries
//all launches
-  {
   launches {
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

//single launch
- {
	launch(flight_number: 2) {
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

[GitHub Repo](https://github.com/bradtraversy/spacex_launch_stats)



proxy:
{

    "context": ["/launches", "/launch/:flight_number"],
    "target": "http://localhost:5000",
    "changeOrigin": false,
    "logLevel": "debug"

}


left off on this video.. trying to get proxy to work: https://www.youtube.com/watch?v=ok6bu-3XRA8