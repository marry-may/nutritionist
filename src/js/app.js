/*
!(i) 
Код попадает в итоговый файл, только когда вызвана функция, например FLSFunctions.spollers();
Или когда импортирован весь файл, например import "files/script.js";
Неиспользуемый (не вызванный) код в итоговый файл не попадает.

Если мы хотим добавить модуль следует его расскоментировать
*/
import {
  isWebp,
  headerFixed,
  togglePopupWindows,
  addTouchClass,
  addLoadedClass,
  menuInit,
} from './modules'
/* Раскомментировать для использования */
// import { MousePRLX } from './libs/parallaxMouse'

/* Раскомментировать для использования */
// import AOS from 'aos'

/* Раскомментировать для использования */
// import Swiper, { Navigation, Pagination } from 'swiper'

// Включить/выключить FLS (Full Logging System) (в работе)
window['FLS'] = location.hostname === 'localhost'

/* Проверка поддержки webp, добавление класса webp или no-webp для HTML
! (i) необходимо для корректного отображения webp из css 
*/
isWebp()
/* Добавление класса touch для HTML если браузер мобильный */
/* Раскомментировать для использования */
// addTouchClass();
/* Добавление loaded для HTML после полной загрузки страницы */
/* Раскомментировать для использования */
// addLoadedClass();
/* Модуль для работы с меню (Бургер) */
/* Раскомментировать для использования */
// menuInit()

/* Библиотека для анимаций ===============================================================================
 *  документация: https://michalsnik.github.io/aos
 */
// AOS.init();
// =======================================================================================================

// Паралакс мышей ========================================================================================
// const mousePrlx = new MousePRLX({})
// =======================================================================================================

// Фиксированный header ==================================================================================
// headerFixed()
// =======================================================================================================

/* Открытие/закрытие модальных окон ======================================================================
* Add on modal data-popup="" (modal)
* Add on trigger modal button data-type="" (modal)
* Add on modal wrapper "._overlay-bg"
* Add on close modal button class ".button-close"
*/
/* Modal */
// togglePopupWindows()
// =======================================================================================================


// Trigger a CSS animation on scroll
// const observer = new IntersectionObserver(entries => {
//   entries.forEach(entry => {
//     const square = entry.target.querySelector('.animate-onscroll');

//     if (entry.isIntersecting) {
//       square.classList.add('onscroll-animation');
// 	  //return; // if we added the class, exit the function
//     }

//     // We're not intersecting, so remove the class!
//     square.classList.remove('onscroll-animation');
//   });
// });

// observer.observe(document.querySelector('.card-icon'));


// Trigger a CSS animation on scroll
function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("onscroll-animation");
    } else {
      reveals[i].classList.remove("onscroll-animation");
    }
  }
}

window.addEventListener("scroll", reveal);