function sacrifice(){
	if(game.normal.inchallenge[8]==0&&game.infinity.inchallenge[2]==0){
		if(ExpantaNum(get_sacrifice).gt(game.normal.sacrifice)&&(game.normal.generators.amount[7]!=0||game.normal.inchallenge[2]==1)){
			let sacrifice_confirmation = true;
			if(game.confirmconfig.sacrifice){
				sacrifice_confirmation = confirm("你真的要献祭吗？这会重置你的点数和前7阶生成器！");
			}
			if(sacrifice_confirmation==true){
				if(game.infinity.inchallenge[4]==1) game.infinity.challenge.ic5_times+=1;
				game.normal.sacrifice=get_sacrifice;
				document.getElementById("sacrifice_factor").innerHTML=ExpantaNum(game.normal.sacrifice);
				if(game.eternity.milestones[6]==0) {
					if(game.normal.inchallenge[2]==1){
						game.normal.generators.amount[0]=0;
					}else{
						for(let i=0;i<7;i++){
							game.normal.generators.amount[i]=0;
						}
					}
					game.normal.number=ExpantaNum(0);
				}

				getAchievement(9);
				if(ExpantaNum(game.normal.sacrifice).gte(1e100)) getAchievement(15);
			}
			sacrifice_confirmation=false;
	}
	}
}