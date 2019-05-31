import { API_KEY, URL } from "../constants/Contants";

export const FETCH_ARTICLES = searchValue => {
  return fetch(`${URL}?api-key=${API_KEY}&q=${searchValue}`).then(res =>
    res.json()
  );
};
