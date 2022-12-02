"use strict";

let numberOfFilms;
const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function(){
        personalMovieDB.count = +prompt('Скільки фільмів ви вже подивилися ?', '').trim();

        while (personalMovieDB.count == ''  || personalMovieDB.count == null || personalMovieDB.count == undefined || isNaN(personalMovieDB.count)){
        personalMovieDB.count = +prompt('Скільки фільмів ви вже подивилися ?', '').trim();
    }
    },
    rememberMyFilms: function(){
        for (let i = 0; i< 2; i++){
        const oneOfTheFilms = prompt('Один з останніх фільмів?', '').trim(),
              rate = prompt('На скільки ви оціните його?', '').trim();
        
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
    },
    detectPersonalLevel: function(){
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
    },
    showMyDB: function(){
        if (personalMovieDB.privat == false){
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function(){
        if (personalMovieDB.privat){
            personalMovieDB.privat = false;
        } 
        else{
            personalMovieDB.privat = true;
        }
    },
    writeYourGenres: function(){
        for (let i = 1; i<=3; i++){
            let genre = prompt(`Ваш улюблений жанр під номером ${i}`, '').trim();

            if (genre === '' || genre == null){
                console.log('Ви ввели невірні дані, або не ввели їх зовсім');
                i--;
            }
            else{
                personalMovieDB.genres[i-1] = genre;
            }
        }
        
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Улюблений жанр ${i+1} - це ${item}.`);
        });
    }
};

