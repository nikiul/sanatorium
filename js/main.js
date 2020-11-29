// Перекрашивание средней полоски в бургер меню
var bg = document.getElementById('menu-icon-line');
document.getElementById('menu-toggle').addEventListener("mouseover", function(){bg.style.background = "#006CB5";this.addEventListener("mouseout", function(){bg.style.background = "";});
});