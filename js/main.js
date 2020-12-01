// Перекрашивание средней полоски в бургер меню при наведении на header__menu
var bg = document.getElementById('menu-icon-line');
document.getElementById('header__menu').addEventListener("mouseover", function(){bg.style.background = "#006CB5";this.addEventListener("mouseout", function(){bg.style.background = "";});
});
