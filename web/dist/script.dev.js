"use strict";

// toogle menubar 
var menuIcon = document.querySelector('#menu-icon');
var navbar = document.querySelector('.navbar');

menuIcon.onclick = function () {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
}; //get all the navbar linkss111


var navbarLinks = document.querySelectorAll('.navbar a'); //now a eventListner to each link

navbarLinks.forEach(function (link) {
  link.addEventListener('click', function (event) {
    // prevent the default behavr of link if.. pagereload
    event.preventDefault(); //remove active aclass from all links

    navbarLinks.forEach(function (navLink) {
      navLink.classList.remove('active');
    }); //adding active to each clicked section

    this.classList.add('active'); // .....................active sections...
    //scroll to target section optional

    var targetId = this.getAttribute('href').slice(1);
    var targetSection = document.getElementById(targetId);

    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
}); //stickyheade

window.onscroll = function () {
  var header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 100); // remove toggle icon and nav bar whrn click

  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');
}; // color root SVGPathElement.apply.call.bind.call.bind.


var colorSwitch = document.getElementById('colorSwitch');
var root = document.documentElement;
var currentColorSchemeIndex = 0;
var colorSchemes = ['color-1', 'color-2', 'color-3', 'color-4', 'color-5', 'color-6', 'color-7'];
colorSwitch.addEventListener('change', function () {
  var _root$classList;

  currentColorSchemeIndex = (currentColorSchemeIndex + 1) % colorSchemes.length;
  var currentColorScheme = colorSchemes[currentColorSchemeIndex];

  (_root$classList = root.classList).remove.apply(_root$classList, colorSchemes);

  root.classList.add(currentColorScheme);
});