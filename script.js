var gamediv = document.getElementById("Matchinggame");


createCard(0,0);
createCard(120,200);



//to get the image below to appear multiple times without having to keep writing out code and, 
//have the chances of a mistake/ error ill use a function of createCard below to create more easier.//
function createCard(cardNum, posX, posY){
    var card = document.createElement("img");
    card.src = "assets/img/card"+cardNum+".png"; //I concatenated the cardnum so we casnn added different images easier//
    card.style.position = "absolute";
    card.style.left = posX+"px";
    card.style.top = posY+"px";
    gamediv.appendChild(card);
}
//posX + posY will be used above in the create card element above the function,
//this will be called and the position values will be given so we can place the cards,
//where we want to easier.//