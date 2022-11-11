"use strict";

const numberOfFilms = +prompt('Скільки фільмів ви вже подивилися ?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i = 0; i< 2; i++){
    const oneOfTheFilms = prompt('Один з останніх фільмів?', ''),
          rate = prompt('На скільки ви оціните його?', '');
    
    if (oneOfTheFilms != '' && rate != '' && 
        oneOfTheFilms != null && rate != null && 
        oneOfTheFilms != undefined && rate != undefined && 
        oneOfTheFilms.length < 10 && rate < 10) {
        personalMovieDB.movies[oneOfTheFilms] = rate;
        console.log('done!');
    }
    else {
        console.log('error!');
        i--;
    }   
}

if (personalMovieDB.count < 10) {
    console.log('Переглянуто доволі мало фільмів');
}
else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30 ) {
    console.log('Ви класичний глядач');
}
else if (personalMovieDB.count > 30 ) {
    console.log('Ви кіноман!');
}
else{
    console.log('error!');
}

console.log(personalMovieDB);