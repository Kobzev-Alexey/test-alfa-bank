import actionTypes from "./types";
import { nanoid } from "nanoid";

export const newsDataAC = (news) => ({type: actionTypes.SHOW_NEWS, payload: {news} })
export const clickHeartAC = (id) => ({type: actionTypes.CLICK_HEART, payload: {id}})
export const deleteNewsAC = (id) => ({type: actionTypes.DELET_NEWS, payload: {id}})

export const dataAllThunk = () => async (dispatch) => {
  const res = await fetch(
    "https://newsapi.org/v2/everything?q=apple&from=2022-01-25&to=2022-01-25&sortBy=popularity&apiKey=8a413d3362304ebaaa6903c7c0411051"
  );
  const data = await res.json();
  const news = data.articles;
  const newsWithId = news.map((el) => {
   return {...el, id: nanoid(), like: false}
  })
  dispatch(newsDataAC(newsWithId));
};
