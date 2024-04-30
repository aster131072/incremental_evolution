function buyinfinitygenerator(i){

	if(ExpantaNum(game.infinity.number).gte(game.infinity.generators.actuallprice[i-1])){
		if(game.eternity.upgrades[3]==0) game.infinity.number=ExpantaNum(game.infinity.number).minus(ExpantaNum(game.infinity.generators.actuallprice[i-1]));
		game.infinity.generators.amount[i-1]=ExpantaNum(game.infinity.generators.amount[i-1]).add(1);
		game.infinity.generators.bought[i-1]=ExpantaNum(game.infinity.generators.bought[i-1]).add(1);
		//document.getElementById("buyNG"+i).value="Cost:"+ExpantaNum(game.infinity.generators.actuallprice[i-1]);
		//canBuyNG=1;
		getAchievement(14);
	}

}

function buymaxinfinitygenerator(i){
	
	if(ExpantaNum(game.infinity.number).gte(game.infinity.generators.actuallprice[i-1])){
		let buyamount=0;
		if(ExpantaNum(game.infinity.generators.bought[i-1]).lte(3000)){
			buyamount=ExpantaNum(game.infinity.number).add(1).div(game.infinity.generators.actuallprice[i-1]).log10().div(ExpantaNum(game.infinity.generators.scale[i-1]).log10()).ceil();
			if(game.eternity.upgrades[3]==0) game.infinity.number=ExpantaNum(game.infinity.number).minus(ExpantaNum(game.infinity.generators.actuallprice[i-1]).times(ExpantaNum.pow(game.infinity.generators.scale[i-1],ExpantaNum(buyamount).minus(1))));
		}
		if(ExpantaNum(buyamount).add(game.infinity.generators.bought[i-1]).gt(3000)){
			buyamount=ExpantaNum.pow(ExpantaNum(game.infinity.number).add(1).log10().div(ExpantaNum(game.infinity.generators.scale[i-1]).log10()).times(3000),0.5).minus(game.infinity.generators.bought[i-1]).ceil();
		}
		
		
		game.infinity.generators.amount[i-1]=ExpantaNum(game.infinity.generators.amount[i-1]).add(buyamount);
		game.infinity.generators.bought[i-1]=ExpantaNum(game.infinity.generators.bought[i-1]).add(buyamount);
		//document.getElementById("buyNG"+i).value="Cost:"+ExpantaNum(game.infinity.generators.actuallprice[i-1]);
		//console.log(ExpantaNum(buyamount));
	}

}

function maxAllinfinityGenerator(){
	for(i=1;i<=8;i++){
	buymaxinfinitygenerator(i);
	}
}