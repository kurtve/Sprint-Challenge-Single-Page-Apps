import React, { useState } from "react";
import useCallAPI from './useCallAPI';
import CharacterCard from './CharacterCard';


export default function CharacterList() {

  const charURL = 'https://rickandmortyapi.com/api/character';

  const [characters, updateCharacters] = useState([]);

  useCallAPI(charURL, updateCharacters);



  if (characters.length === 0) {

    return (
      <section className="character-list grid-view">
        <h3>Loading ...</h3>
      </section>
    );

  } else {

    return (
      <section className="character-list grid-view">

        {characters.map(char => {
          return ( <CharacterCard key={char.id} name={char.name} /> );
        })}

      </section>
    );

  }
}
