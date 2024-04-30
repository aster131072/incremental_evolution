function buyeternityproducer(i){
	if(i<=3){
		if(ExpantaNum(game.eternity.number).gte(game.eternity.producers.actuallprice[i-1])){
			game.eternity.number=ExpantaNum(game.eternity.number).minus(ExpantaNum(game.eternity.producers.actuallprice[i-1]));
			game.eternity.producers.amount[i-1]=ExpantaNum(game.eternity.producers.amount[i-1]).add(1);
			game.eternity.producers.bought[i-1]=ExpantaNum(game.eternity.producers.bought[i-1]).add(1);
		}
	}else{
		if(ExpantaNum(game.eternity.eternities).gte(game.eternity.producers.actuallprice[i-1])){
			game.eternity.eternities=ExpantaNum(game.eternity.eternities).minus(ExpantaNum(game.eternity.producers.actuallprice[i-1]));
			game.eternity.producers.amount[i-1]=ExpantaNum(game.eternity.producers.amount[i-1]).add(1);
			game.eternity.producers.bought[i-1]=ExpantaNum(game.eternity.producers.bought[i-1]).add(1);
		}
	}


}

function buymaxeternityproducer(i){
	if(i<=3){
		if(ExpantaNum(game.eternity.number).gte(game.eternity.producers.actuallprice[i-1])){
			let buyamount=ExpantaNum(game.eternity.number).add(1).div(game.eternity.producers.actuallprice[i-1]).log10().div(ExpantaNum(game.eternity.producers.scale[i-1]).log10()).ceil();
			game.eternity.number=ExpantaNum(game.eternity.number).minus(ExpantaNum(game.eternity.producers.actuallprice[i-1]).times(ExpantaNum.pow(game.eternity.producers.scale[i-1],ExpantaNum(buyamount).minus(1))));
			game.eternity.producers.amount[i-1]=ExpantaNum(game.eternity.producers.amount[i-1]).add(buyamount);
			game.eternity.producers.bought[i-1]=ExpantaNum(game.eternity.producers.bought[i-1]).add(buyamount);
		}
	}else{
		if(ExpantaNum(game.eternity.eternities).gte(game.eternity.producers.actuallprice[i-1])){
			let buyamount=ExpantaNum(game.eternity.eternities).add(1).div(game.eternity.producers.actuallprice[i-1]).log10().div(ExpantaNum(game.eternity.producers.scale[i-1]).log10()).ceil();
			game.eternity.eternities=ExpantaNum(game.eternity.eternities).minus(ExpantaNum(game.eternity.producers.actuallprice[i-1]).times(ExpantaNum.pow(game.eternity.producers.scale[i-1],ExpantaNum(buyamount).minus(1))));
			game.eternity.producers.amount[i-1]=ExpantaNum(game.eternity.producers.amount[i-1]).add(buyamount);
			game.eternity.producers.bought[i-1]=ExpantaNum(game.eternity.producers.bought[i-1]).add(buyamount);
		}
	}


}

function maxAlleternityproducer(){
	for(i=1;i<=3;i++){
		buymaxeternityproducer(i);
	}
	if(ecr>=4){
		for(i=4;i<=6;i++){
			buymaxeternityproducer(i);
		}
	}
}