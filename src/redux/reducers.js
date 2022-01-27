import actionTypes from "./types";

const initialState = {
  news: [],
};

export const reducers = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SHOW_NEWS:
      return { ...state, news: action.payload.news };

    case actionTypes.CLICK_HEART:
      const likedNews = state.news.map((el) =>
        el.id === action.payload.id ? { ...el, like: !el.like } : el
      );
      return { ...state, news: likedNews };

    case actionTypes.DELET_NEWS:
      const news = state.news.filter((el) => el.id !== action.payload.id);
      return { ...state, news: news };

    default:
      return state;
  }
};
