function getMilestone(i){
	if(game.eternity.milestones[i-1]==0){
		game.eternity.milestones[i-1]=1;
		document.getElementById("eternity_milestone_"+i).style.backgroundColor="#00ff00";
	}
}