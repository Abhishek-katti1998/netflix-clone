const intialGenState = [];
const intialMovieState = [];
export const genReducer = (state = intialGenState, action) => {
  console.log(intialGenState);
  switch (action.type) {
    case "genre":
      return action.payLoad;

    default:
      return state;
  }
};

// export const ActionReducer = () =
export const movieReducer = (state = intialMovieState, action) => {
  switch (action.type) {
    case "movie":
      return [
        ...state,
        ...action.payLoad,
      ]

    default:
      return state;
  }
};
