function buyeternitygenerator(i){

	if(ExpantaNum(game.eternity.number).gte(game.eternity.generators.actuallprice[i-1])){
		game.eternity.number=ExpantaNum(game.eternity.number).minus(ExpantaNum(game.eternity.generators.actuallprice[i-1]));
		game.eternity.generators.amount[i-1]=ExpantaNum(game.eternity.generators.amount[i-1]).add(1);
		game.eternity.generators.bought[i-1]=ExpantaNum(game.eternity.generators.bought[i-1]).add(1);
		//document.getElementById("buyNG"+i).value="Cost:"+ExpantaNum(game.eternity.generators.actuallprice[i-1]);
		//canBuyNG=1;
		getAchievement(26);
	}

}

function buymaxeternitygenerator(i){
	
	if(ExpantaNum(game.eternity.number).gte(game.eternity.generators.actuallprice[i-1])){
		let buyamount=0;
		if(ExpantaNum(game.eternity.generators.bought[i-1]).lte(3000)){
			buyamount=ExpantaNum(game.eternity.number).add(1).div(game.eternity.generators.actuallprice[i-1]).log10().div(ExpantaNum(game.eternity.generators.scale[i-1]).log10()).ceil();
			game.eternity.number=ExpantaNum(game.eternity.number).minus(ExpantaNum(game.eternity.generators.actuallprice[i-1]).times(ExpantaNum.pow(game.eternity.generators.scale[i-1],ExpantaNum(buyamount).minus(1))));
		}
		if(ExpantaNum(buyamount).add(game.eternity.generators.bought[i-1]).gt(3000)){
			buyamount=ExpantaNum.pow(ExpantaNum(game.eternity.number).add(1).log10().div(ExpantaNum(game.eternity.generators.scale[i-1]).log10()).times(3000),0.5).minus(game.eternity.generators.bought[i-1]).ceil();
		}
		game.eternity.generators.amount[i-1]=ExpantaNum(game.eternity.generators.amount[i-1]).add(buyamount);
		game.eternity.generators.bought[i-1]=ExpantaNum(game.eternity.generators.bought[i-1]).add(buyamount);
		//document.getElementById("buyNG"+i).value="Cost:"+ExpantaNum(game.eternity.generators.actuallprice[i-1]);
		//console.log(ExpantaNum(buyamount));
	}

}

function maxAlleternityGenerator(){
	for(i=1;i<=8;i++){
	buymaxeternitygenerator(i);
	}
}