(function() {
  'use strict';

var btn = document.getElementById('btn');

btn.addEventListener('click', function(){
  var n = Math.floor(Math.random() *10);
  if (n === 0){
    this.textContent = '大吉';
  } else if ((n>0) && (n<=3)) {
    this.textContent = '吉';
  } else if ((n>3) && (n<=6)) {
    this.textContent = '中吉';
  } else if ((n>6) && (n<=9)) {
    this.textContent = '小吉';
  } else {
    this.textContent = '凶';
  }
});
btn.addEventListener('mousedown', function(){
  this.className = 'pushed';
});
btn.addEventListener('mouseup', function(){
  this.className = '';
});
})();
