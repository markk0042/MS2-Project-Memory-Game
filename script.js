class Audiocontroller {
    constructor(){
        this.backroundmusic = new Audio('assets/audio/animals001.mp3');
    }

}

function ready(){
let overlays = Array.from(document.getElementsByClassName('overlay-text'));
let cards = Array.from(document.getElementsByClassName('card'));

overlays.forEach(overlay => {
    overlay.addEventListener('click', () => {
    overlay.classList.remove('visible');
    //game.startGame();
});
});
cards.forEach(card => {
    card.addEventListener('click', () => {
        //game.flipcard(card);
    });
});

if(document.readState === 'loading'){
document.addEventListener('DOMContentLoaded', ready());
} else {
    ready();
}

let audiocontroller = new Audiocontroller();