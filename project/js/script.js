/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};


const deleteAdd = document.querySelectorAll('.promo__adv'),
backgroundPoster = document.querySelector('.promo__bg'),
genreFilm = backgroundPoster.querySelector('.promo__genre'),
movieList = document.querySelector('.promo__interactive-list');


/*1 задание*/
deleteAdd.forEach(function(item) {
    item.remove();
});


/*2 задание*/
genreFilm.textContent = 'Драма';


/*3 задание*/
backgroundPoster.style.backgroundImage = "url('img/bg.jpg')";


/*4 и 5 задание*/
movieList.innerHTML = "";
movieDB.movies.sort();
movieDB.movies.forEach((film, i) => {
    movieList.innerHTML += `
                        <li class="promo__interactive-item">${i + 1} ${film}
                            <div class="delete"></div>
                        </li>
    `;
})



/*5 задание*/




