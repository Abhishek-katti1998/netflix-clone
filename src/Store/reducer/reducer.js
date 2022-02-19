const intialGenState = [];
const intialMovieState = [];
const initalSearchResults = [];
const initalLoadState = false;
const initalSeriesGenState = [];
const initalSeriesState = [];
const initalErrorState = "";
const initialBackdropState = false;
const initialModelState = false;
const initialIndexState = -1;
const initialVedioState = "#";
const initialPlayBtnState = false;
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
      return action.payLoad;

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

export const errorReducer = (state = initalErrorState, action) => {
  switch (action.type) {
    case "error":
      return `${action.payLoad}`;

    default:
      return state;
  }
};
export const backDropReducer = (state = initialBackdropState, action) => {
  switch (action.type) {
    case "backdrop":
      return action.payLoad;
    default:
      return state;
  }
};
export const ModelReducer = (state = initialModelState, action) => {
  switch (action.type) {
    case "model":
      return action.payLoad;

    default:
      return state;
  }
};
export const renderReducer = (state = initialIndexState, action) => {
  switch (action.type) {
    case "index":
      return action.payLoad;

    default:
      return state;
  }
};
export const vedioReducer = (state = initialVedioState, action) => {
  switch (action.type) {
    case "video":
      return action.payLoad;
    default:
      return state;
  }
};
export const playBtnReducer = (state = initialPlayBtnState, action) => {
  switch (action.type) {
    case "play":
      return action.payLoad;
    default:
      return state;
  }
};
