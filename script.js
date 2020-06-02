<<<<<<< HEAD
if (document.readystate === 'loading') {
    document.addEventListener('DOMContentLoaded', ready());
} else{
    ready();
=======
class Audiocontroller {
    constructor(){
        this.backroundmusic = new Audio('assets/audio/animals001.mp3');
    }

>>>>>>> e8097116d9c3c78bfda9837f2a561ebeb17e0b1c
}

function ready(){
    let overlays = Array.from(document.getElementsByClassName('overlay-text'));
    let cards = Array.from(document.getElementsByClassName('card'));

<<<<<<< HEAD
    overlays.forEach(overlay =>{
        overlay.addEventListener('click', () =>{
            overlay.classList.remove('visible');
            //game.startGame();
        });

    });
    cards.forEach(card => {
        card.addEventListener('click', () =>{
            //game.flipCard(card);
        });
    });
}
=======
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
>>>>>>> e8097116d9c3c78bfda9837f2a561ebeb17e0b1c
