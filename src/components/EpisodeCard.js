import React from "react";

export default function EpisodeCard({ epi }) {

  return (
  	<div className='card episode'>
	  	<h3>{epi.name}</h3>
	  	<div>Air date: {epi.air_date}</div>
	  	<div>Episode: {epi.episode}</div>
	  	<div>Characters: {epi.characters.length}</div>
	</div>
  );

}
