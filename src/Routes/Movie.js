import React from "react";
import styled from "styled-components";
import "../movie.css";

function Movie({ title, year, summary, poster }) {
  return (
    <div className="container">
      <div className="info">
        <div className="year">{year}</div>
        <img
          className="poster"
          src={`https://image.tmdb.org/t/p/w500/${poster}`}
          alt="title"
        />
        <div className="title">
          {title.length < 40 ? title : title.slice(0, 40) + "..."}
        </div>
      </div>
      <div className="summary">{summary}</div>
    </div>
  );
}

export default Movie;
