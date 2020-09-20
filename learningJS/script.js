'use strict';

let numberOfFilms;

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat:false,
    start: () => {
        let countOfFilms = +prompt("Сколько фильмов Вы уже посмотрели?",'');
        while (countOfFilms == '' || countOfFilms == null || isNaN(countOfFilms)) {
            countOfFilms = +prompt("Сколько фильмов Вы уже посмотрели?",'');
        }
        personalMovieDB.count = countOfFilms;
    },
    rememberMyFilms: () => {
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
        } while (i<2);
    },
    detectPersonalLelev: () => {
        if(personalMovieDB.count <= 10) {
            alert("Просмотрено довольно мало фильмов");
        }   else if (personalMovieDB.count <30 && personalMovieDB.count >10) {
            alert("Вы классический зритель");
        }   else if (personalMovieDB.count >= 30) {
            alert("Вы киноман.");
        }   else {
            alert("Произошла ошибка");
        }
    },
    toggleVisibleMyDB: () => {
        switch(personalMovieDB.privat){
            case true:
                personalMovieDB.privat = false;
                break;
            case false:
                personalMovieDB.privat = true;
                break;
        }
    },
    showMyDB: () => {
        if (personalMovieDB.privat === false) {
            console.log(personalMovieDB);
        }
    },
    writeYourGenres : () => {
        let countOfGenres = +prompt('Введите количество ваших любимых жанров');
        while (countOfGenres == '' || countOfGenres == null || isNaN(countOfGenres)) {
            countOfGenres = +prompt('Введите количество ваших любимых жанров','');
        }
        for (let i = 1;i <= countOfGenres; i++) {
            personalMovieDB.genres[i-1] = prompt(`Ваш любимый жанр под номером ${i}`);
            while (personalMovieDB.genres[i-1] == '' || personalMovieDB.genres[i-1] == null) {
                personalMovieDB.genres[i-1] = prompt(`Ваш любимый жанр под номером ${i}`);
            }
        }
        const arr = personalMovieDB.genres;
        const forEachFunction = function(item, index) {
            console.log(`Любимый жанр ${index + 1} - это ${item}`)
        };
        arr.forEach(forEachFunction);
    }
};

personalMovieDB.start();
personalMovieDB.rememberMyFilms();
personalMovieDB.detectPersonalLelev();
personalMovieDB.toggleVisibleMyDB();
personalMovieDB.showMyDB();
personalMovieDB.writeYourGenres();