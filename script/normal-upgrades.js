
function nu1(){
if(ExpantaNum(game.normal.number).gte(1000)&&game.normal.upgrades[0]==0){
game.normal.number=ExpantaNum(game.normal.number).minus(1000);
document.getElementById("nu1").style.backgroundColor="#00ff00";
document.getElementById("nu1b").value="已购买";
game.normal.upgrades[0]=1;
if(game.ach[3]==0){game.ach[3]=1;document.getElementById("ach4").className="achYES";}
}
}
function nu2(){
if(ExpantaNum(game.normal.number).gte(100000)&&game.normal.upgrades[1]==0){
game.normal.number=ExpantaNum(game.normal.number).minus(100000);
document.getElementById("nu2").style.backgroundColor="#00ff00";
document.getElementById("nu2b").value="已购买";
game.normal.upgrades[1]=1;
}
}
function nu3(){
if(ExpantaNum(game.normal.number).gte(10000000)&&game.normal.upgrades[2]==0){
game.normal.number=ExpantaNum(game.normal.number).minus(10000000);
document.getElementById("max all").type="button";
document.getElementById("nu3").style.backgroundColor="#00ff00";
document.getElementById("nu3b").value="已购买";
game.normal.upgrades[2]=1;
if(game.ach[4]==0){game.ach[4]=1;document.getElementById("ach5").className="achYES";}
}
}
function nu4(){
if(ExpantaNum(game.normal.number).gte(10000000000)&&game.normal.upgrades[3]==0){
game.normal.number=ExpantaNum(game.normal.number).minus(10000000000);
document.getElementById("nu4").style.backgroundColor="#00ff00";
document.getElementById("nu4b").value="已购买";
game.normal.upgrades[3]=1;
}
}
function nu5(){
if(ExpantaNum(game.normal.number).gte(100000000000000)&&game.normal.upgrades[4]==0){
game.normal.number=ExpantaNum(game.normal.number).minus(100000000000000);
document.getElementById("nu5").style.backgroundColor="#00ff00";
document.getElementById("nu5b").value="已购买";
game.normal.upgrades[4]=1;
}
}
function nu6(){
if(ExpantaNum(game.normal.number).gte(1e20)&&game.normal.upgrades[5]==0){
game.normal.number=ExpantaNum(game.normal.number).minus(1e20);
document.getElementById("nu6").style.backgroundColor="#00ff00";
document.getElementById("nu6b").value="已购买";
game.normal.upgrades[5]=1;
if(game.ach[5]==0){game.ach[5]=1;document.getElementById("ach6").className="achYES";}
}
}
function nu7(){
if(ExpantaNum(game.normal.number).gte(1e25)&&game.normal.upgrades[6]==0){
game.normal.number=ExpantaNum(game.normal.number).minus(1e25);
document.getElementById("nu7").style.backgroundColor="#00ff00";
document.getElementById("nu7b").value="已购买";
game.normal.upgrades[6]=1;
}
}
function nu8(){
if(ExpantaNum(game.normal.number).gte(1e30)&&game.normal.upgrades[7]==0){
game.normal.number=ExpantaNum(game.normal.number).minus(1e30);
document.getElementById("nu8").style.backgroundColor="#00ff00";
document.getElementById("nu8b").value="已购买";
game.normal.upgrades[7]=1;
}
}
function nu9(){
if(ExpantaNum(game.normal.number).gte(1e40)&&game.normal.upgrades[8]==0){
game.normal.number=ExpantaNum(game.normal.number).minus(1e40);
document.getElementById("nu9").style.backgroundColor="#00ff00";
document.getElementById("nu9b").value="已购买";
game.normal.upgrades[8]=1;
if(game.ach[7]==0){game.ach[7]=1;document.getElementById("ach8").className="achYES";}
}
}
