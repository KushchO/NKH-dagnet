'use strict';
(function(){
  var easeFunctions = ['in', 'out', 'in-out']

  var blockList = document.querySelectorAll('.page__block-container');
  var sliderButton = document.querySelector('.pages__next-page');

  var getRandomOfRange = function(min, max) {
    return Math.floor(min + Math.random() * (max + 1 - min));
  }

  var preOrderBlocks = function () {
    var counter = 0;

    blockList.forEach(function (item, i , arr) {
      var blocks = item.querySelectorAll('.block');
      blocks.forEach(function(item){
        item.style.left = counter + 'px';
      });
      counter += 2000;
  });
  }

  var reorderLeftBlock = function (blocks, arr) {
    blocks.forEach(function(block, i, blocks){
      if(block.style.left === "-2000px")
      block.style.left = 2000 * (arr.length - 1) + 'px';
    });
  }

  var redefineMoveJsSelector = function () {
    move.select = function(selector){
      return selector.get(0);
    };
  }

  var slideBlocks = function(blocks) {
    blocks.forEach(function(item){

      redefineMoveJsSelector();

      move(item)
        .ease(easeFunctions[getRandomOfRange(0,2)])
        .sub('left', 2000)
        .duration('1s')
        .end();
    });
  }

  preOrderBlocks();

  sliderButton.addEventListener('click', function() {
    blockList.forEach(function (item, i , arr) {
      var blocks = item.querySelectorAll('.block');

      reorderLeftBlock(blocks, arr);
      slideBlocks(blocks);
    });
  });
})();
