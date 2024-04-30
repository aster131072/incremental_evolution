function boost(){
	if(game.normal.inchallenge[9]==0){
		if(ExpantaNum(get_boost).gt(game.normal.boost)){
			let boost_confirmation = true;
			if(game.confirmconfig.boost){
				boost_confirmation = confirm("你真的要加速吗？这会重置你的点数和生成器，以及献祭效果！");
			}
			if(boost_confirmation==true){
				game.normal.boost=get_boost;
				document.getElementById("boost_factor").innerHTML=ExpantaNum(game.normal.boost);
				if(game.eternity.milestones[7]==0) {
					game.normal.sacrifice=1;
					get_sacrifice=1;
					game.normal.generators.amount=[0,0,0,0,0,0,0,0];
					game.normal.generators.bought=[0,0,0,0,0,0,0,0];
					game.normal.number=0;
					if(game.infinity.upgrades[3]) game.normal.number=10;
				}

				getAchievement(10);
				if(ExpantaNum(game.normal.boost).gte(4000)) getAchievement(24);
			}
			boost_confirmation=false;
		}
	}
}