
var gameSpeed = 1;



function tick()
{

	game.normal.speed = 1;
	if(game.normal.upgrades[1]) game.normal.speed=ExpantaNum(game.normal.speed).times(1.3);
	if(game.normal.upgrades[4]) game.normal.speed=ExpantaNum(game.normal.speed).times(2);
	if(game.normal.upgrades[7]) game.normal.speed=ExpantaNum(game.normal.speed).times(4);
	if(game.normal.upgrades[5]&&ExpantaNum(game.normal.number).gte(1e10)) game.normal.speed=ExpantaNum(game.normal.speed).times(ExpantaNum(game.normal.number).log10().times(0.1));
	game.normal.speed=ExpantaNum(game.normal.speed).times(game.normal.sacrifice);
	//if(game.normal.upgrades[8]&&document.getElementById("autobuygenerator").checked==true) autobuynormalgenerator();
	game.normal.generators.factor=[1,1,1,1,1,1,1,1];
	if(game.normal.upgrades[0]) game.normal.generators.factor[0]=3;
	if(game.normal.upgrades[3]) game.normal.generators.factor[4]=5;
	if(game.normal.upgrades[6]) game.normal.generators.factor[7]=10;
	game.normal.multiplier=2;
	document.getElementById("sacrifice_factor").innerHTML=ExpantaNum(game.normal.sacrifice);
	document.getElementById("boost_factor").innerHTML=ExpantaNum(game.normal.boost);
	if(document.getElementById("sacrifice_effect")) document.getElementById("sacrifice_effect").innerHTML=ExpantaNum.pow(ExpantaNum(game.normal.number).add(1).log10().div(3).add(1),game.normal.boost);
	if(document.getElementById("boost_effect")) document.getElementById("boost_effect").innerHTML=ExpantaNum(game.normal.number).add(1).log10().times(0.022).add(1);
	if(ExpantaNum(game.normal.number).gte(ExpantaNum(game.infinity.requirement))){
		document.getElementById("infinityY").style.display='block';
		document.getElementById("infinityN").style.display='none';
		document.getElementById("infinity number get").innerHTML=ExpantaNum.pow(game.normal.number,1/256).times(0.5).round();
	}
	else{
		document.getElementById("infinityY").style.display='none';
		document.getElementById("infinityN").style.display='block';
		document.getElementById("infinity requirement").innerHTML=ExpantaNum(game.infinity.requirement);
	}
	if(game.infinity.hasinfinitied==true){
		document.getElementById("infinity number").innerHTML="你有"+ExpantaNum(game.infinity.number)+"无限点数。";
		var d=new Date();
		game.infinity.timespent=ExpantaNum(d.getTime()-game.infinity.starttime).div(1000);
		document.getElementById("infinity time").innerHTML="上次无限到现在过了"+ExpantaNum(game.infinity.timespent)+"秒。";
	} 
	game.normal.number=ExpantaNum(game.normal.number).add(ExpantaNum(game.normal.generators.amount[0]).times(ExpantaNum.pow(game.normal.multiplier,game.normal.generators.bought[0])).times(game.normal.generators.factor[0]).times(game.normal.speed).times(game.delay).times(0.001).times(gameSpeed));
	for(var i=0;i<7;i++){
		game.normal.generators.amount[i]=ExpantaNum(game.normal.generators.amount[i]).add(ExpantaNum(game.normal.generators.amount[i+1]).times(ExpantaNum.pow(game.normal.multiplier,game.normal.generators.bought[i+1])).times(game.normal.generators.factor[i+1]).times(game.normal.speed).times(game.delay).times(0.001).times(gameSpeed))
	}
	if(document.getElementById("normal number")) document.getElementById("normal number").innerHTML=ExpantaNum.floor(game.normal.number);
	for(var i=1;i<=8;i++){
	if(document.getElementById("normalgenerator"+i)) document.getElementById("normalgenerator"+i).innerHTML=ExpantaNum.floor(game.normal.generators.amount[i-1]);
	if(document.getElementById("normalgeneratormultiplyer"+i)) document.getElementById("normalgeneratormultiplyer"+i).innerHTML=ExpantaNum.pow(game.normal.multiplier,game.normal.generators.bought[i-1]).times(game.normal.generators.factor[i-1]).times(game.normal.speed).floor();
	game.normal.generators.actuallprice[i-1]=ExpantaNum(game.normal.generators.price[i-1]).times(ExpantaNum.pow(game.normal.generators.scale[i-1],game.normal.generators.bought[i-1]));
	if(document.getElementById("buyNG"+i)) document.getElementById("buyNG"+i).value="Cost:"+ExpantaNum(game.normal.generators.actuallprice[i-1]);
	}

}
/*
function loop() {
	
  requestAnimationFrame(loop);
}

requestAnimationFrame(loop);
*/
mainInterval = setInterval(tick,game.delay);
document.getElementById("manual").onclick = () =>{
game.normal.number=ExpantaNum(game.normal.number).add(1);
document.getElementById("normal number").innerHTML=ExpantaNum.floor(game.normal.number);
getAchievement(1);
}
document.getElementById("cheat").onclick = () =>{
game.normal.number=ExpantaNum(game.normal.number).add(10);
	if(gameSpeed==1){
		gameSpeed=1000;
	}
	else{
		gameSpeed=1;
	}
}

var logdelay;
document.getElementById("delay").addEventListener("input",function(){
	logdelay=this.value;
	game.delay=Math.pow(10,logdelay);
	document.getElementById("delaytext").innerHTML=game.delay;
});

function changedelay(){
	clearInterval(mainInterval);
	mainInterval = setInterval(tick,game.delay);
}
