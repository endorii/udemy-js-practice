"use strict";

const numberOfFilms = +prompt('Скільки фільмів ви вже подивилися ?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const oneOfTheFilms = prompt('Один з останніх фільмів?', ''),
      rate = prompt('На скільки ви оціните його?', ''),
      oneOfTheFilmsTwo = prompt('Один з останніх фільмів?', ''),
      rateTwo = prompt('На скільки ви оціните його?', '');

personalMovieDB.movies[oneOfTheFilms] = rate;
personalMovieDB.movies[oneOfTheFilmsTwo] = rateTwo;

console.log(personalMovieDB);