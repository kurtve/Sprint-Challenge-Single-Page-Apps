import React from "react";

export default function LocationCard({ loc }) {

  return (
  	<div className='card location'>
	  	<h3>{loc.name}</h3>
	  	<div>Type: {loc.type}</div>
	  	<div>Dimension: {loc.dimension}</div>
	  	<div>Residents: {loc.residents.length}</div>
	</div>
  );

}
