function _$(elt){
    return document.getElementById(elt);
}

var p_1= _$("p_1");
var p_2= _$("p_2");
var p_3= _$("p_3");
var p_4= _$("p_4");
var p_5= _$("p_5");
var p_6= _$("p_6");
var p_7= _$("p_7");
var p_8= _$("p_8");
var p_9= _$("p_9");
var p_10= _$("p_10");
var p_11= _$("p_11");
var p_12= _$("p_12");
var p_13= _$("p_13");
var p_14= _$("p_14");
var p_15= _$("p_15");

var player1 = [];
var player2 = [];

var p1 = [];
function players(mpilalao,safidiny){
    this.player = mpilalao;
    this.choix = safidiny;
};
var i = 0;
    function choix(rav, player){
        if(player.length < 3){
            player.push(rav.src);
            rav.onclick = "";
            rav.style.opacity = 0;
            console.log(player);
            p = [];
        }if(player.length == 3){
            p[i] = new players("player1",player1);
            console.log(p[i]);
        }             
    }


// function Aff(){
//     console.log(document.player1);
//     var div = document.createElement("div");
//     div.id ="div_plr";
//     for(i=0; i<plr.length; i++){
//       var image = document.createElement('img');
//       image.id= plr[i];console.log(image);
//        console.log(player1[0]);
//       div.appendChild(image);
//       body.appendChild(div);
//     }
// }

