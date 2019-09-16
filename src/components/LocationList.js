import React, { useState } from "react";
import useCallAPI from './useCallAPI';
import LocationCard from './LocationCard';


export default function LocationList() {

  const locURL = 'https://rickandmortyapi.com/api/location';

  const [locations, updateLocations] = useState([]);

  useCallAPI(locURL, updateLocations);



  if (locations.length === 0) {

    return (
      <section className="location-list grid-view">
        <h3>Loading ...</h3>
      </section>
    );

  } else {

    return (
      <section className="location-list grid-view">

        {locations.map(loc => {
          return ( <LocationCard key={loc.id} loc={loc} /> );
        })}

      </section>
    );

  }
}
