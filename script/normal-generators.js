function buynormalgenerator(i){
	canBuyNG=0;
	
	if(ExpantaNum(game.normal.number).gte(game.normal.generators.actuallprice[i-1])){
		game.normal.number=ExpantaNum(game.normal.number).minus(ExpantaNum(game.normal.generators.actuallprice[i-1]));
		game.normal.generators.amount[i-1]=ExpantaNum(game.normal.generators.amount[i-1]).add(1);
		game.normal.generators.bought[i-1]=ExpantaNum(game.normal.generators.bought[i-1]).add(1);
		game.normal.generators.actuallprice[i-1]=ExpantaNum(game.normal.generators.actuallprice[i-1]).times(game.normal.generators.scale[i-1]);
		if(game.normal.inchallenge[1]==1) game.normal.generators.actuallprice[i-1]=ExpantaNum(game.normal.generators.actuallprice[i-1]).times(game.normal.generators.scale[i-1]);
		//document.getElementById("buyNG"+i).value="Cost:"+ExpantaNum(game.normal.generators.actuallprice[i-1]);
		canBuyNG=1;
		if(i==8&&ExpantaNum(game.normal.generators.bought[7]).gte(1000)) getAchievement(18);
		if(game.normal.inchallenge[5]==1) game.normal.challenge.nc6_counter+=1;
		if(game.normal.challenge.nc6_counter>=66) {
			nc(6);
			game.normal.challenge.nc6_counter = 0;
		}
		if(game.normal.inchallenge[7]==1){
			if(i>1){
				for(let m=0;m<i-1;m++){
					game.normal.generators.amount[m]=0;
				}
			}
			game.normal.number=0;
		}
	}
	if(canBuyNG==1){
		if(i==1) getAchievement(2);
		if(i==2) getAchievement(3);
		if(i==8) getAchievement(7);

	}
	
}

function buymaxnormalgenerator(i){
	if(ExpantaNum(game.normal.number).gte(game.normal.generators.actuallprice[i-1])){
		let buyamount=0;
		if(game.normal.inchallenge[1]==1) {
			buyamount=ExpantaNum(game.normal.number).add(1).div(game.normal.generators.actuallprice[i-1]).log10().div(ExpantaNum(game.normal.generators.scale[i-1]).log10().times(2)).ceil();
			game.normal.number=ExpantaNum(game.normal.number).minus(ExpantaNum(game.normal.generators.actuallprice[i-1]).times(ExpantaNum.pow(game.normal.generators.scale[i-1],ExpantaNum(buyamount).minus(1).times(2))));
		} else {
			buyamount=ExpantaNum(game.normal.number).add(1).div(game.normal.generators.actuallprice[i-1]).log10().div(ExpantaNum(game.normal.generators.scale[i-1]).log10()).ceil();
			game.normal.number=ExpantaNum(game.normal.number).minus(ExpantaNum(game.normal.generators.actuallprice[i-1]).times(ExpantaNum.pow(game.normal.generators.scale[i-1],ExpantaNum(buyamount).minus(1))));
		}
		//console.log(buyamount);
		
		game.normal.generators.amount[i-1]=ExpantaNum(game.normal.generators.amount[i-1]).add(buyamount);
		game.normal.generators.bought[i-1]=ExpantaNum(game.normal.generators.bought[i-1]).add(buyamount);
		//document.getElementById("buyNG"+i).value="Cost:"+ExpantaNum(game.normal.generators.actuallprice[i-1]);
		//console.log(ExpantaNum(buyamount));
		if(game.normal.inchallenge[5]==1) game.normal.challenge.nc6_counter+=buyamount;
		if(game.normal.challenge.nc6_counter>=66) {
			nc(6);
			game.normal.challenge.nc6_counter = 0;
		}
		if(game.normal.inchallenge[7]==1){
			if(i>1){
				for(let m=0;m<i-1;m++){
					game.normal.generators.amount[m]=0;
				}
			}
			game.normal.number=0;
		}
	}

}

function maxAllNormalGenerator(){
	for(let i=1;i<=8;i++){
	buymaxnormalgenerator(i);
	}
}