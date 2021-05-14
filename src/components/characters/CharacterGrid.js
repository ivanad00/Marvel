import React from "react";
import CharacterItem from "./CharacterItem";
import "../../App.css";

const CharacterGrid = ({ items, isLoading }) => {
  return isLoading ? (
    <h2 className="loading">Loading</h2>
  ) : (
    <section className="container cards">
      {items.data.results.map((item) => (
        <CharacterItem key={item.id} item={item}></CharacterItem>
      ))}
    </section>
  );
};

export default CharacterGrid;
