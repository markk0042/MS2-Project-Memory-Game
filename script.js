

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