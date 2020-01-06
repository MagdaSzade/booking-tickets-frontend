const mongoose = require('mongoose');
var Movie = require('../models/movie-model');
const db = require('../db');

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
var movies = [{
        name: 'Ad Astra',
        description: 'Astronauta Roy McBride wyrusza na wyprawę poza granice Układu Słonecznego, aby odnaleźć swego zaginionego ojca i odkryć tajemnicę, która zagraża przetrwaniu naszej planety. W czasie swej podróży odkryje sekrety, które postawią pod znakiem zapytania sens ludzkiej egzystencji i nasze miejsce we wszechświecie.',
        releaseDate: '2019',
        orign: 'en',
        time: '2 godziny 2 min',
        imgSrc: 'https://image.tmdb.org/t/p/w500/iIXuzH42MVDYRQfzwWFvpQdb7TB.jpg',
        seanses: [{
            day: '02.01.2020',
            hours: ['17:00', '19:00', '21:00']
        }]
    },
    {
        name: 'Ad Astra',
        description: 'Astronauta Roy McBride wyrusza na wyprawę poza granice Układu Słonecznego, aby odnaleźć swego zaginionego ojca i odkryć tajemnicę, która zagraża przetrwaniu naszej planety. W czasie swej podróży odkryje sekrety, które postawią pod znakiem zapytania sens ludzkiej egzystencji i nasze miejsce we wszechświecie.',
        releaseDate: '2019',
        orign: 'en',
        time: '2 godziny 2 min',
        imgSrc: 'https://image.tmdb.org/t/p/w500/iIXuzH42MVDYRQfzwWFvpQdb7TB.jpg',
        seanses: [{
            day: '02.01.2020',
            hours: ['17:00', '19:00', '21:00']
        }]
    },
    {
        name: 'Ad Astra',
        description: 'Astronauta Roy McBride wyrusza na wyprawę poza granice Układu Słonecznego, aby odnaleźć swego zaginionego ojca i odkryć tajemnicę, która zagraża przetrwaniu naszej planety. W czasie swej podróży odkryje sekrety, które postawią pod znakiem zapytania sens ludzkiej egzystencji i nasze miejsce we wszechświecie.',
        releaseDate: '2019',
        orign: 'en',
        time: '2 godziny 2 min',
        imgSrc: 'https://image.tmdb.org/t/p/w500/iIXuzH42MVDYRQfzwWFvpQdb7TB.jpg',
        seanses: [{
            day: '02.01.2020',
            hours: ['17:00', '19:00', '21:00']
        }]
    },
    {   
        name: "Joker",
        description: "Film o początkach kariery księcia zbrodni z Gotham City okazał się dokładnie tym, co obiecywali jego twórcy. To jednocześnie studium obłędu oraz niepokojący portret miasta-molochu pogrążającego się w chaosie. I kto się śmieje ostatni?",
        releaseDate: "2019",
        genre: "Dramat/Kryminał",
        origin: "Kanada/USA",
        time: "2 godz. 2 min",
        imgSrc: "https://ssl-gfx.filmweb.pl/ph/01/67/810167/833479_1.1.jpg",
        seanses: [
            {
                day: '02.01.2020',
                hours: ['17:00', '19:00', '21:00']
            },
            {
                day: '05.01.2020',
                hours: ['17:00', '19:00', '21:00']
            },
            {
                day: '06.01.2020',
                hours: ['17:00', '19:00', '21:00']
            }
        ]
    },
    {
        name: "Batman",
        description: "I'm Batman!",
        releaseDate: "2019",
        genre: "Dramat/Kryminał",
        origin: "Kanada/USA",
        time: "2 godz. 2 min",
        imgSrc: "https://ssl-gfx.filmweb.pl/ph/01/67/810167/833479_1.1.jpg",
        seanses: [
            {
                day: '03.01.2020',
                hours: ['17:00', '19:00', '21:00']
            },
            {
                day: '04.01.2020',
                hours: ['17:00', '19:00', '21:00']
            }
        ]
    },    
    {
        name: "Superman",
        description: "Serio?",
        releaseDate: "2019",
        genre: "Dramat/Kryminał",
        origin: "Kanada/USA",
        time: "2 godz. 2 min",
        imgSrc: "https://ssl-gfx.filmweb.pl/ph/01/67/810167/833479_1.1.jpg",
        seanses: [
            {
                day: '02.01.2020',
                hours: ['17:00', '19:00', '21:00']
            },
            {
                day: '03.01.2020',
                hours: ['17:00', '19:00', '21:00']
            }
        ]
    },
];


function saveTestData() {
    movies.forEach(function (data) {
    console.log('added');
    let movie = new Movie(data)
    movie.save();
    })
}

module.exports = saveTestData;
