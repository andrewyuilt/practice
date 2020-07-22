"use strict";
const numberOfFilms = +prompt("Сколько фильмов Вы уже посмотрели?","Введите количество");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat:false
};

