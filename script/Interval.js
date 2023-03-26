
var gameSpeed = 1;



function tick()
{

	game.normal.speed = 1;
	if(game.normal.upgrades[1]) game.normal.speed=ExpantaNum(game.normal.speed).times(1.3);
	if(game.normal.upgrades[4]) game.normal.speed=ExpantaNum(game.normal.speed).times(2);
	if(game.normal.upgrades[7]) game.normal.speed=ExpantaNum(game.normal.speed).times(4);
	if(game.normal.upgrades[5]) game.normal.speed=ExpantaNum(game.normal.speed).times(ExpantaNum(game.normal.number).log10().times(0.1));
	if(game.normal.upgrades[8]) maxAllNormalGenerator();
	game.normal.generators.factor=[1,1,1,1,1,1,1,1];
	if(game.normal.upgrades[0]) game.normal.generators.factor[0]=3;
	if(game.normal.upgrades[3]) game.normal.generators.factor[4]=5;
	if(game.normal.upgrades[6]) game.normal.generators.factor[7]=10;
	game.normal.number=ExpantaNum(game.normal.number).add(ExpantaNum(game.normal.generators.amount[0]).times(ExpantaNum.pow(game.normal.multiplier,game.normal.generators.bought[0])).times(game.normal.generators.factor[0]).times(game.normal.speed).times(game.delay).times(0.001).times(gameSpeed));
	for(var i=0;i<7;i++){
		game.normal.generators.amount[i]=ExpantaNum(game.normal.generators.amount[i]).add(ExpantaNum(game.normal.generators.amount[i+1]).times(ExpantaNum.pow(game.normal.multiplier,game.normal.generators.bought[i+1])).times(game.normal.generators.factor[i+1]).times(game.normal.speed).times(game.delay).times(0.001).times(gameSpeed))
	}
	if(document.getElementById("normal number")) document.getElementById("normal number").innerHTML=ExpantaNum.floor(game.normal.number);
	for(var i=1;i<=8;i++){
	if(document.getElementById("normalgenerator"+i)) document.getElementById("normalgenerator"+i).innerHTML=ExpantaNum.floor(game.normal.generators.amount[i-1]);
	if(document.getElementById("normalgeneratormultiplyer"+i)) document.getElementById("normalgeneratormultiplyer"+i).innerHTML=ExpantaNum.pow(game.normal.multiplier,game.normal.generators.bought[i-1]).times(game.normal.generators.factor[i-1]).times(game.normal.speed).floor();
	}

}
mainInterval = setInterval(tick,game.delay);
document.getElementById("manual").onclick = () =>{
game.normal.number=ExpantaNum(game.normal.number).add(1);
document.getElementById("normal number").innerHTML=ExpantaNum.floor(game.normal.number);
if(game.ach[0]==0){game.ach[0]=1;document.getElementById("ach1").className="achYES";}
}
document.getElementById("cheat").onclick = () =>{
game.normal.number=ExpantaNum(game.normal.number).add(10);
gameSpeed=1000;
}
var canBuyNG=0;
function maxAllNormalGenerator(){
	canBuyNG=0;
	do{
	canBuyNG=0;
	for(i=1;i<9;i++){
	buynormalgenerator(i);
	}
	}
	while(canBuyNG==1)
}
