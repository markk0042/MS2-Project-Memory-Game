var gamediv = document.getElementById("Matchinggame");

var cardsize = 100;//created these two for the margin around the image tiles.
var cardspacing = 10;
var gameWidth = 4;
var gameHeight = 4;

//below I changed x and y value in the loop to h and v for horizontal and vertical,
//then i placed them into the loop.
createGrid(gameWidth,gameHeight);

function createGrid(h,v) {
    var a = [0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7];//created array for the cards.

for(var x=0; x<h; x++){
    for(var y=0; y<v; y++) {
        createCard(a.pop(),x, y);//pop function will pop off last value in the loop.
        }
    }
}

 
//to get the image below to appear multiple times without having to keep writing out code and, 
//have the chances of a mistake/ error ill use a function of createCard below to create more easier.//
function createCard(cardNum, posX, posY){
    var card = document.createElement("img");
    card.num = cardNum;
    card.src = "assets/img/cardback.png"; //I concatenated the cardnum so we casnn added different images easier//
    card.style.position = "absolute";
    card.style.left = (posX*(cardsize+cardspacing)+cardspacing)+"px";//the equation here will take the 100px wide image and add a 10px margin on the right and then the extra +10px on the left// 
    card.style.top = (posY*(cardsize+cardspacing)+cardspacing)+"px";
    card.onclick = clickCard;
    gamediv.appendChild(card);
}
//posX + posY will be used above in the create card element above the function,
//this will be called and the position values will be given so we can place the cards,
//where we want to easier.//
function clickCard(e){//used e for event.
    var card = e.target; 
    card.src = "assets/img/card"+card.num+".png"; //adding card.num because card.nums value created is in the create card function and the  
    //value of create card is a.pop() resulting in the array being pullled.
    
}