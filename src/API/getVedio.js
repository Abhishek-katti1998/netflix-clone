import { getVedio_API } from "../config";
import { vedioDetailState } from "../Store/action/action";
export const getVedioApi = async (movieId, dispatch, obj) => {
  const promise = await fetch(`${getVedio_API(movieId, obj)}`);
  const data = await promise.json();
  if (data?.results.length === 0) alert("no vedio found");
  else {
    dispatch(vedioDetailState(data?.results[0]));
  }
};
