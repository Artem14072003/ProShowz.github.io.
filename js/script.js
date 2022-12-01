'use strict';

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
        rate: 4,
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

// Фильтр 

const year = document.querySelector("#year")
const genre = document.querySelector("#genres")
const age = document.querySelector("#age")
const sort = document.querySelector('#rate')

let selects = [year, genre, age, sort]

function cardtemplate() {
  let cards = []
  movies.map((i) => {
      cards.push({
          template: `                
            <div class="card" id="${i.id}">
                <div class="block">
                    <div class="text__card">
                        <h2>${i.name}</h2>
                    </div>
                    <div class="foto">
                        <a href="./card/card_${i.id}.html">
                            <img src="./../img/card/card_${i.id}.png" alt="${i.genre}">
                        </a>
                    </div>
                    <div class="munu__nav">
                        <div class="rating">
                            <div class="rating__body">
                                <div class="rating__active"></div>
                                <div class="rating__items">
                                    <input type="radio" class="rating__item" value="1" name="rating">
                                    <input type="radio" class="rating__item" value="2" name="rating">
                                    <input type="radio" class="rating__item" value="3" name="rating">
                                    <input type="radio" class="rating__item" value="4" name="rating">
                                    <input type="radio" class="rating__item" value="5" name="rating">
                                </div>
                            </div>
                          <div class="rating__value">${i.rate}</div>
                        </div>
                        <a class="button" href="./card/card_${i.id}.html">
                          Смотреть
                        </a>
                    </div>
                </div>
            </div> `,
          genre: i.genre,
          age: i.age,
          year: i.year,
          sort: i.rate
      })
  })
  return cards
}
let cardshtml = document.querySelector('.card_wrapper');

function addcards(cards) {
    const main = document.querySelector('main')
    console.log(main)
    cardshtml.innerHTML = ''

    cards.map((i) => {
        cardshtml.innerHTML += i.template
        main.append(cardshtml)
  })
}

addcards(cardtemplate())

document.querySelector('.button > button').addEventListener('click', reset)

function reset() {
    addcards(cardtemplate())
}

function filter(year, genre, age) {
  let yearx = false
  let genrex = false
  let agex = false
  let cards = cardtemplate()
  if (year !== "") {
      yearx = true
  }
  if (genre !== "") {
      genrex = true
  }
  if (age !== "") {
      agex = true
  }
  if(yearx||genrex||agex){
      cards = cards.filter((i) => {
          let isshow = []
          if (yearx) {
              if (i.year >= Number(year.split("-")[0]) && i.year <= Number(year.split("-")[1])) {
                  isshow.push(true);
              }
              else{
                  isshow.push(false)
              }
          }
          if (genrex) {
              if (i.genre === genre) {
                  isshow.push(true);
              }
              else{
                  isshow.push(false)
              }
          }
          if (agex) {
              if (i.age <= Number(age.slice(0, age.length - 1))) {
                  isshow.push(true);
              }
              else{
                  isshow.push(false)
              }
          }

        //   if (sortx !== "Genre") {
        //     console.log("genre");
        //     selects = selects.filter((i) => {
        //         console.log(i.genre === genre);
        //         return i.genre === genre;
        //     })
        // };

          if (isshow.length > 1){
              return isshow.reduce((a,b)=> a*b)
          }
          else if(isshow.length === 1){
              return isshow[0]
          }
          else{
              return false
          }
      })
      console.log(cards)
      addcards(cards);
  }
}

selects.map((i) => {
  i.addEventListener('click', () => {
      const year = document.querySelector("#year")
      const genre = document.querySelector("#genres")
      const age = document.querySelector("#age")
      const sort = document.querySelector('#rate')
      const yearvalue = year.value
      const genrevalue = genre.value
      const agevalue = age.value
      const sortvalue = sort.value
      filter(yearvalue, genrevalue, agevalue)
  })
})



// Звёздный рейтинг
const retings = document.querySelectorAll('.rating');
if (retings.length > 0){
    initRatings();
}

function initRatings() {
    let ratingActive; 
    let ratingValue;
    for (let i = 0; i < retings.length; i++) {
        const rating = retings[i];
        initRating(rating);
    }
    
    function initRating(rating) {
        initRatingVars(rating);
        
        setRatingActiveWidth();
    }
    
    function initRatingVars(rating) {
        ratingActive = rating.querySelector('.rating__active')
        ratingValue = rating.querySelector('.rating__value')
    }
    
    function setRatingActiveWidth(index = ratingValue.innerHTML) {
        const ratingActiveWidth = index /0.05;
        ratingActive.style.width = `${ratingActiveWidth}%`
    }
}


