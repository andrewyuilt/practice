"use strict";
let numberOfFilms;

function start() {
    numberOfFilms = +prompt("Сколько фильмов Вы уже посмотрели?",'');
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмов Вы уже посмотрели?",'');
    }
}

start();

let num = 50;
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat:false
};
 // while (num <= 55) {
//     console.log(num);
//     num++;
// const a = prompt("Введите название одного из последних ваших просмотренных фильмов",""), 
//       b = prompt("Поставьте оценку этому фильму",""),
//       c = prompt("Введите название одного из последних ваших просмотренных фильмов",""),
//       d = prompt("Поставьте оценку этому фильму","");

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

// console.log(personalMovieDB);

////version 1

// for (let i = 0; i < 2; i++) {
//      const a = prompt("Введите название одного из последних ваших просмотренных фильмов",""),
//      b = prompt("Поставьте оценку этому фильму","");

//      switch (a,b) {
//          case null:
//              alert("Вы не можете не отвечать на эти вопросы!");
//              i--;
//              continue;
//      }

//      if (((a.length || b.length) === 0) || ((a.length || b.length) > 50)) {
//      alert("Ответ не должен быть пустым, и его значение не должно превышать 50 символов!");
//      i--;
//      }

//      personalMovieDB.movies[a] = b;
// }

// do {
//     console.log(num);
//     num++;
// }   while (num<55);
// //version 2
// let i = 0;
// while (i < 2) {
//     const a = prompt("Введите название одного из последних ваших просмотренных фильмов",""),
//     b = prompt("Поставьте оценку этому фильму","");
//     i++;

//     switch (a,b) {
//         case null:
//             alert("Вы не можете не отвечать на эти вопросы!");
//             i--;
//             continue;
//     }

//     if (((a.length || b.length) === 0) || ((a.length || b.length) > 50)) {
//     alert("Ответ не должен быть пустым, и его значение не должно превышать 50 символов!");
//     i--;
//     }

// for (let i = 1; i<10; i++) {
//     if (i === 6) {
//         // break;
//         continue;
// //     personalMovieDB.movies[a] = b;
// // }

//version 3
let i = 0;

function rememberMyFilms() {
    do {
        const a = prompt("Введите название одного из последних ваших просмотренных фильмов",""),
        b = prompt("Поставьте оценку этому фильму","");
        i++;
    
        switch (a,b) {
            case null:
                alert("Вы не можете не отвечать на эти вопросы!");
                i--;
                continue;
        }
    
        if (((a.length || b.length) === 0) || ((a.length || b.length) > 50)) {
        alert("Ответ не должен быть пустым, и его значение не должно превышать 50 символов!");
        i--;
        }
        console.log(i);  
        personalMovieDB.movies[a] = b;
    } while (i<2);
}

rememberMyFilms();

function detectPersonalLelev() {
    if(personalMovieDB.count <= 10) {
        alert("Просмотрено довольно мало фильмов");
    }   else if (personalMovieDB.count <30 && personalMovieDB.count >10) {
        alert("Вы классический зритель");
    }   else if (personalMovieDB.count >= 30) {
        alert("Вы киноман.");
    }   else {
        alert("Произошла ошибка");
    }
}

detectPersonalLelev();

function showMyDB(){
    if (personalMovieDB.privat) {
        console.log(personalMovieDB);
    }
}

showMyDB();

function writeYourGenres() {
    const count = +prompt("Введите количество ваших любимых жанров фильмов", '');
    for (let i = 1;i <= count; i++) {
        personalMovieDB.genres[i-1] = prompt(`Ваш любимый жанр под номером ${i}`);
    }
    console.log(personalMovieDB.genres);
}

writeYourGenres();