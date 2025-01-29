document.addEventListener("DOMContentLoaded", function() {
  var menu = document.body.querySelector('.menu__list');
  var sections = document.body.querySelectorAll('[data-visible]');
  var activeMenuItem = document.body.querySelector('.active');

  var curActiveItem = activeMenuItem;

  menu.addEventListener("click", function(e) {
    e.preventDefault();
    var target = e.target.attributes.href.value.replace('#', '');
    curActiveItem.classList.remove('active');
    e.target.classList.add('active');
    curActiveItem = e.target;

    sections.forEach(function(section) {
      if (section.attributes.id.value === target) {
        console.log(section.attributes, target);
        section.setAttribute('data-visible', true);
      } else {
        section.setAttribute('data-visible', false);
      }
    });
  });
});