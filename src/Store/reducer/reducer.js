const intialGenState = [];
const intialMovieState = [];
const initalSearchResults = [];
const initalLoadState = false;
const initalSeriesGenState = [];
const initalSeriesState = [];
export const genReducer = (state = intialGenState, action) => {
  switch (action.type) {
    case "genre":
      return action.payLoad;

    default:
      return state;
  }
};

export const movieReducer = (state = intialMovieState, action) => {
  switch (action.type) {
    case "movie":
      return [...state, ...action.payLoad];

    default:
      return state;
  }
};

export const searchMovieReducer = (state = initalSearchResults, action) => {
  switch (action.type) {
    case "searchMovie":
      return [...action.payLoad];

    default:
      return state;
  }
};

export const loadSearchResultsReducer = (state = initalLoadState, action) => {
  switch (action.type) {
    case "load":
      return action.payLoad;
    default:
      return state;
  }
};
export const SeriesgenReducer = (state = initalSeriesGenState, action) => {
  switch (action.type) {
    case "seriesGenre":
      return action.payLoad;

    default:
      return state;
  }
};

export const seriesReducer = (state = initalSeriesState, action) => {
  switch (action.type) {
    case "series":
      return [...state, ...action.payLoad];

    default:
      return state;
  }
};
