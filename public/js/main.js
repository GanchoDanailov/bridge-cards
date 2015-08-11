
var showBtn = document.querySelector('.btn-show');
var card = document.querySelector('.container');


showBtn.onclick = function() {
    this.classList.toggle('btn-5-click');
    card.classList.toggle('show-card-answer');
};
