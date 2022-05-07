let game1Div = document.querySelector(".game1");
let game2Div = document.querySelector(".game2");


game1Div.addEventListener("click",function(){
    let game1Url = "https://aryang23.github.io/WhackAMole/";
    window.open(game1Url,'_blank');
})

game2Div.addEventListener("click",function(){
    let game2Url = "https://aryang23.github.io/Memory-Game-JS/";
    window.open(game2Url,'_blank');
})