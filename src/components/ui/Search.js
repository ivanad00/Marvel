import React, { useState } from "react";

const Search = ({ getQuery, query }) => {
  const onChange = (q) => {
    getQuery(q);
  };

  return (
    <section className="container search">
      <form>
        <label className="center">
          <input
            type="text"
            className="form-control"
            placeholder="Search your Marvel"
            value={query}
            onChange={(e) => onChange(e.target.value)}
            autoFocus
          />
        </label>
      </form>
    </section>
  );
};

export default Search;
