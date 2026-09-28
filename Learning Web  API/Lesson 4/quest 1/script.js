import { Feed } from "./pages/feed.js";
import { NotFound } from "./pages/notFound.js";
import { forLocalStorage } from "./pages/forLocalStorage.js";
import { PoppularFilm, filmId } from "./pages/PopularFilm.js";
import { Film } from "./pages/film.js";
const routes = [
  {
    match: (url) => {
      return url === "/";
    },
    renderRoute: Feed,
  },
  {
    match: () => {
      true;
    },
    renderRoute: NotFound,
  },
  {
    match: (url) => {
      return url === "/Bookmark";
    },
    renderRoute: forLocalStorage,
  },
  {
    match: (url) => {
      return url === "/PopularFilm";
    },
    renderRoute: PoppularFilm,
  },
  {
    match: (url) => {
      return url === `/${filmId}`;
    },
    renderRoute: Film,
  },
];

class Router {
  constructor(routes) {
    this._routes = routes;

    window.history.pushState = (data, title, ulr) => {
      History.prototype.pushState.apply(window.history, [data, title, ulr]);
      this.reroute();
    };

    window.onpopstate = () => {
      this.reroute();
    };
  }

  reroute() {
    const matchedRoute = this._routes.find((route) => {
      const matched = route.match(window.location.pathname);

      return matched;
    });

    matchedRoute.renderRoute();
  }
}

const router = new Router(routes);

router.reroute();
