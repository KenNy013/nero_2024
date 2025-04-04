/// Слайдер

class ContentForSlider {
  constructor(elem, array) {
    this.elem = elem;
    this.array = array;
  }

  render = function () {
    this.array.forEach((element) => {
      this.elem.insertAdjacentHTML(
        "beforeend",
        `<div class="swiper-slide">
                        <div class="card">
                            <img src="${element.img}" class="card-img-top" alt="..." height="200px">
                            <div class="card-body">
                                <h5 class="card-title">Название: ${element.title}</h5>
                                <h6>Автор: ${element.author}</h6>
                                <p class="card-text">Описание: ${element.discription}</p>
                                <a href="${element.link}" class="btn btn-primary" tabindex="-1"
                                   role="button"
                                   aria-disabled="true">Смотреть</a>
                            </div>
                        </div>
                    </div>`
      );
    });
  };
}

const art = document.querySelector("#art");
const arrayArt = [
  {
    img: "./img/arts/art/art2.webp",
    title: "Восток-1",
    discription:
      "Чем больше тайн мы открываем, тем больше новых вопросов встаёт перед нами.",
    author: "Соколов А.К., Леонов А.А.",
    link: "https://kosmo.museum-online.moscow/entity/OBJECT/1529?index=8&paginator=entity-set&entityType=ALBUM&entityId=3981657&attribute=objects",
  },
  {
    img: "./img/arts/art/art3.jpg",
    title: "Посадка Востока-1",
    discription:
      "Космос поражает своей необъятностью и бездонностью. Люди, казалось бы, покорили его просторы, но это лишь видимость. ",
    author: "Соколов А.К., Леонов А.А.",
    link: "https://kosmo.museum-online.moscow/entity/OBJECT/1672?index=36&paginator=entity-set&entityType=ALBUM&entityId=3981657&attribute=objects",
  },
  {
    img: "./img/arts/art/art4.webp",
    title: "На звездных трассах",
    discription:
      "Эта бездна манит к себе не только космонавтов, но и поэтов, писателей, учёных, художников.",
    author: "Соколов А.К., Леонов А.А.",
    link: "https://kosmo.museum-online.moscow/entity/OBJECT/1670?index=34&paginator=entity-set&entityType=ALBUM&entityId=3981657&attribute=objects",
  },
];

const ArtForSlider = new ContentForSlider(art, arrayArt);
ArtForSlider.render();

const music = document.querySelector("#music");
const arrayMusic = [
  {
    img: "./img/arts/music/musik1.webp",
    title: "Про космос",
    author: "Скрип Строк",
    discription:
      "В песне переплетаются размышления о вечности, поиске смысла жизни и стремлении к новым горизонтам. Мощный бит и проникновенный вокал передают энергию и страсть, вдохновляя на мечты и великие свершения. ",
    link: "https://music.yandex.ru/album/31841019",
  },
  {
    img: "./img/arts/music/music2.png",
    title: "Космос",
    author: "Слава КПСС, DEAD BLONDE",
    discription:
      "Мелодия плавно переносит слушателя в состояние лёгкости и умиротворённости, создавая ощущение парения над миром. Лирика песни наполнена образами небесной чистоты и светлой любви, которые гармонично сочетаются с мягким вокалом исполнителя.",
    link: "https://music.yandex.ru/album/23755687",
  },
  {
    img: "./img/arts/music/music3.jpg",
    title: "Сахар",
    author: "Маша Мария",
    discription:
      " от Маши Марии — это яркий и энергичный трек, который сочетает в себе элементы поп-музыки и современного R&B. Лёгкий бит и запоминающийся мотив создают атмосферу праздника и позитива.",
    link: "https://music.yandex.ru/album/4137845",
  },
];

const MusicForSlider = new ContentForSlider(music, arrayMusic);
MusicForSlider.render();

const film = document.querySelector("#film");
const arrayFilm = [
  {
    img: "./img/arts/film/film1.webp",
    title: "Обливион",
    author: "Джозеф Косински",
    discription:
      "Земля, пережившая войну с инопланетными захватчиками, опустела; остатки человечества готовятся покинуть непригодную для жизни планету. ",
    link: "https://yandex.ru/video/preview/1314395558993986006?noreask=1",
  },
  {
    img: "./img/arts/film/film2.webp",
    title: "За пределами Вселенной",
    author: " Хасраф Дулулл",
    discription:
      "Штатная процедура выхода в космос внезапно заканчивается загадочным исчезновением американского астронавта. ",
    link: "https://yandex.ru/video/preview/16622764155826094352?noreask=1",
  },
  {
    img: "./img/arts/film/film3.webp",
    title: "2036: Происхождение неизвестно",
    author: "Хасраф Дулулл",
    discription:
      "Космическая экспедиция обнаруживает на поверхности Марса нечто, способное изменить жизнь человечества навсегда.",
    link: "https://yandex.ru/video/preview/7940341758162409870?noreask=1",
  },
];

const FilmForSlider = new ContentForSlider(film, arrayFilm);
FilmForSlider.render();

const swiper = new Swiper(".swiper", {
  // Optional parameters

  loop: true,
  slidesPerView: 2,
  spaceBetween: 15,

  // If we need pagination

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
});
