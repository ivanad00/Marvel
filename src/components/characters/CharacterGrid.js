import React from "react";
import CharacterItem from "./CharacterItem";
import "../../App.css";
import { CircularProgress } from "@material-ui/core";

const CharacterGrid = ({ items, isLoading }) => {
  return isLoading ? (
    <h2 className="loading">
      <CircularProgress />
    </h2>
  ) : (
    <section className="container cards">
      {items.map((item) => (
        <CharacterItem key={item.id} item={item}></CharacterItem>
      ))}
    </section>
  );
};

export default CharacterGrid;
