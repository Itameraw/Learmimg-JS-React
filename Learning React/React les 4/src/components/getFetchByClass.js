import React from "react";
import { FilmLink } from "./filmLink";
class FetchByClass extends React.Component {
  constructor() {
    super();
    this.state = {
      films: [],
      show: true,
      page: 1,
    };
    this.toggleShow = this.toggleShow.bind(this);
    this.nextPage = this.nextPage.bind(this);
    this.previousPage = this.previousPage.bind(this);
    this.fetchFavoriteFilms = this.fetchFavoriteFilms.bind(this);
  }
  fetchFavoriteFilms() {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=aefabdb15eb22896ff7b29b23c9559d8&language=en-US&page=${this.state.page}`
    )
      .then((response) => response.json())
      .then((filmList) => {
        this.setState({ films: filmList.results });
      });
  }
  componentDidMount() {
    this.fetchFavoriteFilms();
  }
  componentDidUpdate(prevProps) {
    if (this.state.page !== prevProps.page) {
      this.fetchFavoriteFilms();
    }
  }
  toggleShow() {
    this.setState({ show: !this.state.show });
  }
  nextPage() {
    this.setState({ page: this.state.page + 1 });
  }
  previousPage() {
    if (this.state.page !== 1) {
      this.setState({ page: this.state.page - 1 });
    }
  }
  render() {
    const { films } = this.state;
    const { show } = this.state;

    return (
      <React.Fragment>
        <div>
          <h1>Favorite Movies</h1>
        </div>
        {films.map((film) => (
          <React.Fragment>
            <button onClick={this.toggleShow}>
              {show ? "showRate" : "hideRate"}
            </button>

            {show || <h2>{film.popularity}</h2>}
            <FilmLink
              key={film.id}
              title={film.title}
              poster={`https://www.themoviedb.org/t/p/w220_and_h330_face${film.backdrop_path}`}
              overview={film.overview}
            />
          </React.Fragment>
        ))}
        <div className="buttonHolder">
          <button onClick={this.previousPage}>previous page</button>
          <button onClick={this.nextPage}>next page</button>
        </div>
      </React.Fragment>
    );
  }
}
export default FetchByClass;
