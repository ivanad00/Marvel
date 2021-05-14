import React, { useContext } from "react";
import BookmarkContext from "../context/BookmarkContext";
import { BsBookmark, BsFillBookmarkFill } from "react-icons/bs";
import "../../styles/bookmark.css";

const CharacterItem = ({ item, isLoading }) => {
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
          {/* <div className="bookmark">
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
            )} */}
        </div>
      </div>
    </div>
  );
};

export default CharacterItem;

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import Header from "../ui/header";
// import Search from "../ui/Search";
// import CharacterGrid from "./CharacterGrid";
// //import Nav from "../ui/Nav";
// //import "./App.css";

// const App = () => {
//   const [items, setItems] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [query, setQuery] = useState("");
//   const baseUrl = "https://gateway.marvel.com/v1/public/characters";
//   const public_key = "58bb4ebb82f5a4c44065af684d19ff87";
//   const private_key = "b0575c5fcf08b6bfb6c40fd30c28e670b84af7e2";
//   const ts = new Date().getTime();
//   // const ts = "1620678217043";
//   const hash = `${ts}b0575c5fcf08b6bfb6c40fd30c28e670b84af7e258bb4ebb82f5a4c44065af684d19ff87`; // ts + priv + public

//   useEffect(() => {
//     const fetchItems = async () => {
//       if (!query) {
//         const result = await axios(
//           `${baseUrl}?ts=${ts}&apikey=${public_key}&hash=${hash}`
//         );
//         console.log(result.data);
//         setItems(result.data);
//         setIsLoading(false);
//       }
//       const result = await axios(
//         `${baseUrl}?nameStartsWith=${query}&ts=${ts}&apikey=${public_key}&hash=${hash}`
//       );
//       console.log(result.data);
//       setItems(result.data);
//       setIsLoading(false);
//     };

//     fetchItems();
//   }, [query]);

//   return (
//     <div>
//       <Header />
//       <Search getQuery={(q) => setQuery(q)} />
//       <CharacterGrid isLoading={isLoading} items={items} />
//       {/* <Nav items={items} /> */}
//     </div>
//   );
// };

// export default App;

// // import React from 'react'

// // const CharacterItem = ({ item }) => {
// //     const url = `${item.thumbnail.path}.jpg`
// //   return (
// //     <div className='card'>
// //       <div className='card-inner'>
// //         <div className='card-front'>
// //           <img src={url} alt='' />
// //         </div>
// //         <div className='card-back'>
// //           <h1>{item.name}</h1>
// //           <ul  id="inner">
// //             <li>
// //               <strong>Description:</strong> {item.description}
// //             </li>
// //            </ul>
// //         </div>
// //       </div>
// //     </div>
// //   )
// // }

// // export default CharacterItem
