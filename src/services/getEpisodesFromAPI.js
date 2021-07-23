const getEpisodesFromAPI = (episodes) => {
  return fetch(`https://rickandmortyapi.com/api/episode/${episodes}`)
    .then((response) => response.json())
    .then((data) => {
      if (data && data.length > 0)
        return data.map((episodes) => {
          return {
            id: episodes.id,
            name: episodes.name,
          };
        });
    });
};

export default getEpisodesFromAPI;
