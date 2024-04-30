
let gameSpeed = 1;

let get_sacrifice = 1;
let get_boost = 1;
let get_infinity = 0;
let infinity_power_effect = 1;
let infinity_power_effect2 = 0;
let infinity_power_exponent = 0.5;
let get_eternity = 0;
let eternity_power_effect = 1;

let normal_bought = 0;
let ou_cost = [1,1,1,1,1,1];
let get_ordinal_power = 0;
let get_ordinal_effect = 1;
let get_ordinal_number = 0;
let get_ordinal_essence_effect=1;
let get_nu6_effect = 1;
let get_nc_effect=[1,1,1,1,1,1,1,1];
let get_iu3_effect = 1;
let get_iu7_effect = 1;
let get_iu8_effect = 1;
let get_iu9_effect = 1;
let get_ic2_effect = 1;
let get_ic4_effect = 1;
let get_ic8_effect = 1;
let get_eu3_effect = 1;
let get_ec7_factor = 1;
let ecr = 0;
let ec_complete=0;
let get_ecr1_effect = 1;
let get_ecr2_effect = 1;
let get_ecr3_effect = 1;
let get_tstu1_effect = 1;
let get_tstu2_effect = 1;
let get_tstu3_effect = 1;
let get_tssu1_effect = 1;
let get_tssu2_effect = 1;
let get_tssu3_effect = 1;
let get_tstsu1_effect = 1;
let get_tstsu2_effect = 1;
let get_tstsu3_effect = 1;
let get_tsuu1_effect = 1;
let get_tsuu2_effect = 1;
let get_tsuu3_effect = 1;
let get_ep3_cap=1;

function tick()
{
	//重置点数
	get_infinity = ExpantaNum.pow(game.normal.number,1/256).times(0.5).round();
	get_eternity = ExpantaNum.pow(game.infinity.number,1/1024).times(0.5).times(get_tsuu3_effect).round();
	get_annihilation = ExpantaNum.pow(game.eternity.number,1/7500).times(0.5).round();
	//自动化
	let d=new Date();
	let nowtime=d.getTime();
	for(let i=1;i<=8;i++){
		if(game.normal.generators.autobuyer[i-1]&&game.normal.upgrades[8]==1){
			if(nowtime-game.normal.generators.timer[i-1]>=game.normal.generators.autodelay[i-1]){
				game.normal.generators.timer[i-1]=nowtime;
				if(game.normal.generators.bulkbuy[i-1]){
					buymaxnormalgenerator(i);
					//console.log(i);
				}else{
					buynormalgenerator(i);
				}
			}
		}
	}
	if(game.automator.sacrifice.checked&&game.normal.challenged[8]==1){
		if(game.automator.sacrifice.mode=="time"){
			if(nowtime-game.automator.sacrifice.timer>=game.automator.sacrifice.parameter){
				sacrifice();
				game.automator.sacrifice.timer=nowtime;
			}
		}
		if(game.automator.sacrifice.mode=="multi"){
			let multi = ExpantaNum(get_sacrifice).div(game.normal.sacrifice);
			if(ExpantaNum(multi).gte(game.automator.sacrifice.parameter)){
				sacrifice();
			}
		}
		if(game.automator.sacrifice.mode=="increment"){
			let increment = ExpantaNum(get_sacrifice).minus(game.normal.sacrifice);
			if(ExpantaNum(increment).gte(game.automator.sacrifice.parameter)){
				sacrifice();
			}
		}
	}
	if(game.automator.boost.checked&&game.normal.challenged[9]==1){
		if(game.automator.boost.mode=="time"){
			if(nowtime-game.automator.boost.timer>=game.automator.boost.parameter){
				boost();
				game.automator.boost.timer=nowtime;
			}
		}
		if(game.automator.boost.mode=="multi"){
			let multi = ExpantaNum(get_boost).div(game.normal.boost);
			if(ExpantaNum(multi).gte(game.automator.boost.parameter)){
				boost();
			}
		}
		if(game.automator.boost.mode=="increment"){
			let increment = ExpantaNum(get_boost).minus(game.normal.boost);
			if(ExpantaNum(increment).gte(game.automator.boost.parameter)){
				boost();
			}
		}
	}
	if(game.automator.infinity.checked&&game.normal.challenged[10]==1){
		if(game.automator.infinity.mode=="time"){
			if(nowtime-game.infinity.starttime>=game.automator.infinity.parameter){
				if(ExpantaNum(game.normal.number).gte(ExpantaNum(game.infinity.requirement))) infinity();
			}
		}
		if(game.automator.infinity.mode=="multi"){
			let multi = ExpantaNum(get_infinity).div(game.infinity.lastnumber);
			if(ExpantaNum(multi).gte(game.automator.infinity.parameter)){
				infinity();
			}
		}
		if(game.automator.infinity.mode=="totalmulti"){
			let totalmulti = ExpantaNum(get_infinity).div(game.infinity.totalnumber);
			if(ExpantaNum(totalmulti).gte(game.automator.infinity.parameter)){
				infinity();
			}
		}
		if(game.automator.infinity.mode=="amount"){
			if(ExpantaNum(get_infinity).gte(game.automator.infinity.parameter)){
				if(ExpantaNum(game.normal.number).gte(ExpantaNum(game.infinity.requirement))) infinity();
			}
		}
	}
	if(game.automator.eternity.checked&&game.eternity.milestones[13]==1){
		if(game.automator.eternity.mode=="time"){
			if(nowtime-game.eternity.starttime>=game.automator.eternity.parameter){
				if(ExpantaNum(game.infinity.number).gte(ExpantaNum(game.eternity.requirement))) eternity();
			}
		}
		if(game.automator.eternity.mode=="multi"){
			let multi = ExpantaNum(get_eternity).div(game.eternity.lastnumber);
			if(ExpantaNum(multi).gte(game.automator.eternity.parameter)){
				eternity();
			}
		}
		if(game.automator.eternity.mode=="totalmulti"){
			let totalmulti = ExpantaNum(get_eternity).div(game.eternity.totalnumber);
			if(ExpantaNum(totalmulti).gte(game.automator.eternity.parameter)){
				eternity();
			}
		}
		if(game.automator.eternity.mode=="amount"){
			if(ExpantaNum(get_eternity).gte(game.automator.eternity.parameter)){
				if(ExpantaNum(game.normal.number).gte(ExpantaNum(game.eternity.requirement))) eternity();
			}
		}
	}
	if(game.infinity.generators.autobuyer&&game.eternity.milestones[12]==1){
		maxAllinfinityGenerator();
	}
	//序数
	get_ordinal_power = ord(game.infinity.ordinal.number);
	get_ordinal_essence_effect = ExpantaNum(game.infinity.ordinal.essence).add(1).times(8);
	if(game.eternity.milestones[1]) get_ordinal_essence_effect = ExpantaNum(game.eternity.eternities).times(8).add(get_ordinal_essence_effect);
	if(ExpantaNum(get_ordinal_essence_effect).gt(49)){
		get_ordinal_essence_effect=ExpantaNum.pow(get_ordinal_essence_effect,0.5).times(7);
		document.getElementById("ordinal_essence_softcapped").innerHTML="序数精华效果超过49，受到软上限限制！";
	}else{
		document.getElementById("ordinal_essence_softcapped").innerHTML="";
	}
	if(ExpantaNum(get_ordinal_essence_effect).gt(1024)){
		get_ordinal_essence_effect=ExpantaNum.pow(get_ordinal_essence_effect,0.1).times(512);
		document.getElementById("ordinal_essence_softcapped2").innerHTML="序数精华效果超过1024，受到二重软上限限制！";
	}else{
		document.getElementById("ordinal_essence_softcapped2").innerHTML="";
	}
	if(ExpantaNum(get_ordinal_essence_effect).gt(8388608)){
		get_ordinal_essence_effect=ExpantaNum.pow(get_ordinal_essence_effect,1/23).times(4194304);
		document.getElementById("ordinal_essence_softcapped3").innerHTML="序数精华效果超过8388608，受到三重软上限限制！";
	}else{
		document.getElementById("ordinal_essence_softcapped3").innerHTML="";
	}
	if(game.infinity.ordinal.power=="过大"){
		get_ordinal_effect=ExpantaNum.pow(300,get_ordinal_essence_effect);
	}else{
		get_ordinal_effect=ExpantaNum(game.infinity.ordinal.power).add(1).log10().pow(get_ordinal_essence_effect).add(1);
	}
	get_ordinal_number = (game.infinity.ordinal.upgrade.plus*game.infinity.ordinal.upgrade.multi)**game.infinity.ordinal.upgrade.power;
	if(game.eternity.milestones[0]==1) get_ordinal_number*=5;
	if(get_ordinal_number==Infinity) get_ordinal_number = 1.797e308;
	ou_cost[0]=ExpantaNum.pow(10,ExpantaNum(game.infinity.ordinal.upgrade.plus).minus(1));
	ou_cost[1]=ExpantaNum.pow(10,ExpantaNum(game.infinity.ordinal.upgrade.multi).times(2));
	ou_cost[2]=ExpantaNum.pow(10,ExpantaNum(game.infinity.ordinal.upgrade.power).times(3));
	ou_cost[3]=ExpantaNum.pow(2,ExpantaNum(10).minus(game.infinity.ordinal.base).times(256).add(256));
	//生成器倍率
	game.normal.generators.factor=[1,1,1,1,1,1,1,1];
	game.normal.speed = 1;
	if(game.normal.inchallenge[4]==0){
		if(game.normal.upgrades[0]) game.normal.generators.factor[0]=3;
		if(game.normal.upgrades[3]) game.normal.generators.factor[4]=5;
		if(game.normal.upgrades[6]) game.normal.generators.factor[7]=10;
		
		if(game.normal.upgrades[1]) game.normal.speed=ExpantaNum(game.normal.speed).times(1.3);
		if(game.normal.upgrades[4]) game.normal.speed=ExpantaNum(game.normal.speed).times(2);
		if(game.normal.upgrades[7]) game.normal.speed=ExpantaNum(game.normal.speed).times(4);
		if(game.normal.upgrades[5]&&ExpantaNum(game.normal.number).gte(1e10)) {
			get_nu6_effect=ExpantaNum(game.normal.number).log10().times(0.1);
			game.normal.speed=ExpantaNum(game.normal.speed).times(get_nu6_effect);
		} 
	}
	if(game.infinity.hasinfinitied){
		infinity_power_exponent = 0.5;
		if(game.normal.challenged[11]==1) infinity_power_exponent += 0.5;
		if(game.infinity.challenged[5]==1) infinity_power_exponent += 0.5;
		infinity_power_effect = ExpantaNum.pow(game.infinity.power,infinity_power_exponent).add(1);
		game.normal.speed=ExpantaNum(game.normal.speed).times(infinity_power_effect);
	}
	if(game.eternity.haseternitied){
		if(ExpantaNum(game.eternity.power).gt(10)) eternity_power_effect = ExpantaNum(game.eternity.power).log10().log10().add(1);
	}
	
	get_sacrifice = ExpantaNum.pow(ExpantaNum(game.normal.number).add(1).log10().div(3).add(1),game.normal.boost);
	if(game.infinity.upgrades[10]!=0) get_sacrifice = ExpantaNum(get_sacrifice).times(1+game.infinity.upgrades[10]*0.3);

	get_boost = ExpantaNum(game.normal.number).add(1).log10().times(0.022).add(1);
	if(game.infinity.upgrades[11]!=0) get_boost = ExpantaNum(get_boost).add(game.infinity.upgrades[11]*3);
	if(game.infinity.challenged[0]==1) {
		infinity_power_effect2 = ExpantaNum.pow(game.infinity.power,infinity_power_exponent).add(1).log10().times(3);
		get_boost = ExpantaNum(get_boost).add(infinity_power_effect2);
	} 
	game.normal.speed=ExpantaNum(game.normal.speed).times(game.normal.sacrifice);
	if(game.infinity.upgrades[2]==1) {
		get_iu3_effect=ExpantaNum(game.infinity.infinities).times(0.2).add(1);
	} game.normal.speed=ExpantaNum(game.normal.speed).times(get_iu3_effect);
	if(game.infinity.upgrades[6]==1) {
		get_iu7_effect=ExpantaNum.pow(game.infinity.number,0.1).add(1);
		game.normal.speed=ExpantaNum(game.normal.speed).times(get_iu7_effect);
	} 
	if(game.infinity.upgrades[7]==1) {
		get_iu8_effect=ExpantaNum.pow(ExpantaNum(game.infinity.timespent).div(1000),0.5).add(1);
		game.normal.speed=ExpantaNum(game.normal.speed).times(get_iu8_effect);
	} 
	if(game.infinity.upgrades[8]==1) {
		get_iu9_effect=ExpantaNum.pow(2,game.normal.challenged.reduce(function(total, currentValue) { return total + (currentValue === 1 ? 1 : 0); }, 0));
		game.normal.speed=ExpantaNum(game.normal.speed).times(get_iu9_effect);
	} 
	if(game.eternity.upgrades[2]==1) {
		get_eu3_effect=ExpantaNum(game.eternity.eternities).times(game.eternity.producers.amount[1]);
		get_boost=ExpantaNum(get_boost).add(get_eu3_effect);
	}
	normal_bought = 0;
	for(let i=0;i<=7;i++){
		normal_bought = ExpantaNum(normal_bought).add(game.normal.generators.bought[i]);
	}
	if(game.infinity.challenged[7]==1) {
		get_ic8_effect=ExpantaNum.pow(normal_bought,10);
		game.normal.speed=ExpantaNum(game.normal.speed).times(get_ic8_effect);
	} 

	game.normal.multiplier=2;
	if(game.infinity.upgrades[9]!=0) game.normal.multiplier=ExpantaNum(game.normal.multiplier).add(0.3*game.infinity.upgrades[9]);
	if(game.infinity.challenged[6]==1) game.normal.multiplier=ExpantaNum(game.normal.multiplier).add(0.5);
	if(game.infinity.challenged[1]==1) {
		if(ExpantaNum(game.infinity.generators.amount[0]).gt(0)) get_ic2_effect=game.infinity.generators.amount[0];
		if(ExpantaNum(get_ic2_effect).gt(ExpantaNum.pow(10,1e5))) get_ic2_effect=ExpantaNum.pow(10,1e5);
		game.normal.generators.factor[7]=ExpantaNum(game.normal.generators.factor[7]).times(get_ic2_effect);
	}
	if(game.infinity.inchallenge[2]==1) game.normal.multiplier=ExpantaNum(game.normal.multiplier).add(1);
	if(game.infinity.inchallenge[6]==1) game.normal.multiplier=1;
	game.infinity.generators.factor=[1,1,1,1,1,1,1,1];
	game.infinity.speed = 1;
	if(game.infinity.challenged[3]==1){
		get_ic4_effect=ExpantaNum(game.normal.number).add(1).log10().div(100).add(1);
		game.infinity.speed=ExpantaNum(game.infinity.speed).times(get_ic4_effect);
	}
	if(game.infinity.challenged[4]==1){
		game.infinity.speed=ExpantaNum(game.infinity.speed).times(get_boost);
	}
	game.infinity.speed=ExpantaNum(game.infinity.speed).times(get_ordinal_effect);
	game.infinity.multiplier=2;
	//if(game.normal.upgrades[8]&&document.getElementById("autobuygenerator").checked==true) autobuynormalgenerator();
	game.eternity.generators.factor=[1,1,1,1,1,1,1,1];
	game.eternity.speed = 1;
	if(ecr>=1){
		get_ecr1_effect=ExpantaNum.pow(2,ec_complete);
		game.eternity.speed=ExpantaNum(game.eternity.speed).times(get_ecr1_effect);
	}
	if(ecr>=3){
		get_ecr3_effect=ExpantaNum.pow(game.eternity.power,ec_complete).add(1);
		game.normal.speed=ExpantaNum(game.normal.speed).times(get_ecr3_effect);
	}
	if(game.eternity.timespace.upgrades[4]==1){
		get_tssu2_effect=game.eternity.timespace.space;
		game.eternity.speed=ExpantaNum(game.eternity.speed).times(get_tssu2_effect);
	}

	if(game.eternity.timespace.upgrades[10]==1){
		get_tsuu2_effect=ExpantaNum.pow(10,game.eternity.timespace.buyables[3]);
	}
	if(game.eternity.timespace.upgrades[9]==1){
		get_tsuu1_effect=ExpantaNum.sqrt(game.eternity.timespent).times(get_tsuu2_effect);
	}
	if(game.eternity.timespace.upgrades[11]>=1){
		get_tsuu3_effect=ExpantaNum.pow(get_tsuu1_effect,ExpantaNum(game.eternity.timespace.upgrades[11]).add(1));
	}
	if(ExpantaNum(eternity_power_effect).gt(2)){
		eternity_power_effect=ExpantaNum.pow(eternity_power_effect,0.1).times(ExpantaNum.pow(2,0.9));
		document.getElementById("eternity_power_softcapped").innerHTML="永恒能量效果超过2，受到软上限限制！";
	}else{
		document.getElementById("eternity_power_softcapped").innerHTML="";
	}
	for(let i=0;i<8;i++){
		game.normal.generators.factor[i]=ExpantaNum.pow(game.normal.multiplier,game.normal.generators.bought[i]).times(game.normal.generators.factor[i]).times(game.normal.speed);
		if(game.normal.challenged[i]==1) {
			get_nc_effect[i]=ExpantaNum(game.normal.generators.amount[i]).add(1).log10().add(1);
			game.normal.generators.factor[i]=ExpantaNum(get_nc_effect[i]).times(game.normal.generators.factor[i]);
		} 
		if(game.eternity.haseternitied) {
			if(game.eternity.upgrades[1]==0){
				game.normal.generators.factor[i]=ExpantaNum.times(game.normal.generators.factor[i],eternity_power_effect);
			}else{
				game.normal.generators.factor[i]=ExpantaNum.pow(game.normal.generators.factor[i],eternity_power_effect);
			}
		} 
		//软上限
		if(ExpantaNum(game.normal.generators.bought[i]).gte(3000)){
			game.normal.generators.actuallprice[i]=ExpantaNum(game.normal.generators.price[i]).times(ExpantaNum.pow(game.normal.generators.scale[i],ExpantaNum.pow(game.normal.generators.bought[i],2).div(3000).round()));
			
		}else{
			if(game.infinity.inchallenge[7]==1) {
				game.normal.generators.actuallprice[i]=ExpantaNum(game.normal.generators.price[i]).times(ExpantaNum.pow(game.normal.generators.scale[i],normal_bought));
			} else{
				game.normal.generators.actuallprice[i]=ExpantaNum(game.normal.generators.price[i]).times(ExpantaNum.pow(game.normal.generators.scale[i],game.normal.generators.bought[i]));
			}
			
		}
		if(game.eternity.inchallenge[4]==1){
			game.normal.generators.actuallprice[i]=ExpantaNum(game.normal.generators.price[i]).times(ExpantaNum.pow(game.normal.generators.scale[i],ExpantaNum.pow(game.normal.generators.bought[i],2)));
		}
		if(game.infinity.hasinfinitied) {
			game.infinity.generators.factor[i]=ExpantaNum.pow(game.infinity.multiplier,game.infinity.generators.bought[i]).times(game.infinity.generators.factor[i]).times(game.infinity.speed);
			if(ExpantaNum(game.infinity.generators.bought[i]).gte(3000)){
				game.infinity.generators.actuallprice[i]=ExpantaNum(game.infinity.generators.price[i]).times(ExpantaNum.pow(game.infinity.generators.scale[i],ExpantaNum.pow(game.infinity.generators.bought[i],2).div(3000).round()));
				
			}else{
				game.infinity.generators.actuallprice[i]=ExpantaNum(game.infinity.generators.price[i]).times(ExpantaNum.pow(game.infinity.generators.scale[i],game.infinity.generators.bought[i]));
			}
		} 
		if(game.eternity.haseternitied) {
			game.eternity.generators.factor[i]=ExpantaNum.pow(game.eternity.multiplier,game.eternity.generators.bought[i]).times(game.eternity.generators.factor[i]).times(game.eternity.speed);
			if(ExpantaNum(game.eternity.generators.bought[i]).gte(3000)){
				game.eternity.generators.actuallprice[i]=ExpantaNum(game.eternity.generators.price[i]).times(ExpantaNum.pow(game.eternity.generators.scale[i],ExpantaNum.pow(game.eternity.generators.bought[i],2).div(3000).round()));
				
			}else{
				game.eternity.generators.actuallprice[i]=ExpantaNum(game.eternity.generators.price[i]).times(ExpantaNum.pow(game.eternity.generators.scale[i],game.eternity.generators.bought[i]));
			}
		}
		if(ExpantaNum(game.eternity.producers.bought[i]).gte(3000)){
			game.eternity.producers.actuallprice[i]=ExpantaNum(game.eternity.producers.price[i]).times(ExpantaNum.pow(game.eternity.producers.scale[i],ExpantaNum.pow(game.eternity.producers.bought[i],2).div(3000).round()));
			
		}else{
			game.eternity.producers.actuallprice[i]=ExpantaNum(game.eternity.producers.price[i]).times(ExpantaNum.pow(game.eternity.producers.scale[i],game.eternity.producers.bought[i]));
		}
	}
	for(let i=0;i<4;i++){
		if(ExpantaNum(game.eternity.timespace.buyables[i]).gte(3000)){
			game.eternity.timespace.actuallprice[i]=ExpantaNum(game.eternity.timespace.price[i]).times(ExpantaNum.pow(game.eternity.timespace.scale[i],ExpantaNum.pow(game.eternity.timespace.buyables[i],2).div(3000).round()));
			
		}else{
			game.eternity.timespace.actuallprice[i]=ExpantaNum(game.eternity.timespace.price[i]).times(ExpantaNum.pow(game.eternity.timespace.scale[i],game.eternity.timespace.buyables[i]));
		}
	}


	//挑战限制
	
	if(game.normal.inchallenge[0]==1){
		for(let i=1;i<8;i++){
			game.normal.generators.factor[i]=1;
		}
		game.normal.generators.factor[0]=ExpantaNum.pow(game.normal.generators.factor[0],5);
	}
	if(game.normal.inchallenge[1]==1){
		for(let i=1;i<8;i++){
			game.normal.generators.actuallprice[i]=ExpantaNum.pow(game.normal.generators.actuallprice[i],2)
		}
	}
	if(game.normal.inchallenge[2]==1){
		game.normal.generators.factor[2]=0;
		get_sacrifice = ExpantaNum.pow(get_sacrifice,6);
	}
	if(game.normal.inchallenge[3]==1){
		for(let i=0;i<8;i++){
			game.normal.generators.factor[i]=ExpantaNum.pow(game.normal.generators.factor[i],0.5);
		}
	}
	if(game.normal.inchallenge[6]==1){
		game.normal.challenge.nc7_factor = 1-Math.pow(2,(game.normal.challenge.nc_timer-nowtime)/10000);
		for(let i=0;i<8;i++){
			game.normal.generators.factor[i]=ExpantaNum.pow(game.normal.generators.factor[i],game.normal.challenge.nc7_factor);
		}
	}
	if(game.normal.inchallenge[9]==1){
		for(let i=0;i<8;i++){
			game.normal.generators.factor[i]=ExpantaNum.pow(game.normal.generators.factor[i],1-0.1*(i+1));
		}
		get_sacrifice = ExpantaNum(get_sacrifice,0.1);
	}
	if(game.normal.inchallenge[10]==1){
		game.infinity.requirement=ExpantaNum.pow(2,1024);
	}
	if(game.normal.inchallenge[11]==1){
		game.normal.challenge.nc12_factor = Math.pow(2,(game.normal.challenge.nc_timer-nowtime)/10000);
		for(let i=0;i<8;i++){
			game.normal.generators.factor[i]=ExpantaNum.pow(game.normal.generators.factor[i],game.normal.challenge.nc12_factor);
		}
	}
	if(game.infinity.inchallenge[0]==1){
		game.infinity.generators.factor[0]=0;
	}
	if(game.infinity.inchallenge[1]==1&&ExpantaNum(game.normal.generators.amount[1]).gt(0)){
		game.infinity.challenge.ic2_anti=ExpantaNum(game.infinity.challenge.ic2_anti).times(ExpantaNum.pow(10,ExpantaNum(game.delay).div(1000)));
		document.getElementById("ic2_anti").innerHTML="反点数："+game.infinity.challenge.ic2_anti.toPrecision(game.precision).replace("e+", "e");
		game.normal.generators.factor[0]=ExpantaNum(game.normal.generators.factor[0]).div(game.infinity.challenge.ic2_anti);
	}
	if(game.infinity.inchallenge[3]==1){
		for(let i=0;i<8;i++){
			game.normal.generators.factor[i]=ExpantaNum(game.normal.generators.factor[i]).div(ExpantaNum(game.normal.number).add(1).log10().times(100).add(1));
		}
	}
	if(game.infinity.inchallenge[4]==1){
		get_sacrifice=ExpantaNum.pow(get_sacrifice,1-0.1*game.infinity.challenge.ic5_times);
	}
	if(game.infinity.inchallenge[5]==1){
		for(let i=0;i<8;i++){
			game.normal.generators.factor[i]=ExpantaNum.pow(game.normal.generators.factor[i],0.1);
		}
	}
	if(game.eternity.inchallenge[1]==1){
		for(let i=0;i<8;i++){
			game.eternity.generators.factor[i]=0;
		}
	}
	if(game.eternity.inchallenge[2]==1){
		for(let i=0;i<8;i++){
			game.infinity.generators.factor[i]=0;
		}
	}
	if(game.eternity.inchallenge[3]==1){
		get_sacrifice=1;
		game.normal.generators.factor[6]=0;
		game.normal.generators.factor[7]=0;
	}
	if(game.eternity.inchallenge[5]==1){
		for(let i=0;i<8;i++){
			game.normal.generators.factor[i]=ExpantaNum.pow(game.normal.generators.factor[i],0.1);
			game.infinity.generators.factor[i]=ExpantaNum.pow(game.infinity.generators.factor[i],0.1);
			game.eternity.generators.factor[i]=ExpantaNum.pow(game.eternity.generators.factor[i],0.1);
		}
	}
	if(game.eternity.inchallenge[6]==1){
		get_ec7_factor=ExpantaNum.pow(10,ExpantaNum.div(1,ExpantaNum(game.infinity.infinities).div(100)).neg());
		for(let i=0;i<8;i++){
			game.normal.generators.factor[i]=ExpantaNum(game.normal.generators.factor[i]).pow(get_ec7_factor);
			game.infinity.generators.factor[i]=ExpantaNum(game.infinity.generators.factor[i]).pow(get_ec7_factor);
			game.eternity.generators.factor[i]=ExpantaNum(game.eternity.generators.factor[i]).pow(get_ec7_factor);
		}
	}

	//软上限
	//let sacrifice_softcapped=false;
	if(ExpantaNum(get_sacrifice).gt(1e100)) {
		if(game.infinity.challenged[2]==1){
			get_sacrifice=ExpantaNum.pow(get_sacrifice,0.15).times(1e85);
		}else{
			get_sacrifice=ExpantaNum.pow(get_sacrifice,0.1).times(1e90);
		}	
		document.getElementById("sacrifice_softcapped").innerHTML="献祭效果超过1e100，受到软上限限制！";
	} else{
		document.getElementById("sacrifice_softcapped").innerHTML="";
	}
	if(ExpantaNum(get_sacrifice).gt(ExpantaNum.pow(10,10000))) {
		get_sacrifice=ExpantaNum.pow(get_sacrifice,0.1).times(ExpantaNum.pow(10,9000));
		document.getElementById("sacrifice_softcapped2").innerHTML="献祭效果超过1e10000，受到二重软上限限制！";
		document.getElementById("sacrifice_softcapped2_br").style.display = "inline";
	} else{
		document.getElementById("sacrifice_softcapped2").innerHTML="";
		document.getElementById("sacrifice_softcapped2_br").style.display = "none";
	}
	if(ExpantaNum(get_sacrifice).gt(ExpantaNum.pow(10,1e6))) {
		get_sacrifice=ExpantaNum.pow(get_sacrifice,0.1).times(ExpantaNum.pow(10,900000));
		document.getElementById("sacrifice_softcapped3").innerHTML="献祭效果超过1ee6，受到三重软上限限制！";
		document.getElementById("sacrifice_softcapped3_br").style.display = "inline";
	} else{
		document.getElementById("sacrifice_softcapped3").innerHTML="";
		document.getElementById("sacrifice_softcapped3_br").style.display = "none";
	}
	if(ExpantaNum(get_boost).gt(10000)) {	
		get_boost=ExpantaNum.pow(get_boost,0.25).times(1000);
		document.getElementById("boost_softcapped").innerHTML="加速效果超过10000，受到软上限限制！";
	} else{
		document.getElementById("boost_softcapped").innerHTML="";
	}
	if(ExpantaNum(get_boost).gt(1e6)) {	
		get_boost=ExpantaNum.pow(get_boost,0.1).times(ExpantaNum.pow(10,5.4));
		document.getElementById("boost_softcapped2").innerHTML="加速效果超过1e6，受到二重软上限限制！";
		document.getElementById("boost_softcapped2_br").style.display = "inline";
	} else{
		document.getElementById("boost_softcapped2").innerHTML="";
		document.getElementById("boost_softcapped2_br").style.display = "none";
	}
	if(ExpantaNum(get_boost).gt(1e8)) {	
		get_boost=ExpantaNum.pow(get_boost,0.125).times(1e7);
		document.getElementById("boost_softcapped3").innerHTML="加速效果超过1e8，受到三重软上限限制！";
		document.getElementById("boost_softcapped3_br").style.display = "inline";
	} else{
		document.getElementById("boost_softcapped3").innerHTML="";
		document.getElementById("boost_softcapped3_br").style.display = "none";
	}

	
	//增量
	game.normal.number=ExpantaNum(game.normal.number).add(ExpantaNum(game.normal.generators.factor[0]).times(game.normal.generators.amount[0]).times(gameSpeed).times(game.delay).times(0.001));
	if(game.infinity.hasinfinitied) game.infinity.power=ExpantaNum(game.infinity.power).add(ExpantaNum(game.infinity.generators.factor[0]).times(game.infinity.generators.amount[0]).times(gameSpeed).times(game.delay).times(0.001));
	if(game.eternity.haseternitied) game.eternity.power=ExpantaNum(game.eternity.power).add(ExpantaNum(game.eternity.generators.factor[0]).times(game.eternity.generators.amount[0]).times(gameSpeed).times(game.delay).times(0.001));
	if(ecr>=2){
		get_ecr2_effect=ExpantaNum.pow(ec_complete,3);
		game.eternity.eternities=ExpantaNum(game.eternity.eternities).add(ExpantaNum.times(game.eternity.producers.amount[0],game.eternity.producers.amount[1]).times(get_ecr2_effect).times(gameSpeed).times(game.delay).times(0.001));
		if(game.eternity.upgrades[5]==1) game.infinity.infinities=ExpantaNum(game.infinity.infinities).add(ExpantaNum.times(game.eternity.producers.amount[0],game.eternity.producers.amount[1]).times(get_ecr2_effect).times(gameSpeed).times(game.delay).times(0.001));
	}else{
		game.eternity.eternities=ExpantaNum(game.eternity.eternities).add(ExpantaNum.times(game.eternity.producers.amount[0],game.eternity.producers.amount[1]).times(gameSpeed).times(game.delay).times(0.001));
	}
	for(let i=0;i<7;i++){
		game.normal.generators.amount[i]=ExpantaNum(game.normal.generators.amount[i]).add(ExpantaNum(game.normal.generators.factor[i+1]).times(game.normal.generators.amount[i+1]).times(gameSpeed).times(game.delay).times(0.001));
		if(game.infinity.hasinfinitied) game.infinity.generators.amount[i]=ExpantaNum(game.infinity.generators.amount[i]).add(ExpantaNum(game.infinity.generators.factor[i+1]).times(game.infinity.generators.amount[i+1]).times(gameSpeed).times(game.delay).times(0.001));
		if(game.eternity.haseternitied) game.eternity.generators.amount[i]=ExpantaNum(game.eternity.generators.amount[i]).add(ExpantaNum(game.eternity.generators.factor[i+1]).times(game.eternity.generators.amount[i+1]).times(gameSpeed).times(game.delay).times(0.001));
		
	}
	if(game.eternity.timespace.upgrades[0]==1){
		get_tstu1_effect=game.eternity.timespace.time;	
	}
	get_ep3_cap=ExpantaNum.pow(game.eternity.producers.bought[2],12);
	for(let i=3;i<6;i++){
			game.eternity.producers.amount[i-3]=ExpantaNum(game.eternity.producers.amount[i-3]).add(ExpantaNum(game.eternity.producers.amount[i]).times(get_tstu1_effect));	
	}
	if(ExpantaNum(game.eternity.producers.amount[2]).gte(get_ep3_cap)) game.eternity.producers.amount[2]=get_ep3_cap;
	if(ecr>=5&&ExpantaNum(game.normal.number).gte(game.infinity.requirement)){
		game.infinity.number=ExpantaNum(game.infinity.number).add(get_infinity.times(gameSpeed).times(game.delay).times(0.001));
	}
	if(game.eternity.timespace.upgrades[1]==1&&ExpantaNum(game.eternity.number).gte(10)){
		get_tstu2_effect=ExpantaNum.log10(game.eternity.number);	
	}
	if(game.eternity.timespace.upgrades[2]==1&&ExpantaNum(game.eternity.timespace.time).gte(10)){
		get_tstu3_effect=ExpantaNum.log10(game.eternity.timespace.time);	
	}
	if(game.eternity.timespace.upgrades[3]==1&&ExpantaNum(game.eternity.eternities).gte(10)){
		get_tssu1_effect=ExpantaNum.log10(game.eternity.eternities);
	}
	if(game.eternity.timespace.upgrades[5]==1&&ExpantaNum(game.eternity.timespace.space).gte(10)){
		get_tssu3_effect=ExpantaNum.log10(game.eternity.timespace.space);
	}
	if(game.eternity.timespace.upgrades[6]==1&&ExpantaNum(game.eternity.timespace.timespace).gte(10)){
		get_tstsu1_effect=ExpantaNum.log10(game.eternity.timespace.timespace);
	}
	if(game.eternity.timespace.upgrades[7]==1){
		if(ExpantaNum(game.eternity.timespace.timespace).lte(ExpantaNum.pow(10,1000))&&ExpantaNum(game.eternity.timespace.timespace).gte(1)){
			get_tstsu2_effect=ExpantaNum.log10(game.eternity.timespace.timespace).div(1000).neg();
			game.eternity.timespace.scale[2]=ExpantaNum(5).add(get_tstsu2_effect);
		}else if(ExpantaNum(game.eternity.timespace.timespace).lte(1)){
			game.eternity.timespace.scale[2]=5;
		}else{
			get_tstsu2_effect=-1;
			game.eternity.timespace.scale[2]=4;
		}
	}else{
		game.eternity.timespace.scale[2]=5;
	}
	if(game.eternity.timespace.upgrades[8]==1&&ExpantaNum(game.eternity.timespace.timespace).gte(10)){
		get_tstsu3_effect=ExpantaNum.log10(game.eternity.timespace.timespace).pow(10);
	}
	if(game.eternity.timespace.upgrades[8]==1&&ExpantaNum(game.eternity.timespace.timespace).gte(10)){
		get_tstsu3_effect=ExpantaNum.log10(game.eternity.timespace.timespace).pow(10);
	}

	if(game.eternity.upgrades[6]==1) {
		game.eternity.timespace.time=ExpantaNum(game.eternity.timespace.time).add(ExpantaNum.pow(3,game.eternity.timespace.buyables[0]).times(get_tstu2_effect).times(get_tstu3_effect).times(get_tstsu1_effect).times(gameSpeed).times(game.delay).times(0.001));
	} 
	if(game.eternity.upgrades[7]==1) {
		game.eternity.timespace.space=ExpantaNum.pow(3,game.eternity.timespace.buyables[1]).times(get_tssu1_effect).times(get_tssu3_effect).times(get_tstsu1_effect).times(get_tsuu1_effect);
	} 
	if(game.eternity.upgrades[8]==1) {
		game.eternity.timespace.timespace=ExpantaNum(game.eternity.timespace.timespace).add(ExpantaNum.pow(3,game.eternity.timespace.buyables[2]).times(game.eternity.timespace.time).times(game.eternity.timespace.space).times(get_tstsu3_effect).times(gameSpeed).times(game.delay).times(0.001));
		if(ExpantaNum(game.eternity.timespace.timespace).gte(1.79e308)) getAchievement(33);
	} 
	if(ExpantaNum(game.infinity.power).gt(ExpantaNum.pow(10,1e5))){
		game.infinity.power=ExpantaNum.pow(game.infinity.power,0.1).times(ExpantaNum.pow(10,90000));
		document.getElementById("infinity_power_softcapped").innerHTML="无限能量超过e100000，受到软上限限制！";
	}else{
		document.getElementById("infinity_power_softcapped").innerHTML="";
	}
	//普通挑战硬上限
	if(game.normal.inchallenge.includes(1)&&game.normal.number.gte(ExpantaNum.pow(2,1024))) game.normal.number=ExpantaNum.pow(2,1024);
	//bug
	if(ExpantaNum(game.normal.number).isNaN()) load();
	//显示
	document.getElementById("nu6_effect").innerHTML=ExpantaNum(get_nu6_effect).toPrecision(game.precision).replace("e+", "e");
	for(let i=1;i<=8;i++){
		document.getElementById("nc"+i+"_effect").innerHTML=ExpantaNum(get_nc_effect[i-1]).toPrecision(game.precision).replace("e+", "e");
	}
	document.getElementById("iu3_effect").innerHTML=ExpantaNum(get_iu3_effect).toPrecision(game.precision).replace("e+", "e");
	document.getElementById("iu7_effect").innerHTML=ExpantaNum(get_iu7_effect).toPrecision(game.precision).replace("e+", "e");
	document.getElementById("iu8_effect").innerHTML=ExpantaNum(get_iu8_effect).toPrecision(game.precision).replace("e+", "e");
	document.getElementById("iu9_effect").innerHTML=ExpantaNum(get_iu9_effect).toPrecision(game.precision).replace("e+", "e");
	document.getElementById("ic2_effect").innerHTML=ExpantaNum(get_ic2_effect).toPrecision(game.precision).replace("e+", "e");
	document.getElementById("ic4_effect").innerHTML=ExpantaNum(get_ic4_effect).toPrecision(game.precision).replace("e+", "e");
	document.getElementById("ic8_effect").innerHTML=ExpantaNum(get_ic8_effect).toPrecision(game.precision).replace("e+", "e");
	document.getElementById("eu3_effect").innerHTML=ExpantaNum(get_eu3_effect).toPrecision(game.precision).replace("e+", "e");
	document.getElementById("ec7_factor").innerHTML=ExpantaNum(get_ec7_factor).toPrecision(game.precision).replace("e+", "e");
	document.getElementById("ecr1_effect").innerHTML=ExpantaNum(get_ecr1_effect).toPrecision(game.precision).replace("e+", "e");
	document.getElementById("ecr2_effect").innerHTML=ExpantaNum(get_ecr2_effect).toPrecision(game.precision).replace("e+", "e");
	document.getElementById("ecr3_effect").innerHTML=ExpantaNum(get_ecr3_effect).toPrecision(game.precision).replace("e+", "e");
	document.getElementById("tstu1_effect").innerHTML=ExpantaNum(get_tstu1_effect).toPrecision(game.precision).replace("e+", "e");
	document.getElementById("tstu2_effect").innerHTML=ExpantaNum(get_tstu2_effect).toPrecision(game.precision).replace("e+", "e");
	document.getElementById("tstu3_effect").innerHTML=ExpantaNum(get_tstu3_effect).toPrecision(game.precision).replace("e+", "e");
	document.getElementById("tssu1_effect").innerHTML=ExpantaNum(get_tssu1_effect).toPrecision(game.precision).replace("e+", "e");
	document.getElementById("tssu2_effect").innerHTML=ExpantaNum(get_tssu2_effect).toPrecision(game.precision).replace("e+", "e");
	document.getElementById("tssu3_effect").innerHTML=ExpantaNum(get_tssu3_effect).toPrecision(game.precision).replace("e+", "e");
	document.getElementById("tstsu1_effect").innerHTML=ExpantaNum(get_tstsu1_effect).toPrecision(game.precision).replace("e+", "e");
	document.getElementById("tstsu2_effect").innerHTML=ExpantaNum(get_tstsu2_effect).toPrecision(game.precision).replace("e+", "e");
	document.getElementById("tstsu3_effect").innerHTML=ExpantaNum(get_tstsu3_effect).toPrecision(game.precision).replace("e+", "e");
	document.getElementById("tsuu1_effect").innerHTML=ExpantaNum(get_tsuu1_effect).toPrecision(game.precision).replace("e+", "e");
	document.getElementById("tsuu2_effect").innerHTML=ExpantaNum(get_tsuu2_effect).toPrecision(game.precision).replace("e+", "e");
	document.getElementById("tsuu3_effect").innerHTML=ExpantaNum(get_tsuu3_effect).toPrecision(game.precision).replace("e+", "e");
	document.getElementById("ep3_cap").innerHTML=ExpantaNum(get_ep3_cap).toPrecision(game.precision).replace("e+", "e");
	
	
	document.getElementById("sacrifice_factor").innerHTML=ExpantaNum(game.normal.sacrifice).toPrecision(game.precision).replace("e+", "e");
	document.getElementById("boost_factor").innerHTML=ExpantaNum(game.normal.boost).toPrecision(game.precision).replace("e+", "e");
	if(document.getElementById("sacrifice_effect")) document.getElementById("sacrifice_effect").innerHTML=get_sacrifice.toPrecision(game.precision).replace("e+", "e");
	if(document.getElementById("boost_effect")) document.getElementById("boost_effect").innerHTML=get_boost.toPrecision(game.precision).replace("e+", "e");
	
	document.getElementById("ordinal_number").innerHTML=game.infinity.ordinal.number.toPrecision(game.precision).replace("e+", "e");
	document.getElementById("ordinal_base").innerHTML=Math.floor(game.infinity.ordinal.base);
	document.getElementById("ordinal_essence").innerHTML=Math.floor(game.infinity.ordinal.essence);
	if(game.eternity.milestones[1]) document.getElementById("ordinal_essence_from_eternity").innerHTML="(+"+ExpantaNum.floor(game.eternity.eternities).toPrecision(game.precision).replace("e+", "e")+")";
	document.getElementById("ordinal_essence_effect").innerHTML=get_ordinal_essence_effect.toPrecision(game.precision).replace("e+", "e");
	document.getElementById("ordinal_effect").innerHTML=get_ordinal_effect.toPrecision(game.precision).replace("e+", "e");
	document.getElementById("ordinal_number_get").innerHTML=get_ordinal_number.toPrecision(game.precision).replace("e+", "e");
	if(game.infinity.ordinal.power=="过大"){
		document.getElementById("ordinal_power").innerHTML="过大";
	}else{
		document.getElementById("ordinal_power").innerHTML=ExpantaNum(game.infinity.ordinal.power).toPrecision(game.precision).replace("e+", "e");
	}
	if(get_ordinal_power=="过大"){
		document.getElementById("ordinal_power_get").innerHTML="过大";
	}else{
		document.getElementById("ordinal_power_get").innerHTML=get_ordinal_power.toPrecision(game.precision).replace("e+", "e");
	}
	if(game.eternity.haseternitied){
		ec_complete=0;
		ecr=0;
		for(let i=1;i<=8;i++){
			if(game.eternity.challenged[i-1] < 4){
				document.getElementById("ec"+i+"_goal").innerHTML=challenge_goal_ec[i-1][game.eternity.challenged[i-1]];
			}else{
				document.getElementById("ec"+i+"_goal").innerHTML="--";
			}
			document.getElementById("ec"+i+"_completed").innerHTML=game.eternity.challenged[i-1];		
			ec_complete+=game.eternity.challenged[i-1];
		}
		if(ec_complete>=1) {
			document.getElementById("ecr1").style.color="#00ff00";
			getAchievement(28);
			ecr+=1;
		}
		if(ec_complete>=2) {
			document.getElementById("ecr2").style.color="#00ff00";
			ecr+=1;
		}
		if(ec_complete>=4) {
			document.getElementById("ecr3").style.color="#00ff00";
			ecr+=1;
		}
		if(ec_complete>=8) {
			document.getElementById("ecr4").style.color="#00ff00";
			ecr+=1;
		}
		if(ec_complete>=16) {
			document.getElementById("ecr5").style.color="#00ff00";
			getAchievement(29);
			ecr+=1;
		}
		if(ec_complete>=32) {
			document.getElementById("ecr6").style.color="#00ff00";
			ecr+=1;
		}
		if(ecr>=4){
			document.getElementById("ep_new").style.display='table-row';
		}else{
			document.getElementById("ep_new").style.display='none';
		}
		if(ecr>=6){
			document.getElementById("eternity_timespace_tab").style.display='inline';
		}else{
			document.getElementById("eternity_timespace_tab").style.display='none';
		}
	}

		
	

	document.getElementById("ou1").value="Cost:"+ou_cost[0].toPrecision(game.precision).replace("e+", "e")+"序数能量";
	document.getElementById("ou2").value="Cost:"+ou_cost[1].toPrecision(game.precision).replace("e+", "e")+"序数能量";
	document.getElementById("ou3").value="Cost:"+ou_cost[2].toPrecision(game.precision).replace("e+", "e")+"序数能量";
	document.getElementById("ou4").value="Cost:"+ou_cost[3].toPrecision(game.precision).replace("e+", "e")+"无限点数";
	
	document.getElementById("ts_time").innerHTML=ExpantaNum(game.eternity.timespace.time).toPrecision(game.precision).replace("e+", "e");
	document.getElementById("ts_space").innerHTML=ExpantaNum(game.eternity.timespace.space).toPrecision(game.precision).replace("e+", "e");
	document.getElementById("ts_timespace").innerHTML=ExpantaNum(game.eternity.timespace.timespace).toPrecision(game.precision).replace("e+", "e");
	document.getElementById("ts_uni").innerHTML=ExpantaNum(game.eternity.timespace.universe).toPrecision(game.precision).replace("e+", "e");
	
	if(ExpantaNum(game.normal.number).gte(ExpantaNum(game.infinity.requirement))){
		document.getElementById("infinityY").style.display='block';
		document.getElementById("infinityN").style.display='none';
		document.getElementById("infinity number get").innerHTML=get_infinity.toPrecision(game.precision).replace("e+", "e");

	}
	else{
		document.getElementById("infinityY").style.display='none';
		document.getElementById("infinityN").style.display='block';
		document.getElementById("infinity requirement").innerHTML=ExpantaNum(game.infinity.requirement).toPrecision(game.precision).replace("e+", "e");
	}
	if(game.infinity.hasinfinitied){
		if(ExpantaNum(game.infinity.number).gte(ExpantaNum(game.eternity.requirement))){
			document.getElementById("eternityY").style.display='block';
			document.getElementById("eternityN").style.display='none';
			document.getElementById("eternity number get").innerHTML=get_eternity.toPrecision(game.precision).replace("e+", "e");
		}
		else{
			document.getElementById("eternityY").style.display='none';
			document.getElementById("eternityN").style.display='block';
			document.getElementById("eternity requirement").innerHTML=ExpantaNum(game.eternity.requirement).toPrecision(game.precision).replace("e+", "e");
		}
	}else{
			document.getElementById("eternityY").style.display='none';
			document.getElementById("eternityN").style.display='none';
	}
	if(game.eternity.haseternitied){
		if(ExpantaNum(game.eternity.number).gte(ExpantaNum(game.annihilation.requirement))){
			document.getElementById("annihilationY").style.display='block';
			document.getElementById("annihilationN").style.display='none';
			document.getElementById("annihilation number get").innerHTML=get_annihilation.toPrecision(game.precision).replace("e+", "e");
		}
		else{
			document.getElementById("annihilationY").style.display='none';
			document.getElementById("annihilationN").style.display='block';
			document.getElementById("annihilation requirement").innerHTML=ExpantaNum(game.annihilation.requirement).toPrecision(game.precision).replace("e+", "e");
		}
	}else{
			document.getElementById("annihilationY").style.display='none';
			document.getElementById("annihilationN").style.display='none';
	}
	
	if(game.infinity.hasinfinitied){
		document.getElementById("infinity number").innerHTML="你有"+ExpantaNum(game.infinity.number).toPrecision(game.precision).replace("e+", "e")+"无限点数。";
		let d=new Date();
		game.infinity.timespent=ExpantaNum(d.getTime()-game.infinity.starttime);
		document.getElementById("infinity time").innerHTML="上次无限到现在过了"+ExpantaNum(game.infinity.timespent).div(1000).toPrecision(game.precision).replace("e+", "e")+"秒。";
	} 
	if(game.eternity.haseternitied){
		document.getElementById("eternity number").innerHTML="你有"+ExpantaNum(game.eternity.number).toPrecision(game.precision).replace("e+", "e")+"永恒点数。";
		let d=new Date();
		game.eternity.timespent=ExpantaNum(d.getTime()-game.eternity.starttime).div(1000);
		document.getElementById("eternity time").innerHTML="上次永恒到现在过了"+ExpantaNum(game.eternity.timespent).toPrecision(game.precision).replace("e+", "e")+"秒。";
	} 
	if(game.annihilation.hasannihilated){
		document.getElementById("annihilation number").innerHTML="你有"+ExpantaNum(game.annihilation.number).toPrecision(game.precision).replace("e+", "e")+"湮灭点数。";
		let d=new Date();
		game.annihilation.timespent=ExpantaNum(d.getTime()-game.annihilation.starttime).div(1000);
		document.getElementById("annihilation time").innerHTML="上次湮灭到现在过了"+ExpantaNum(game.annihilation.timespent).toPrecision(game.precision).replace("e+", "e")+"秒。";
	} 

	if(document.getElementById("normal number")) document.getElementById("normal number").innerHTML=ExpantaNum.floor(game.normal.number).toPrecision(game.precision).replace("e+", "e");
	if(document.getElementById("infinity_power")) document.getElementById("infinity_power").innerHTML=ExpantaNum.floor(game.infinity.power).toPrecision(game.precision).replace("e+", "e");
	if(document.getElementById("infinity_power_effect")) document.getElementById("infinity_power_effect").innerHTML=ExpantaNum.floor(infinity_power_effect).toPrecision(game.precision).replace("e+", "e");
	if(document.getElementById("infinity_power_effect2")) document.getElementById("infinity_power_effect2").innerHTML=ExpantaNum(infinity_power_effect2).toPrecision(game.precision).replace("e+", "e");
	if(document.getElementById("eternity_power")) document.getElementById("eternity_power").innerHTML=ExpantaNum.floor(game.eternity.power).toPrecision(game.precision).replace("e+", "e");
	if(game.eternity.upgrades[1]==0) {
		if(document.getElementById("eternity_power_effect")) document.getElementById("eternity_power_effect").innerHTML="x"+ExpantaNum(eternity_power_effect).toPrecision(game.precision).replace("e+", "e");
	}else{
		if(document.getElementById("eternity_power_effect")) document.getElementById("eternity_power_effect").innerHTML="^"+ExpantaNum(eternity_power_effect).toPrecision(game.precision).replace("e+", "e");
	}
	if(document.getElementById("eternities")) document.getElementById("eternities").innerHTML=ExpantaNum.floor(game.eternity.eternities).toPrecision(game.precision).replace("e+", "e");
	
	
	for(let i=1;i<=8;i++){
		if(document.getElementById("normalgenerator"+i)) document.getElementById("normalgenerator"+i).innerHTML=ExpantaNum.floor(game.normal.generators.amount[i-1]).toPrecision(game.precision).replace("e+", "e");
		if(document.getElementById("normalgeneratormultiplyer"+i)) document.getElementById("normalgeneratormultiplyer"+i).innerHTML=ExpantaNum.floor(game.normal.generators.factor[i-1]).toPrecision(game.precision).replace("e+", "e");
		if(document.getElementById("buyNG"+i)) document.getElementById("buyNG"+i).value="Cost:"+ExpantaNum(game.normal.generators.actuallprice[i-1]).toPrecision(game.precision).replace("e+", "e");
		if(game.infinity.hasinfinitied){
			if(document.getElementById("infinitygenerator"+i)) document.getElementById("infinitygenerator"+i).innerHTML=ExpantaNum.floor(game.infinity.generators.amount[i-1]).toPrecision(game.precision).replace("e+", "e");
			if(document.getElementById("infinitygeneratormultiplyer"+i)) document.getElementById("infinitygeneratormultiplyer"+i).innerHTML=ExpantaNum.floor(game.infinity.generators.factor[i-1]).toPrecision(game.precision).replace("e+", "e");
			if(document.getElementById("buyIG"+i)) document.getElementById("buyIG"+i).value="Cost:"+ExpantaNum(game.infinity.generators.actuallprice[i-1]).toPrecision(game.precision).replace("e+", "e");
		}
		if(game.eternity.haseternitied){
			if(document.getElementById("eternitygenerator"+i)) document.getElementById("eternitygenerator"+i).innerHTML=ExpantaNum.floor(game.eternity.generators.amount[i-1]).toPrecision(game.precision).replace("e+", "e");
			if(document.getElementById("eternitygeneratormultiplyer"+i)) document.getElementById("eternitygeneratormultiplyer"+i).innerHTML=ExpantaNum.floor(game.eternity.generators.factor[i-1]).toPrecision(game.precision).replace("e+", "e");
			if(document.getElementById("buyEG"+i)) document.getElementById("buyEG"+i).value="Cost:"+ExpantaNum(game.eternity.generators.actuallprice[i-1]).toPrecision(game.precision).replace("e+", "e");
		}
	}
	for(let i=1;i<=3;i++){
		if(document.getElementById("ep"+i)) document.getElementById("ep"+i).innerHTML=ExpantaNum.floor(game.eternity.producers.bought[i-1]).toPrecision(game.precision).replace("e+", "e");
		if(document.getElementById("ep"+i+"_new")&&ecr>=4) document.getElementById("ep"+i).innerHTML="("+ExpantaNum.floor(game.eternity.producers.amount[i-1]).toPrecision(game.precision).replace("e+", "e")+")";
		if(document.getElementById("buyEP"+i)) document.getElementById("buyEP"+i).value="Cost:"+ExpantaNum(game.eternity.producers.actuallprice[i-1]).toPrecision(game.precision).replace("e+", "e")+"永恒点数";
	}
	for(let i=4;i<=6;i++){
		if(document.getElementById("ep"+i)) document.getElementById("ep"+i).innerHTML=ExpantaNum.floor(game.eternity.producers.amount[i-1]).toPrecision(game.precision).replace("e+", "e");
		if(document.getElementById("buyEP"+i)) document.getElementById("buyEP"+i).value="Cost:"+ExpantaNum(game.eternity.producers.actuallprice[i-1]).toPrecision(game.precision).replace("e+", "e")+"永恒";
	}
	for(let i=1;i<=4;i++){
		if(document.getElementById("buyst"+i)) document.getElementById("buyst"+i).value="Cost:"+ExpantaNum(game.eternity.timespace.actuallprice[i-1]).toPrecision(game.precision).replace("e+", "e");
	}
}
/*
function loop() {
	
  requestAnimationFrame(loop);
}

requestAnimationFrame(loop);
*/
mainInterval = setInterval(tick,game.delay);
document.getElementById("manual").onclick = () =>{
game.normal.number=ExpantaNum(game.normal.number).add(1);
//document.getElementById("normal number").innerHTML=ExpantaNum.floor(game.normal.number);
getAchievement(1);
}
document.getElementById("cheat").onclick = () =>{
game.eternity.number=1;
game.infinity.infinities=1;
game.eternity.eternities=1;
game.normal.upgrades=[1,1,1,1,1,1,1,1,1,1,1];
game.infinity.upgrades=[1,1,1,1,1,1,1,1,1,5,5,5];
game.confirmconfig.sacrifice=false;
game.confirmconfig.boost=false;
game.normal.generators.autobuyer=[true,true,true,true,true,true,true,true];
game.normal.generators.bulkbuy=[true,true,true,true,true,true,true,true];
game.infinity.generators.autobuyer=true;
game.automator.sacrifice.checked=true;
game.automator.boost.checked=true;
game.normal.challenged=[1,1,1,1,1,1,1,1,1,1,1,1];
game.infinity.challenged=[1,1,1,1,1,1,1,1];
game.infinity.hasinfinitied=true;
game.eternity.haseternitied=true;
game.eternity.milestones=[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

}

let logdelay;
document.getElementById("delay").addEventListener("input",function(){
	logdelay=this.value;
	game.delay=Math.pow(10,logdelay);
	document.getElementById("delaytext").innerHTML=game.delay.toPrecision(game.precision).replace("e+", "e");
});

function changedelay(){
	clearInterval(mainInterval);
	mainInterval = setInterval(tick,game.delay);
}
document.getElementById("precision").addEventListener("input",function(){
	game.precision=document.getElementById("precision").value;
});

var get_ord_number_button = document.getElementById('get_ord_number_button');
var get_ord_number_button_interval;

get_ord_number_button.addEventListener('touchstart', function(event) {
	event.preventDefault();
  get_ord_number_button_interval = setInterval(get_ord_number, game.delay);
});

get_ord_number_button.addEventListener('touchend', function() {
  clearInterval(get_ord_number_button_interval);
});