import React from "react";
import styled from "styled-components";
import axios from "axios";
import Movie from "./Movie";
import { moviesApi } from "../api";

const Division = styled.div`
  padding-top: 50px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  background-color: #121212;
  padding-left: 30px;
`;

const Span = styled.span`
  font-size: 20px;
  color: red;
`;

class MainPage extends React.Component {
  state = {
    isLoading: true,
    error: "",
    movies: []
  };

  async componentDidMount() {
    try {
      const {
        data: { results: movies }
      } = await moviesApi.nowPlaying();
      this.setState({ movies });
    } catch {
      this.setState({ error: "Can't find movies." });
    } finally {
      this.setState({ isLoading: false });
    }
  }

  render() {
    const { isLoading, error, movies } = this.state;
    console.log(this.props);
    return (
      <Division>
        {isLoading ? (
          <Span>Loading...</Span>
        ) : (
          movies.map(data => (
            <Movie
              key={data.id}
              title={data.title}
              year={data.release_date}
              summary={data.overview}
              poster={data.poster_path}
            />
          ))
        )}
      </Division>
    );
  }
}

export default MainPage;
