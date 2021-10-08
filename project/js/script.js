'use strict';

document.addEventListener('DOMContentLoaded', () => {
    /* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};


const adv = document.querySelectorAll('.promo__adv img'),
backgroundPoster = document.querySelector('.promo__bg'),
genreFilm = backgroundPoster.querySelector('.promo__genre'),
movieList = document.querySelector('.promo__interactive-list'),
addForm = document.querySelector('form.add'),
addInput = addForm.querySelector('.adding_input'),
checkbox = addForm.querySelector('[type="checkbox"]');

addForm.addEventListener('submit', (event) => {
    event.preventDefault(); /*чтобы страничка не перезагружалась при отправке формы*/

    let newFilm = addInput.value; /*Для получения доступа к значению input*/
    const favorite = checkbox.checked;

    if (newFilm) {
        if (newFilm.length > 21) {
            newFilm = `${newFilm.substring(0, 22)}...`;
        }
    movieDB.movies.push(newFilm);
    sortArr(movieDB.movies);

    createMovieList(movieDB.movies, movieList);
    } 
    event.target.reset(); /*очистка формы*/
})


/*1 задание*/
const deleteAdv = function (arr) {
    arr.forEach(function(item) {
    item.remove();
});
};


const makeChange = () => {
    /*2 задание*/
    genreFilm.textContent = 'Драма';
    /*3 задание*/
    backgroundPoster.style.backgroundImage = "url('img/bg.jpg')";
};


const sortArr = (arr) => {
    arr.sort();
};


/*4 и 5 задание*/
function createMovieList(films, parent) {
    parent.innerHTML = "";
    
    films.forEach((film, i) => {
    parent.innerHTML += `
                        <li class="promo__interactive-item">${i + 1} ${film}
                            <div class="delete"></div>
                        </li>
    `;
});
}

deleteAdv(adv);
makeChange();
sortArr(movieDB.movies);
createMovieList(movieDB.movies, movieList);

});





