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