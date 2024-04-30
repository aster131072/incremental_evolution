function get_ord_number(){
	if(get_ordinal_number == 1.797e308) {
		game.infinity.ordinal.number = 1.797e308;
	} else{
		game.infinity.ordinal.number+=get_ordinal_number;
	}
	if(game.infinity.ordinal.number==Infinity) game.infinity.ordinal.number = 1.797e308;
	getAchievement(20);
}
function get_ord_power(){
	game.infinity.ordinal.power=get_ordinal_power;
	game.infinity.ordinal.number=0;
}
function ou1(){
	if(game.infinity.ordinal.power=="过大") {
		game.infinity.ordinal.upgrade.plus+=1;
	} else if(ExpantaNum(game.infinity.ordinal.power).gte(ou_cost[0])){
		game.infinity.ordinal.power=ExpantaNum(game.infinity.ordinal.power).minus(ou_cost[0]);
		game.infinity.ordinal.upgrade.plus+=1;
	}
}
function ou2(){
	if(game.infinity.ordinal.power=="过大") {
		game.infinity.ordinal.upgrade.multi+=1;
	} else if(ExpantaNum(game.infinity.ordinal.power).gte(ou_cost[1])){
		game.infinity.ordinal.power=ExpantaNum(game.infinity.ordinal.power).minus(ou_cost[1]);
		game.infinity.ordinal.upgrade.multi+=1;
	}
}
function ou3(){
	if(game.infinity.ordinal.power=="过大") {
		game.infinity.ordinal.upgrade.power+=1;
	} else if(ExpantaNum(game.infinity.ordinal.power).gte(ou_cost[2])){
		game.infinity.ordinal.power=ExpantaNum(game.infinity.ordinal.power).minus(ou_cost[2]);
		game.infinity.ordinal.upgrade.power+=1;
	}
}
function ou4(){
	if(ExpantaNum(game.infinity.number).gte(ou_cost[3])&&game.infinity.ordinal.base>=3){
		game.infinity.number=ExpantaNum(game.infinity.number).minus(ou_cost[3]);
		game.infinity.ordinal.base-=1;
		getAchievement(22);
	}
}
function ou5(){
	if(game.infinity.ordinal.power=="过大"){
		game.infinity.ordinal.power=0;
		game.infinity.ordinal.number=0;
		game.infinity.ordinal.upgrade.plus=1;
		game.infinity.ordinal.upgrade.multi=1;
		game.infinity.ordinal.upgrade.power=1;
		game.infinity.ordinal.essence+=1;
		getAchievement(23);
	}
}
function ord(n){
	let op = 0;
	if(n==Infinity) {
		op="过大";
	} else {
		op = parseFloat(n.toString(game.infinity.ordinal.base));
		if(op>=Math.pow(10,game.infinity.ordinal.base**game.infinity.ordinal.base)){
			op="过大";
		} else if(op>=Math.pow(10,game.infinity.ordinal.base**2)) {
			let level = Math.floor(Math.log10(op)/game.infinity.ordinal.base**2);
			if(level<=2){
				let up = Math.floor(op/Math.pow(10,game.infinity.ordinal.base**2*level));
				let down = op-up*Math.pow(10,game.infinity.ordinal.base**2*level);
				op=up*Math.pow(10,100*level)+down;	
			}else{
				op="过大";
			}
		} else if(op>=Math.pow(10,game.infinity.ordinal.base)) {
			let level = Math.floor(Math.log10(op)/game.infinity.ordinal.base);
			let up = Math.floor(op/Math.pow(10,game.infinity.ordinal.base*level));
			let down = op-up*Math.pow(10,game.infinity.ordinal.base*level);
			op=up*Math.pow(10,10*level)+down;
		}
	}
	return op;
}