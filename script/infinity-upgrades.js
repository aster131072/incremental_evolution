function iu1(){
if(ExpantaNum(game.infinity.number).gte(1)&&game.infinity.upgrades[0]==0){
game.infinity.number=ExpantaNum(game.infinity.number).minus(1);
document.getElementById("iu1").style.backgroundColor="#00ff00";
game.infinity.upgrades[0]=1;
document.getElementById("normal_challenge_tab").style.display='inline';
}
}
function iu2(){
if(ExpantaNum(game.infinity.number).gte(1)&&game.infinity.upgrades[1]==0){
game.infinity.number=ExpantaNum(game.infinity.number).minus(1);
document.getElementById("iu2").style.backgroundColor="#00ff00";
game.infinity.upgrades[1]=1;
document.getElementById("infinity_generator_tab").style.display='inline';
}
}
function iu3(){
if(ExpantaNum(game.infinity.number).gte(1)&&game.infinity.upgrades[2]==0){
game.infinity.number=ExpantaNum(game.infinity.number).minus(1);
document.getElementById("iu3").style.backgroundColor="#00ff00";
game.infinity.upgrades[2]=1;

}
}
function iu4(){
if(ExpantaNum(game.infinity.number).gte(1)&&game.infinity.upgrades[3]==0){
game.infinity.number=ExpantaNum(game.infinity.number).minus(1);
document.getElementById("iu4").style.backgroundColor="#00ff00";
game.infinity.upgrades[3]=1;

}
}
function iu5(){
if(ExpantaNum(game.infinity.number).gte(10)&&game.infinity.upgrades[4]==0){
game.infinity.number=ExpantaNum(game.infinity.number).minus(10);
document.getElementById("iu5").style.backgroundColor="#00ff00";
game.infinity.upgrades[4]=1;

}
}
function iu6(){
if(ExpantaNum(game.infinity.number).gte(100)&&game.infinity.upgrades[5]==0){
game.infinity.number=ExpantaNum(game.infinity.number).minus(100);
document.getElementById("iu6").style.backgroundColor="#00ff00";
game.infinity.upgrades[5]=1;
getAchievement(16);
}
}
function iu7(){
if(ExpantaNum(game.infinity.number).gte(3)&&game.infinity.upgrades[6]==0){
game.infinity.number=ExpantaNum(game.infinity.number).minus(3);
document.getElementById("iu7").style.backgroundColor="#00ff00";
game.infinity.upgrades[6]=1;

}
}
function iu8(){
if(ExpantaNum(game.infinity.number).gte(5)&&game.infinity.upgrades[7]==0){
game.infinity.number=ExpantaNum(game.infinity.number).minus(5);
document.getElementById("iu8").style.backgroundColor="#00ff00";
game.infinity.upgrades[7]=1;

}
}
function iu9(){
if(ExpantaNum(game.infinity.number).gte(100)&&game.infinity.upgrades[8]==0){
game.infinity.number=ExpantaNum(game.infinity.number).minus(100);
document.getElementById("iu9").style.backgroundColor="#00ff00";
game.infinity.upgrades[8]=1;

}
}
function iu10(){
	let cost = ExpantaNum.pow(10,3*game.infinity.upgrades[9]+1);
	if(game.infinity.upgrades[9]<5&&ExpantaNum(game.infinity.number).gte(cost)){
		game.infinity.number=ExpantaNum(game.infinity.number).minus(cost);
		game.infinity.upgrades[9]+=1;
		let red = 51*(5-game.infinity.upgrades[9]);
		let green = 51*game.infinity.upgrades[9];
		document.getElementById("iu10").style.backgroundColor="rgb(" + red + "," + green + ",0)";
		if(game.infinity.upgrades[9]<5){
			document.getElementById("iu10b").value=cost*1000+"无限点数";
		}else{
			document.getElementById("iu10b").value="已达最大";
		}
		
	}
}
function iu11(){
	let cost = ExpantaNum.pow(10,3*game.infinity.upgrades[10]+1);
	if(game.infinity.upgrades[10]<5&&ExpantaNum(game.infinity.number).gte(cost)){
		game.infinity.number=ExpantaNum(game.infinity.number).minus(cost);
		game.infinity.upgrades[10]+=1;
		let red = 51*(5-game.infinity.upgrades[10]);
		let green = 51*game.infinity.upgrades[10];
		document.getElementById("iu11").style.backgroundColor="rgb(" + red + "," + green + ",0)";
		if(game.infinity.upgrades[10]<5){
			document.getElementById("iu11b").value=cost*1000+"无限点数";
		}else{
			document.getElementById("iu11b").value="已达最大";
		}
	}
}
function iu12(){
	let cost = ExpantaNum.pow(10,3*game.infinity.upgrades[11]+1);
	if(game.infinity.upgrades[11]<5&&ExpantaNum(game.infinity.number).gte(cost)){
		game.infinity.number=ExpantaNum(game.infinity.number).minus(cost);
		game.infinity.upgrades[11]+=1;
		let red = 51*(5-game.infinity.upgrades[11]);
		let green = 51*game.infinity.upgrades[11];
		document.getElementById("iu12").style.backgroundColor="rgb(" + red + "," + green + ",0)";
		if(game.infinity.upgrades[11]<5){
			document.getElementById("iu12b").value=cost*1000+"无限点数";
		}else{
			document.getElementById("iu12b").value="已达最大";
		}
		
	}
}
