"use strict";
const numberOfFilms = +prompt("Сколько фильмов Вы уже посмотрели?","Введите количество");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat:false
};

const a = prompt("Введите название одного из последних ваших просмотренных фильмов",""), 
      b = prompt("Поставьте оценку этому фильму",""),
      c = prompt("Введите название одного из последних ваших просмотренных фильмов",""),
      d = prompt("Поставьте оценку этому фильму","");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);

