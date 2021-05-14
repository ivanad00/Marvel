import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/ui/header";
import Search from "./components/ui/Search";
import CharacterGrid from "./components/characters/CharacterGrid";
import BookmarkContext from "./components/context/BookmarkContext";
import "./App.css";

const App = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("");
  const baseUrl = "https://gateway.marvel.com:443/v1/public/characters";
  //const ts = new Date().getTime();
  const ts = "1620678217043";
  const public_key = "58bb4ebb82f5a4c44065af684d19ff87";
  //const private_key = "b0575c5fcf08b6bfb6c40fd30c28e670b84af7e2";
  //const hash = `1620678217043b0575c5fcf08b6bfb6c40fd30c28e670b84af7e258bb4ebb82f5a4c44065af684d19ff87`; // ts + priv + public
  // hash dd795e3a8b7c9cfc83ea5e1db1cdc242
  // https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=

  useEffect(() => {
    const fetchItems = async () => {
      if (!query) {
        const result = await axios(
          `${baseUrl}?ts${ts}1&apikey=${public_key}&hash=dd795e3a8b7c9cfc83ea5e1db1cdc242`
        );
        console.log(result.data);
        setItems(result.data);
        setIsLoading(false);
      }
      const result = await axios(
        `${baseUrl}?nameStartsWith=${query}&ts=${ts}&apikey=${public_key}&hash=dd795e3a8b7c9cfc83ea5e1db1cdc242`
      );
      console.log(result.data);
      setItems(result.data);
      setIsLoading(false);
    };
    fetchItems();
  }, [query]);

  // fetching bookmarks from local storage
  const [bookmarksList, setBookmarksList] = useState(
    localStorage.getItem("bookmarks")
      ? JSON.parse(localStorage.getItem("bookmarks"))
      : []
  );
  console.log(bookmarksList);
  // updating bookmark list
  useEffect(() => {
    localStorage.setItem("bookmarks", JSON.stringify(bookmarksList));
  }, [bookmarksList]);

  return (
    <div>
      <BookmarkContext.Provider value={{ bookmarksList, setBookmarksList }}>
        <Header />
        <Search getQuery={(q) => setQuery(q)} />
        <CharacterGrid isLoading={isLoading} items={items} />
      </BookmarkContext.Provider>
    </div>
  );
};

export default App;
