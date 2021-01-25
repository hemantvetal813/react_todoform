
const movies = [
    {
      _id: "5b21ca3eeb7f6fbccd471815",
      title: "Terminator",
      genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
      numberInStock: 6,
      dailyRentalRate: 2.5,
      publishDate: "2018-01-03T19:04:28.809Z",
      liked: false,
      rating: 3.4,
    },
    {
      _id: "5b21ca3eeb7f6fbccd471816",
      title: "Die Hard",
      genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
      numberInStock: 5,
      dailyRentalRate: 2.5,
      rating: 1.6,
    },
    {
      _id: "5b21ca3eeb7f6fbccd471817",
      title: "Get Out",
      genre: { _id: "5b21ca3eeb7f6fbccd471820", name: "Thriller" },
      numberInStock: 8,
      dailyRentalRate: 3.5
    },
    {
      _id: "5b21ca3eeb7f6fbccd471819",
      title: "Trip to Italy",
      genre: { _id: "5b21ca3eeb7f6fbccd471814", name: "Comedy" },
      numberInStock: 7,
      dailyRentalRate: 3.5
    },
    {
      _id: "5b21ca3eeb7f6fbccd47181a",
      title: "Airplane",
      genre: { _id: "5b21ca3eeb7f6fbccd471814", name: "Comedy" },
      numberInStock: 7,
      dailyRentalRate: 3.5
    },
    {
      _id: "5b21ca3eeb7f6fbccd47181b",
      title: "Wedding Crashers",
      genre: { _id: "5b21ca3eeb7f6fbccd471814", name: "Comedy" },
      numberInStock: 7,
      dailyRentalRate: 3.5
    },
    {
      _id: "5b21ca3eeb7f6fbccd47181e",
      title: "Gone Girl",
      genre: { _id: "5b21ca3eeb7f6fbccd471820", name: "Thriller" },
      numberInStock: 7,
      dailyRentalRate: 4.5
    },
    {
      _id: "5b21ca3eeb7f6fbccd47181f",
      title: "The Sixth Sense",
      genre: { _id: "5b21ca3eeb7f6fbccd471820", name: "Thriller" },
      numberInStock: 4,
      dailyRentalRate: 3.5
    },
    {
      _id: "5b21ca3eeb7f6fbccd471821",
      title: "The Avengers",
      genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
      numberInStock: 7,
      dailyRentalRate: 3.5
    },
    {
      _id: "5b21ca3eeb7f6fbccxd471821",
      title: "The Avatars",
      genre: { _id: "5b21ca3eeb7fx6fbccd471818", name: "Action" },
      numberInStock: 7,
      dailyRentalRate: 3.5
    },
    {
      _id: "5b21ca3eeb7f6zxfbccd471821",
      title: "The panda",
      genre: { _id: "5b21ca3eeb7f6x xxfbccd471818", name: "Action" },
      numberInStock: 7,
      dailyRentalRate: 3.5
    },
    {
      _id: "5b21ca3eeb7f6fzxbccd471821",
      title: "Oblivion",
      genre: { _id: "5b21ca3eeb7f6fcxbccd471818", name: "Action" },
      numberInStock: 7,
      dailyRentalRate: 3.5
    },
    {
      _id: "5b21ca3eeb7f6fbxcxccd471821",
      title: "The Godfather",
      genre: { _id: "5b21ca3eeb7f6fbxccd471818", name: "Action" },
      numberInStock: 7,
      dailyRentalRate: 3.5
    },
    {
      _id: "5b21ca3eeb7f6fbccd47xz1821",
      title: "D Master",
      genre: { _id: "5b21ca3eeb7fzx6fbccd471818", name: "Action" },
      numberInStock: 7,
      dailyRentalRate: 3.5
    }
  ];

  export function getMovies() {
    return movies;
  }

  export function getMovie(id) {
    return movies.find(m => m._id === id);
  }

  // export function saveMovie(movie) {
  //   let movieInDb = movies.find(m => m._id === movie._id) || {};
  //   movieInDb.title = movie.title;
  //   movieInDb.genre.name = movie.genre.name;
  //   movieInDb.genre._id = movie.genre._id;
  //   movieInDb.numberInStock = Number(movie.numberInStock);
  //   movieInDb.dailyRentalRate = Number(movie.dailyRentalRate);

  //   if (!movieInDb._id) {
  //     movieInDb._id = Date.now();
  //     movies.push(movieInDb);
  //   }

  //   return movieInDb;
  // }
  export function saveMovie(movie) {
    let movieInDb = movies.find(m => m._id === movie._id) || {};
    movieInDb = movie;

    movieInDb._id = Date.now();
    movies.push(movieInDb);

    return movieInDb;
  }

  export function deleteMovie(movie) {
    let movieInDb = movies.find(m => m._id === movie._id);
    movies.splice(movies.indexOf(movieInDb), 1);
    return movieInDb;
  }