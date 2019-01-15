'use strict';
(function(){

  var productImage = document.querySelector('.product__img');
  var navigation = document.querySelector('.navigation');
  var navigationHome = document.querySelector('.product-navigation__home');
  var navigationHomeSec = document.querySelector('.product-navigation__list--secondary');
  var navigationBurger = document.querySelector('.navigation__burger');
  var navigationBack = document.querySelector('.site-map__back');

  var navigationBackClickHandler = function() {
    move('.site-map_list-container')
      .set('opacity', '0')
      .end();

    move('.site-map__all')
      .set('margin-bottom', '60px')
      .set('opacity', '0')
      .end();

    move('.site-map__back-arrow')
      .set('opacity', '0')
      .end();

    move('.site-map')
    .set('width', '0px')
    .set('padding', '0')
    .delay('0.5s')
    .end();
  };

  var navigationBurgerClickHandler = function () {
    move('.site-map')
    .set('width', '550px')
    .set('padding', '40px 30px')
    .set('z-index', '5')
    .end(function(){
      move('.site-map_list-container')
      .set('opacity', '1')
      .end();

      move('.site-map__all')
      .set('margin-bottom', '50px')
      .set('opacity', '1')
      .end();

      move('.site-map')
      .end();
      move('.site-map__back-arrow')
      .set('opacity', '1')
      .end();
    });
  };

  var navigationHomeClickHandler = function () {
    if(!navigationHome.classList.contains('expanded')) {
      navigationHome.classList.add('expanded');
      move('.product-navigation__list--secondary')
        .set('height', '185.98px')
        .set('overflow', 'visible')
        .end();
      return;
    }
    if(navigationHome.classList.contains('expanded')) {
      move('.product-navigation__list--secondary')
        .set('height', '0')
        .set('padding', '0')
        .set('overflow', 'hidden')
        .end();
        navigationHome.classList.remove('expanded');
        navigationHomeSec.style.overflow = 'hidden';
    }
  };

  var navigationMouseOnHandler = function () {
    move('.navigation')
    .set('background-size', 'auto 1030px')
    .end();

    move('.navigation__list')
      .set('margin-bottom', '32px')
      .end();
  };

  var navigationMouseOutHandler = function () {
    move('.navigation')
    .set('background-size', 'auto 1000px')
    .end();

    move('.navigation__list')
      .set('margin-bottom', '52px')
      .end();
  };

  var productImageMouseOnHandler = function () {
    console.log(1);
    move('.product__img')
    .set('height', '210px')
    .set('background-size', '430px 250px')
    .end();
  };

  var productImageMouseOutHandler = function () {
    move('.product__img')
    .set('height', '230px')
    .set('background-size', '410px 230px')
    .end();
  };

  navigationBack.addEventListener('click', navigationBackClickHandler);
  navigationBurger.addEventListener('click', navigationBurgerClickHandler);
  navigationHome.addEventListener('click', navigationHomeClickHandler);
  navigation.addEventListener('mouseover', navigationMouseOnHandler);
  navigation.addEventListener('mouseout', navigationMouseOutHandler);
  productImage.addEventListener('mouseover', productImageMouseOnHandler);
  productImage.addEventListener('mouseout', productImageMouseOutHandler);

})();
