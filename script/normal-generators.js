function buynormalgenerator(i){
	canBuyNG=0;
	if(ExpantaNum(game.normal.number).gte(ExpantaNum(game.normal.generators.price[i-1]))){
		game.normal.number=ExpantaNum(game.normal.number).minus(ExpantaNum(game.normal.generators.price[i-1]));
		game.normal.generators.price[i-1]=ExpantaNum(game.normal.generators.price[i-1]).times(game.normal.generators.scale[i-1]);
		game.normal.generators.amount[i-1]=ExpantaNum(game.normal.generators.amount[i-1]).add(1);
		game.normal.generators.bought[i-1]=ExpantaNum(game.normal.generators.bought[i-1]).add(1);
		document.getElementById("buyNG"+i).value="Cost:"+ExpantaNum(game.normal.generators.price[i-1]);
		canBuyNG=1;
	}
	if(canBuyNG==1){
		if(i==1&&game.ach[1]==0){game.ach[1]=1;document.getElementById("ach2").className="achYES";}
		if(i==2&&game.ach[2]==0){game.ach[2]=1;document.getElementById("ach3").className="achYES";}
		if(i==8&&game.ach[6]==0){game.ach[6]=1;document.getElementById("ach7").className="achYES";}

	}
	
}
