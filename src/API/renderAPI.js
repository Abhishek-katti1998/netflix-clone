import {
  movieGenre_API,
  seriesGenre_API,
  movieData_API,
  seriesData_API,
} from "../config";
export const renderResultsAPI = async (props, dispatchGenres, dispatchData) => {
  console.log("props", props);
  try {
    let requests = [];
    const genrePromise = await fetch(
      props.type === "movie" ? `${movieGenre_API}` : `${seriesGenre_API}`
    );
    if (!genrePromise.ok) throw new Error("Failed to fetch Genres ;(");
    console.log("GenrePromise", genrePromise);
    const genreData = await genrePromise.json();
    if (genreData) {
      dispatchGenres(genreData);

      const api =
        props.type === "movie" ? `${movieData_API}` : `${seriesData_API}`;
      if (genreData.genres.length > 0) {
        requests = genreData.genres.map((p) => fetch(`${api}${p?.id}`));
      }
      const ans = await Promise.all(requests);
      console.log("Answer", ans);

      for (let i = 0; i < ans.length; i++) {
        if (!ans[i].ok)
          throw new Error(
            `Failed to fetch ${props.type} ;( please try with better connectivity`
          );
        let data = await ans[i].json();

        let res = { genreName: genreData?.genres[i]?.name, data: data.results };
        dispatchData(res);
      }
    }
  } catch (err) {
    console.log(`${err.message}`);
  }
};
