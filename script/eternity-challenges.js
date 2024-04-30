let challenge_goal_ec=[[ExpantaNum.pow(10,180),ExpantaNum.pow(10,10000),ExpantaNum.pow(10,24678),ExpantaNum.pow(10,25252)],
											 [ExpantaNum.pow(10,1770),ExpantaNum.pow(10,12000),ExpantaNum.pow(10,13075),ExpantaNum.pow(10,25120)],
											 [ExpantaNum.pow(10,240),ExpantaNum.pow(10,12345),ExpantaNum.pow(10,13500),ExpantaNum.pow(10,14200)],
											 [ExpantaNum.pow(10,2023),ExpantaNum.pow(10,8200),ExpantaNum.pow(10,8430),ExpantaNum.pow(10,8640)],
											 [ExpantaNum.pow(10,2500),ExpantaNum.pow(10,3600),ExpantaNum.pow(10,23200),ExpantaNum.pow(10,23800)],
											 [ExpantaNum.pow(10,50),ExpantaNum.pow(10,63),ExpantaNum.pow(10,1000),ExpantaNum.pow(10,1111)],
											 [ExpantaNum.pow(10,1000),ExpantaNum.pow(10,10000),ExpantaNum.pow(10,24500),ExpantaNum.pow(10,25500)],
											 [ExpantaNum.pow(10,70),ExpantaNum.pow(10,90),ExpantaNum.pow(10,95),ExpantaNum.pow(10,101)],
											];
function ec(i){
	if(game.eternity.inchallenge[i-1]==0){
		game.eternity.inchallenge[i-1] = 1;
		document.getElementById("ec"+i+"b").value="退出挑战";
		eternity();
		if(i==8){
			for(let i=1;i<=8;i++){
				ic(i);
			}
		}

	}else{
		if(game.eternity.challenged[i-1] < 4&&ExpantaNum(game.infinity.number).gte(challenge_goal_ec[i-1][game.eternity.challenged[i-1]])&&game.eternity.challenged[i-1] < 4){
			if(i==8&&game.infinity.inchallenge.indexOf(0)!=-1){
				alert("未处于全部无限挑战，挑战失败！");
			}else{
				game.eternity.challenged[i-1]+=1;
				document.getElementById("ec"+i).style.backgroundColor="rgb(" + (4-game.eternity.challenged[i-1])*255/4 + "," + game.eternity.challenged[i-1]*255/4 + ",0)";
			}

		}
		eternity();
		document.getElementById("ec"+i+"b").value="开始挑战";
		game.eternity.inchallenge[i-1] = 0;
	}
}