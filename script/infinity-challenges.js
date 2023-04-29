let challenge_goal=[ExpantaNum.pow(10,3850),ExpantaNum.pow(10,4000),ExpantaNum.pow(10,1500),
										ExpantaNum.pow(10,5800),ExpantaNum.pow(10,6000),ExpantaNum.pow(10,150),
										ExpantaNum.pow(10,2600),ExpantaNum.pow(10,3000)];
function ic(i){
	if(game.infinity.inchallenge[i-1]==0){
		game.infinity.inchallenge[i-1] = 1;
		document.getElementById("ic"+i+"b").value="退出挑战";
		infinity();
		if(i==2) game.infinity.challenge.ic2_anti = 1;
		if(i==5) game.infinity.challenge.ic5_times = 0;
		if(i==8) normal_bought = 0;
	}else{
		if(ExpantaNum(game.normal.number).gte(challenge_goal[i-1])&&game.infinity.challenged[i-1]==0){
			document.getElementById("ic"+i).style.backgroundColor="#00ff00";
			game.infinity.challenged[i-1]=1;
			if(i==1) getAchievement(17);
			if(i==8) getAchievement(19);
		}
		infinity();
		if(i==2) document.getElementById("ic2_anti").innerHTML="";
		document.getElementById("ic"+i+"b").value="开始挑战";
		game.infinity.inchallenge[i-1] = 0;
	}

	if(game.infinity.challenged.indexOf(0) === -1) document.getElementById("ordinal_tab").style.display='inline';
}