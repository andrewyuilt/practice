"use strict";
const numberOfFilms = +prompt("Сколько фильмов Вы уже посмотрели?","Введите количество");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat:false
};

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

//     personalMovieDB.movies[a] = b;
// }

//version 3
let i = 0;
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

    personalMovieDB.movies[a] = b;
}   while (i<2)

if(personalMovieDB.count <= 10) {
    alert("Просмотрено довольно мало фильмов");
}   else if (personalMovieDB.count <30 && personalMovieDB.count >10) {
    alert("Вы классический зритель");
}   else if (personalMovieDB.count >= 30) {
    alert("Вы киноман.");
}   else {
    alert("Произошла ошибка");
}

