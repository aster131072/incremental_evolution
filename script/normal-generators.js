function buynormalgenerator(i){
	canBuyNG=0;
	
	if(ExpantaNum(game.normal.number).gte(game.normal.generators.actuallprice[i-1])){
		game.normal.number=ExpantaNum(game.normal.number).minus(ExpantaNum(game.normal.generators.actuallprice[i-1]));
		game.normal.generators.amount[i-1]=ExpantaNum(game.normal.generators.amount[i-1]).add(1);
		game.normal.generators.bought[i-1]=ExpantaNum(game.normal.generators.bought[i-1]).add(1);
		//document.getElementById("buyNG"+i).value="Cost:"+ExpantaNum(game.normal.generators.actuallprice[i-1]);
		canBuyNG=1;
	}
	if(canBuyNG==1){
		if(i==1) getAchievement(2);
		if(i==2) getAchievement(3);
		if(i==8) getAchievement(7);

	}
	
}

function buymaxnormalgenerator(i){
	
	if(ExpantaNum(game.normal.number).gte(game.normal.generators.actuallprice[i-1])){
		var buyamount=ExpantaNum(game.normal.number).add(1).div(game.normal.generators.actuallprice[i-1]).log10().div(ExpantaNum(game.normal.generators.scale[i-1]).log10()).ceil();
		game.normal.number=ExpantaNum(game.normal.number).minus(ExpantaNum(game.normal.generators.actuallprice[i-1]).times(ExpantaNum.pow(game.normal.generators.scale[i-1],ExpantaNum(buyamount).minus(1))));
		game.normal.generators.amount[i-1]=ExpantaNum(game.normal.generators.amount[i-1]).add(buyamount);
		game.normal.generators.bought[i-1]=ExpantaNum(game.normal.generators.bought[i-1]).add(buyamount);
		//document.getElementById("buyNG"+i).value="Cost:"+ExpantaNum(game.normal.generators.actuallprice[i-1]);
		//console.log(ExpantaNum(buyamount));
	}

}

function maxAllNormalGenerator(){
	for(i=1;i<=8;i++){
	buymaxnormalgenerator(i);
	}
}