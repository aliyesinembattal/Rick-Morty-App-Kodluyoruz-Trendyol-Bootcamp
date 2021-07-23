const getLocationFromAPI = () => {
  return fetch('https://rickandmortyapi.com/api/location')
    .then((response) => response.json())
    .then((data) => {
      return data.results.map((location) => {
        return {
          id: location.id,
          name: location.name,
        };
      });
    });
};

export default getLocationFromAPI;
