function eu1(){
	if(ExpantaNum(game.eternity.number).gte(1)&&game.eternity.upgrades[0]==0){
		game.eternity.number=ExpantaNum(game.eternity.number).minus(1);
		document.getElementById("eu1").style.backgroundColor="#00ff00";
		game.eternity.upgrades[0]=1;
	}
}
function eu2(){
	if(ExpantaNum(game.eternity.number).gte(5)&&game.eternity.upgrades[1]==0){
		game.eternity.number=ExpantaNum(game.eternity.number).minus(5);
		document.getElementById("eu2").style.backgroundColor="#00ff00";
		game.eternity.upgrades[1]=1;
	}
}
function eu3(){
	if(ExpantaNum(game.eternity.number).gte(10)&&game.eternity.upgrades[2]==0){
		game.eternity.number=ExpantaNum(game.eternity.number).minus(10);
		document.getElementById("eu3").style.backgroundColor="#00ff00";
		game.eternity.upgrades[2]=1;
	}
}
function eu4(){
	if(ExpantaNum(game.eternity.number).gte(20)&&game.eternity.upgrades[3]==0){
		game.eternity.number=ExpantaNum(game.eternity.number).minus(20);
		document.getElementById("eu4").style.backgroundColor="#00ff00";
		game.eternity.upgrades[3]=1;
	}
}
function eu5(){
	if(ExpantaNum(game.eternity.number).gte(100)&&game.eternity.upgrades[4]==0){
		game.eternity.number=ExpantaNum(game.eternity.number).minus(100);
		document.getElementById("eternity_challenge_tab").style.display='inline';
		document.getElementById("eu5").style.backgroundColor="#00ff00";
		game.eternity.upgrades[4]=1;
	}
}
function eu6(){
	if(ExpantaNum(game.eternity.number).gte(1e10)&&game.eternity.upgrades[5]==0){
		game.eternity.number=ExpantaNum(game.eternity.number).minus(1e10);
		document.getElementById("eu6").style.backgroundColor="#00ff00";
		game.eternity.upgrades[5]=1;
	}
}
function eu7(){
	if(ExpantaNum(game.eternity.number).gte(1e28)&&game.eternity.upgrades[6]==0){
		game.eternity.number=ExpantaNum(game.eternity.number).minus(1e28);
		document.getElementById("eu7").style.backgroundColor="#00ff00";
		getAchievement(30);
		game.eternity.upgrades[6]=1;
	}
}
function eu8(){
	if(ExpantaNum(game.eternity.number).gte(1e100)&&game.eternity.upgrades[7]==0){
		game.eternity.number=ExpantaNum(game.eternity.number).minus(1e100);
		document.getElementById("eu8").style.backgroundColor="#00ff00";
		game.eternity.upgrades[7]=1;
	}
}
function eu9(){
	if(ExpantaNum(game.eternity.number).gte(1e150)&&game.eternity.upgrades[8]==0){
		game.eternity.number=ExpantaNum(game.eternity.number).minus(1e150);
		document.getElementById("eu9").style.backgroundColor="#00ff00";
		game.eternity.upgrades[8]=1;
	}
}
function eu10(){
	if(ExpantaNum(game.eternity.number).gte(ExpantaNum.pow(10,1750))&&game.eternity.upgrades[9]==0){
		game.eternity.number=ExpantaNum(game.eternity.number).minus(ExpantaNum.pow(10,1750));
		document.getElementById("eu10").style.backgroundColor="#00ff00";
		document.getElementById("universe").style.display='block';
		game.eternity.upgrades[9]=1;
		
	}
}