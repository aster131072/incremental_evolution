

function nc(i){
	if(game.normal.inchallenge[i-1]==0){
		game.normal.inchallenge[i-1] = 1;
		document.getElementById("nc"+i+"b").value="退出挑战";
		infinity();
	}else{
		if(ExpantaNum(game.normal.number).gte(ExpantaNum(game.infinity.requirement))&&game.normal.challenged[i-1]==0){
			document.getElementById("nc"+i).style.backgroundColor="#00ff00";
			game.normal.challenged[i-1]=1;
			if(i==9) document.getElementById("auto_sacrifice").style.display='table-cell';
			if(i==10) document.getElementById("auto_boost").style.display='table-cell';
			if(i==11) document.getElementById("auto_infinity").style.display='table-cell';
			getAchievement(13);
		}
		infinity();
		document.getElementById("nc"+i+"b").value="开始挑战";
		game.normal.inchallenge[i-1] = 0;
	}
	if(i==6) game.normal.challenge.nc6_counter = 0;
	if(i==11) game.infinity.requirement=ExpantaNum.pow(2,256);
	if(i==7||i==12) {
		let d=new Date();
		game.normal.challenge.nc_timer = d.getTime();
	} 
	if(game.normal.challenged.indexOf(0) === -1) document.getElementById("infinity_challenge_tab").style.display='inline';
}

