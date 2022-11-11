"use strict";

let numberOfFilms;

function start(){
    numberOfFilms = +prompt('Скільки фільмів ви вже подивилися ?', '');

    while (numberOfFilms == ''  || numberOfFilms == null || numberOfFilms == undefined || isNaN(numberOfFilms)){
        numberOfFilms = +prompt('Скільки фільмів ви вже подивилися ?', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};





function rememberMyFilms(){
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
}
// rememberMyFilms();

function detectPersonalLevel(){
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
}
// detectPersonalLevel();

function showMyDB(){
    if (personalMovieDB.privat == false){
        console.log(personalMovieDB);
    }
}
showMyDB();

function writeYourGenres(){
    for (let i = 1; i<=3; i++){
        personalMovieDB.genres[i-1] = prompt(`Ваш улюблений жанр під номером ${i}`, '');
    }
    console.log(personalMovieDB);
}
writeYourGenres();
