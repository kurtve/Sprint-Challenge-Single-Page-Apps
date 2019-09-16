import React, { useState } from "react";
import useCallAPI from './useCallAPI';
import EpisodeCard from './EpisodeCard';


export default function EpisodeList() {

  const epiURL = 'https://rickandmortyapi.com/api/episode';

  const [episodes, updateEpisodes] = useState([]);

  useCallAPI(epiURL, updateEpisodes);



  if (episodes.length === 0) {

    return (
      <section className="episode-list grid-view">
        <h3>Loading ...</h3>
      </section>
    );

  } else {

    return (
      <section className="episode-list grid-view">

        {episodes.map(epi => {
          return ( <EpisodeCard key={epi.id} name={epi.name} /> );
        })}

      </section>
    );

  }
}
