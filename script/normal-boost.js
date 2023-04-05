function boost(){
	var get_boost = ExpantaNum(game.normal.number).add(1).log10().times(0.022).add(1);
	if(ExpantaNum(get_boost).gt(game.normal.boost)){
		var boost_confirmation = confirm("你真的要加速吗？这会重置你的点数和生成器，以及献祭效果！");
		if(boost_confirmation==true){
			game.normal.boost=get_boost;
			document.getElementById("boost_factor").innerHTML=ExpantaNum(game.normal.boost);
			game.normal.sacrifice=1;
			game.normal.generators.amount=[0,0,0,0,0,0,0,0];
			game.normal.generators.bought=[0,0,0,0,0,0,0,0];
			game.normal.number=ExpantaNum(0);
		}
		boost_confirmation=false;
		getAchievement(10);
	}

}