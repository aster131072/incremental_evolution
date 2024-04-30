function ts_buyable(i){
	if(i==1){
		if(ExpantaNum(game.eternity.timespace.time).gte(game.eternity.timespace.actuallprice[0])){
			game.eternity.timespace.time=ExpantaNum(game.eternity.timespace.time).minus(ExpantaNum(game.eternity.timespace.actuallprice[0]));
			game.eternity.timespace.buyables[0]=ExpantaNum(game.eternity.timespace.buyables[0]).add(1);
		}
	}
	if(i==2){
		if(ExpantaNum(game.eternity.timespace.space).gte(game.eternity.timespace.actuallprice[1])){
			game.eternity.timespace.space=ExpantaNum(game.eternity.timespace.space).minus(ExpantaNum(game.eternity.timespace.actuallprice[1]));
			game.eternity.timespace.buyables[1]=ExpantaNum(game.eternity.timespace.buyables[1]).add(1);
		}
	}
	if(i==3){
		if(ExpantaNum(game.eternity.timespace.timespace).gte(game.eternity.timespace.actuallprice[2])){
			game.eternity.timespace.timespace=ExpantaNum(game.eternity.timespace.timespace).minus(ExpantaNum(game.eternity.timespace.actuallprice[2]));
			game.eternity.timespace.buyables[2]=ExpantaNum(game.eternity.timespace.buyables[2]).add(1);
		}
	}
	if(i==4){
		if(ExpantaNum(game.eternity.timespace.timespace).gte(game.eternity.timespace.actuallprice[3])){
			game.eternity.timespace.timespace=ExpantaNum(game.eternity.timespace.timespace).minus(ExpantaNum(game.eternity.timespace.actuallprice[3]));
			game.eternity.timespace.buyables[3]=ExpantaNum(game.eternity.timespace.buyables[3]).add(1);
			game.eternity.timespace.universe=ExpantaNum(game.eternity.timespace.universe).add(1);
		}
	}
}
function ts_buyable_max(i){
	if(i==1){
		if(ExpantaNum(game.eternity.timespace.time).gte(game.eternity.timespace.actuallprice[0])){
			let buyamount=0;
			if(ExpantaNum(game.eternity.timespace.buyables[0]).lte(3000)){
				buyamount=ExpantaNum(game.eternity.timespace.time).add(1).div(game.eternity.timespace.actuallprice[0]).log10().div(ExpantaNum(game.eternity.timespace.scale[0]).log10()).ceil();
				game.eternity.timespace.time=ExpantaNum(game.eternity.timespace.time).minus(ExpantaNum(game.eternity.timespace.actuallprice[0]).times(ExpantaNum.pow(game.eternity.timespace.scale[0],ExpantaNum(buyamount).minus(1))));
			}
			if(ExpantaNum(buyamount).add(game.eternity.timespace.buyables[0]).gt(3000)){
				buyamount=ExpantaNum.pow(ExpantaNum(game.eternity.timespace.time).add(1).log10().div(ExpantaNum(game.eternity.timespace.scale[0]).log10()).times(3000),0.5).minus(game.eternity.timespace.buyables[0]).ceil();
			}
			game.eternity.timespace.buyables[0]=ExpantaNum(game.eternity.timespace.buyables[0]).add(buyamount);
		}
	}
	if(i==2){
		if(ExpantaNum(game.eternity.timespace.space).gte(game.eternity.timespace.actuallprice[1])){
			let buyamount=0;
			if(ExpantaNum(game.eternity.timespace.buyables[1]).lte(3000)){
				buyamount=ExpantaNum(game.eternity.timespace.space).add(1).div(game.eternity.timespace.actuallprice[1]).log10().div(ExpantaNum(game.eternity.timespace.scale[1]).log10()).ceil();
				game.eternity.timespace.space=ExpantaNum(game.eternity.timespace.space).minus(ExpantaNum(game.eternity.timespace.actuallprice[1]).times(ExpantaNum.pow(game.eternity.timespace.scale[1],ExpantaNum(buyamount).minus(1))));
			}
			if(ExpantaNum(buyamount).add(game.eternity.timespace.buyables[1]).gt(3000)){
				buyamount=ExpantaNum.pow(ExpantaNum(game.eternity.timespace.space).add(1).log10().div(ExpantaNum(game.eternity.timespace.scale[1]).log10()).times(3000),0.5).minus(game.eternity.timespace.buyables[1]).ceil();
			}
			game.eternity.timespace.buyables[1]=ExpantaNum(game.eternity.timespace.buyables[1]).add(buyamount);
		}
	}
	if(i==3){
		if(ExpantaNum(game.eternity.timespace.timespace).gte(game.eternity.timespace.actuallprice[2])){
			let buyamount=0;
			if(ExpantaNum(game.eternity.timespace.buyables[2]).lte(3000)){
				buyamount=ExpantaNum(game.eternity.timespace.timespace).add(1).div(game.eternity.timespace.actuallprice[2]).log10().div(ExpantaNum(game.eternity.timespace.scale[2]).log10()).ceil();
				game.eternity.timespace.timespace=ExpantaNum(game.eternity.timespace.timespace).minus(ExpantaNum(game.eternity.timespace.actuallprice[2]).times(ExpantaNum.pow(game.eternity.timespace.scale[2],ExpantaNum(buyamount).minus(1))));
			}
			if(ExpantaNum(buyamount).add(game.eternity.timespace.buyables[2]).gt(3000)){
				buyamount=ExpantaNum.pow(ExpantaNum(game.eternity.timespace.timespace).add(1).log10().div(ExpantaNum(game.eternity.timespace.scale[2]).log10()).times(3000),0.5).minus(game.eternity.timespace.buyables[2]).ceil();
			}
			game.eternity.timespace.buyables[2]=ExpantaNum(game.eternity.timespace.buyables[2]).add(buyamount);
		}
	}
	if(i==4){
		if(ExpantaNum(game.eternity.timespace.timespace).gte(game.eternity.timespace.actuallprice[3])){
			let buyamount=0;
			if(ExpantaNum(game.eternity.timespace.buyables[3]).lte(3000)){
				buyamount=ExpantaNum(game.eternity.timespace.timespace).add(1).div(game.eternity.timespace.actuallprice[3]).log10().div(ExpantaNum(game.eternity.timespace.scale[3]).log10()).ceil();
				game.eternity.timespace.timespace=ExpantaNum(game.eternity.timespace.timespace).minus(ExpantaNum(game.eternity.timespace.actuallprice[3]).times(ExpantaNum.pow(game.eternity.timespace.scale[3],ExpantaNum(buyamount).minus(1))));
			}
			if(ExpantaNum(buyamount).add(game.eternity.timespace.buyables[3]).gt(3000)){
				buyamount=ExpantaNum.pow(ExpantaNum(game.eternity.timespace.timespace).add(1).log10().div(ExpantaNum(game.eternity.timespace.scale[3]).log10()).times(3000),0.5).minus(game.eternity.timespace.buyables[3]).ceil();
			}
			game.eternity.timespace.buyables[3]=ExpantaNum(game.eternity.timespace.buyables[3]).add(buyamount);
			game.eternity.timespace.universe=ExpantaNum(game.eternity.timespace.universe).add(buyamount);
			if(ExpantaNum(game.eternity.timespace.buyables[3]).gte(15)) getAchievement(34);
		}
	}
}
function ts_max(){
	for(i=1;i<=3;i++){
		ts_buyable_max(i);
	}
	if(game.eternity.upgrades[9]==1) ts_buyable_max(4);
}
function ts_time_upgrade1(){
	if(ExpantaNum(game.eternity.timespace.time).gte(1000)&&game.eternity.timespace.upgrades[0]==0){
		game.eternity.timespace.time=ExpantaNum(game.eternity.timespace.time).minus(1000);
		document.getElementById("tstu1").style.backgroundColor="#00ff00";
		game.eternity.timespace.upgrades[0]=1;
	}
}
function ts_time_upgrade2(){
	if(ExpantaNum(game.eternity.timespace.time).gte(1e5)&&game.eternity.timespace.upgrades[1]==0){
		game.eternity.timespace.time=ExpantaNum(game.eternity.timespace.time).minus(1e5);
		document.getElementById("tstu2").style.backgroundColor="#00ff00";
		game.eternity.timespace.upgrades[1]=1;
	}
}
function ts_time_upgrade3(){
	if(ExpantaNum(game.eternity.timespace.time).gte(1e10)&&game.eternity.timespace.upgrades[2]==0){
		game.eternity.timespace.time=ExpantaNum(game.eternity.timespace.time).minus(1e10);
		document.getElementById("tstu3").style.backgroundColor="#00ff00";
		game.eternity.timespace.upgrades[2]=1;
	}
}
function ts_space_upgrade1(){
	if(ExpantaNum(game.eternity.timespace.space).gte(3)&&game.eternity.timespace.upgrades[3]==0){
		game.eternity.timespace.space=ExpantaNum(game.eternity.timespace.space).minus(3);
		document.getElementById("tssu1").style.backgroundColor="#00ff00";
		game.eternity.timespace.upgrades[3]=1;
	}
}
function ts_space_upgrade2(){
	if(ExpantaNum(game.eternity.timespace.space).gte(3e5)&&game.eternity.timespace.upgrades[4]==0){
		game.eternity.timespace.space=ExpantaNum(game.eternity.timespace.space).minus(3e5);
		document.getElementById("tssu2").style.backgroundColor="#00ff00";
		game.eternity.timespace.upgrades[4]=1;
	}
}
function ts_space_upgrade3(){
	if(ExpantaNum(game.eternity.timespace.space).gte(1e12)&&game.eternity.timespace.upgrades[5]==0){
		game.eternity.timespace.space=ExpantaNum(game.eternity.timespace.space).minus(1e12);
		document.getElementById("tssu3").style.backgroundColor="#00ff00";
		game.eternity.timespace.upgrades[5]=1;
	}
}
function ts_timespace_upgrade1(){
	if(ExpantaNum(game.eternity.timespace.timespace).gte(1e75)&&game.eternity.timespace.upgrades[6]==0){
		game.eternity.timespace.timespace=ExpantaNum(game.eternity.timespace.timespace).minus(1e75);
		document.getElementById("tstsu1").style.backgroundColor="#00ff00";
		game.eternity.timespace.upgrades[6]=1;
	}
}
function ts_timespace_upgrade2(){
	if(ExpantaNum(game.eternity.timespace.timespace).gte(1e125)&&game.eternity.timespace.upgrades[7]==0){
		game.eternity.timespace.timespace=ExpantaNum(game.eternity.timespace.timespace).minus(1e125);
		document.getElementById("tstsu2").style.backgroundColor="#00ff00";
		game.eternity.timespace.upgrades[7]=1;
	}
}
function ts_timespace_upgrade3(){
	if(ExpantaNum(game.eternity.timespace.timespace).gte(1e160)&&game.eternity.timespace.upgrades[8]==0){
		game.eternity.timespace.timespace=ExpantaNum(game.eternity.timespace.timespace).minus(1e160);
		document.getElementById("tstsu3").style.backgroundColor="#00ff00";
		game.eternity.timespace.upgrades[8]=1;
	}
}
function ts_uni_upgrade1(){
	if(ExpantaNum(game.eternity.timespace.universe).gte(1)&&game.eternity.timespace.upgrades[9]==0){
		game.eternity.timespace.universe=ExpantaNum(game.eternity.timespace.universe).minus(1);
		document.getElementById("tsuu1").style.backgroundColor="#00ff00";
		game.eternity.timespace.upgrades[9]=1;
	}
}
function ts_uni_upgrade2(){
	if(ExpantaNum(game.eternity.timespace.universe).gte(1)&&game.eternity.timespace.upgrades[10]==0){
		game.eternity.timespace.universe=ExpantaNum(game.eternity.timespace.universe).minus(1);
		document.getElementById("tsuu2").style.backgroundColor="#00ff00";
		game.eternity.timespace.upgrades[10]=1;
	}
}
function ts_uni_upgrade3(){
	if(ExpantaNum(game.eternity.timespace.universe).gte(1)&&game.eternity.timespace.upgrades[11]<12){
		game.eternity.timespace.universe=ExpantaNum(game.eternity.timespace.universe).minus(1);
		game.eternity.timespace.upgrades[11]+=1;
		document.getElementById("tsuu3").style.backgroundColor="rgb(" + (12-game.eternity.timespace.upgrades[11])*255/12 + "," +game.eternity.timespace.upgrades[11]*255/12 + ",0)";
	}
}