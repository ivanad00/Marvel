import React, { useContext } from "react";
import BookmarkContext from "../context/BookmarkContext";
import { BsBookmark, BsFillBookmarkFill } from "react-icons/bs";
import "../../styles/bookmark.css";

const CharacterItem = ({ item }) => {
  const url = `${item.thumbnail.path}.jpg`;
  const { bookmarksList, setBookmarksList } = useContext(BookmarkContext);
  return (
    <div className="card">
      <div className="card-inner">
        <div className="card-front">
          <img src={url} alt="" />
        </div>
        <div className="card-back">
          <h1>{item.name}</h1>
          <div className="bookmark">
            {!bookmarksList.some((el) => el.id === item.id) ? (
              <button className="bookmark-btn">
                <BsBookmark
                  className="bookmark-icon"
                  onClick={() => {
                    if (!bookmarksList.some((el) => el.id === item.id)) {
                      const newBookmarksList = [...bookmarksList, item];
                      setBookmarksList(newBookmarksList);
                    }
                  }}
                />
              </button>
            ) : (
              <button className="bookmark-btn">
                <BsFillBookmarkFill
                  className="bookmark-icon"
                  onClick={() => {
                    if (bookmarksList.some((el) => el.id === item.id)) {
                      const newBookmarksList = bookmarksList.filter(
                        (el) => el.id !== item.id
                      );
                      setBookmarksList(newBookmarksList);
                    }
                  }}
                />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterItem;
