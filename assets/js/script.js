'use strict';

// Mobile menu variables
var mobileMenuOpenBtns = document.querySelectorAll('[data-mobile-menu-open-btn]');
var mobileMenus = document.querySelectorAll('[data-mobile-menu]');
var mobileMenuCloseBtns = document.querySelectorAll('[data-mobile-menu-close-btn]');
var overlay = document.querySelector('[data-overlay]');

mobileMenuOpenBtns.forEach(function(btn, index) {
  var mobileMenu = mobileMenus[index];
  var mobileMenuCloseBtn = mobileMenuCloseBtns[index];

  var closeMobileMenu = function() {
    mobileMenu.classList.remove('active');
    overlay.classList.remove('active');
  };

  btn.addEventListener('click', function() {
    mobileMenu.classList.add('active');
    overlay.classList.add('active');
  });

  if (mobileMenuCloseBtn) {
    mobileMenuCloseBtn.addEventListener('click', closeMobileMenu);
  }

  overlay.addEventListener('click', closeMobileMenu);
});

// Accordion variables
var accordionBtns = document.querySelectorAll('[data-accordion-btn]');
var accordions = document.querySelectorAll('[data-accordion]');

accordionBtns.forEach(function(btn) {
  btn.addEventListener('click', function() {
    var isActive = btn.nextElementSibling.classList.contains('active');

    accordions.forEach(function(acc, index) {
      if (!isActive) {
        acc.classList.remove('active');
        accordionBtns[index].classList.remove('active');
      }
    });

    btn.nextElementSibling.classList.toggle('active');
    btn.classList.toggle('active');
  });
});