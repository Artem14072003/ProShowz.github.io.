"use strict";

const movies = [
    {
        id: 1,
        name: "Зелёная книга",
        year: 2016,
        age: 16,
        genre: "комедия",
        rate: 4.4,
    },
    {
        id: 2,
        name: "Миньоны Грювитация",
        year: 2022,
        age: 6,
        genre: "мультфильм",
        rate: 3.6,
    },
    {
        id: 3,
        name: "Король Лев",
        year: 1994,
        age: 0,
        genre: "мультфильм",
        rate: 4.8,
    },
    {
        id: 4,
        name: "Тайна коко",
        year: 2017,
        age: 12,
        genre: "мультфильм",
        rate: 4.7,
    },
    {
        id: 5,
        name: "Сестрёнка",
        year: 2019,
        age: 6,
        genre: "военный",
        rate: 4.2,
    },
    {
        id: 6,
        name: "Аватар II",
        year: 2022,
        age: 12,
        genre: "фантастика",
        rate: 0,
    },
    {
        id: 7,
        name: "Чужой",
        year: 1979,
        age: 16,
        genre: "фантастика",
        rate: 4.8,
    },
    {
        id: 8,
        name: "Сердце пармы",
        year: 2022,
        age: 16,
        genre: "фэнтези",
        rate: 3.5,
    },
    {
        id: 9,
        name: "Пётр I",
        year: 2002,
        age: 12,
        genre: "история",
        rate: 3.6,
    },
    {
        id: 10,
        name: "ОНО II",
        year: 2019,
        age: 18,
        genre: "ужасы",
        rate: 3.4,
    },
    {
        id: 11,
        name: "Прочь",
        year: 2017,
        age: 18,
        genre: "ужасы",
        rate: 4,
    },
    {
        id: 12,
        name: "Звонок",
        year: 2002,
        age: 16,
        genre: "ужасы",
        rate: 3.8,
    },
    {
        id: 13,
        name: "Небо",
        year: 2021,
        age: 12,
        genre: "военный",
        rate: 3.7,
    },
    {
        id: 14,
        name: "Без права на ошибку",
        year: 2010,
        age: 16,
        genre: "военный",
        rate: 4,
    },
    {
        id: 15,
        name: "Чернобыль",
        year: 2019,
        age: 12,
        genre: "катастрофы",
        rate: 4.3,
    },
    {
        id: 16,
        name: "Батя",
        year: 2020,
        age: 16,
        genre: "комедия",
        rate: 5,
    },
    {
        id: 17,
        name: "Клик: С пультом по жизни",
        year: 2006,
        age: 12,
        genre: "комедия",
        rate: 5,
    },
    {
        id: 18,
        name: "Малыш на драйве",
        year: 2017,
        age: 18,
        genre: "боевик",
        rate: 4.5,
    },
    {
        id: 19,
        name: "Советский дизайн",
        year: 2021,
        age: 12,
        genre: "документальный",
        rate: 5,
    },
    {
        id: 20,
        name: "Ферма Кларксона",
        year: 2021,
        age: 12,
        genre: "документальный",
        rate: 4.9,
    },
    {
        id: 21,
        name: "Человек-паук",
        year: 2021,
        age: 12,
        genre: "фэнтези",
        rate: 3.5,
    },
    {
        id: 22,
        name: "Иголка в стогу времени",
        year: 2021,
        age: 18,
        genre: "фэнтези",
        rate: 0,
    },
    {
        id: 23,
        name: "Летчик",
        year: 2021,
        age: 12,
        genre: "военный",
        rate: 4.2,
    },
    {
        id: 24,
        name: "Огонь",
        year: 2020,
        age: 6,
        genre: "драма",
        rate: 4.1,
    },
];

// Нахожим элементы 
const h1 = document.querySelector('.contener__filter > h1');
const genre = document.querySelector('h2.genre > span.genre');
const year = document.querySelector('h2.Year > span.Year');
const rating = document.querySelector('h2.Rating > span.Rating');
const age = document.querySelector('h2.Age > span.Age')

// Изменяем их как в объекте
h1.innerText = `${movies[22].name}`
genre.innerText = `${movies[22].genre}`
year.innerText = `${movies[22].year}`
age.innerText = `${movies[22].age}`
rating.innerText = `${movies[22].rate}`