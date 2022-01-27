import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { InfoCard } from "./InfoCard";
import { clickHeartAC, dataAllThunk, deleteNewsAC } from "../redux/actions";

export const Main = () => {
  const dispatch = useDispatch();
  const newsData = useSelector((store) => store.news);
  const [isShowLiked, setIsShowLiked] = useState(false)
  const filteredNews = isShowLiked ? newsData.filter((el) => el.like) : newsData
  
  useEffect(() => {
    dispatch(dataAllThunk());
  }, []);

  const clickHandlerHeart = (id) => {
    dispatch(clickHeartAC(id))
  }
  const deleteHandlerNews = (id) => {
    dispatch(deleteNewsAC(id))
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark d-flex justify-content-between">
        <div className="container-fluid ">
          <div>
            <button onMouseDown={() => setIsShowLiked(true)} onMouseUp={() => setIsShowLiked(false)}
              className="navbar-brand text-white bg-dark" >ShowLiked</button>
          </div>
        </div>
      </nav>
      <div className="d-flex row justify-content-between  " >
        {filteredNews.map(({ author, urlToImage, content, id, like }) =>
          <InfoCard author={author}
            urlToImage={urlToImage}
            content={content} key={id}
            like={like}
            doLike={() => clickHandlerHeart(id)}
            deletNews={() => deleteHandlerNews(id)}
          />)}
      </div>
    </div>
  );
}


