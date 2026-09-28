import React from "react";
import { FilmLink } from "./filmLink";
const PopUp = ({ releaseDate, closePopUp }) => (
  <div className="popUpWrapper">
    <div className="popUpContent">
      <h3>{releaseDate}</h3>
      <div className="closePopUp" onClick={closePopUp}>
        x
      </div>
    </div>
  </div>
);
class FetchByClass extends React.Component {
  constructor() {
    super();
    this.state = {
      films: [],
      show: true,
      page: 1,
      theme: true,
      selectedFilm: null,
    };
    this.toggleTheme = this.toggleTheme.bind(this);
    this.toggleShow = this.toggleShow.bind(this);
    this.nextPage = this.nextPage.bind(this);
    this.previousPage = this.previousPage.bind(this);
    this.fetchFavoriteFilms = this.fetchFavoriteFilms.bind(this);
    this.handleFilm = this.handleFilm.bind(this);
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
  toggleTheme() {
    this.setState({ theme: !this.state.theme });
  }
  nextPage() {
    this.setState({ page: this.state.page + 1 });
  }
  previousPage() {
    if (this.state.page !== 1) {
      this.setState({ page: this.state.page - 1 });
    }
  }
  handleFilm(selectedFilm) {
    this.setState({ selectedFilm });
  }
  render() {
    const { films, theme, show, selectedFilm } = this.state;

    theme
      ? (document.body.style.backgroundColor = "white")
      : (document.body.style.backgroundColor = "black");
    theme
      ? (document.body.style.color = "black")
      : (document.body.style.color = "white");

    return (
      <React.Fragment>
        <div className="iconAndLogo">
          <h1>Favorite Movies</h1>
          <img
            className="sunMoonIc"
            onClick={this.toggleTheme}
            src={
              theme
                ? "https://cdn-icons.flaticon.com/png/512/3073/premium/3073665.png?token=exp=1633792625~hmac=8ababe5eb5880e592f5b22d42dc6a524"
                : "https://cdn-icons-png.flaticon.com/512/702/702471.png"
            }
          />
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
              openLink={this.handleFilm}
              data={film}
            />
          </React.Fragment>
        ))}
        {selectedFilm && (
          <PopUp
            releaseDate={selectedFilm.release_date}
            closePopUp={() => this.handleFilm(null)}
          />
        )}
        <div className="buttonHolder">
          <button onClick={this.previousPage}>previous page</button>
          <button onClick={this.nextPage}>next page</button>
        </div>
      </React.Fragment>
    );
  }
}
export default FetchByClass;
