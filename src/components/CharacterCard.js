import React from "react";

export default function CharacterCard( { char }) {
	console.log(char);

  return (
  	<div className='card'>
  		<img src={char.image} alt={char.name} />
	  	<div>{char.name} - {char.status}</div>
	  	<div>Species: {char.species}</div>
	  	<div>Gender: {char.gender}</div>
	  	<div>Origin: {char.origin.name}</div>
	  	<div>Location: {char.location.name}</div>
	</div>
  );

}
