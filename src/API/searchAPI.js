import { searchMovies_API, searchTvSeries_API } from "../config";
export const searchMovieApiCall = async (query, setMovieData) => {
  let urls = [`${searchMovies_API}${query}`, `${searchTvSeries_API}${query}`];
  const requests = urls?.map((e) => {
    return fetch(`${e}`);
  });

  let temp = [];
  for (let i of requests) {
    let promise = await i;
    let data = await promise.json();

    if (data) {
      temp.push(data.results);
    }
  }

  let data = [...temp[0], ...temp[1]];
  setMovieData(data);
};
