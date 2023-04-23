
let gameSpeed = 1;

let get_sacrifice = 1;
let get_boost = 1;
let get_infinity = 0;
let infinity_power_effect = 1;
let infinity_power_effect2 = 0;
let infinity_power_exponent = 0.5;
let get_eternity = 0;
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

function tick()
{
	//重置点数
	get_infinity = ExpantaNum.pow(game.normal.number,1/256).times(0.5).round();
	get_eternity = ExpantaNum.pow(game.infinity.number,1/1024).times(0.5).round();
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
	//序数
	get_ordinal_power = ord(game.infinity.ordinal.number);
	get_ordinal_essence_effect = game.infinity.ordinal.essence*8+8;
	if(game.infinity.ordinal.power=="过大"){
		get_ordinal_effect=ExpantaNum.pow(300,get_ordinal_essence_effect);
	}else{
		get_ordinal_effect=ExpantaNum(game.infinity.ordinal.power).add(1).log10().pow(get_ordinal_essence_effect).add(1);
	}
	get_ordinal_number = (game.infinity.ordinal.upgrade.plus*game.infinity.ordinal.upgrade.multi)**game.infinity.ordinal.upgrade.power;
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
		get_iu8_effect=ExpantaNum.pow(game.infinity.timespent,0.5).add(1);
		game.normal.speed=ExpantaNum(game.normal.speed).times(get_iu8_effect);
	} 
	if(game.infinity.upgrades[8]==1) {
		get_iu9_effect=ExpantaNum.pow(2,game.normal.challenged.reduce(function(total, currentValue) { return total + (currentValue === 1 ? 1 : 0); }, 0));
		game.normal.speed=ExpantaNum(game.normal.speed).times(get_iu9_effect);
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
		get_ic2_effect=game.infinity.generators.amount[0];
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
	for(let i=0;i<8;i++){
		game.normal.generators.factor[i]=ExpantaNum.pow(game.normal.multiplier,game.normal.generators.bought[i]).times(game.normal.generators.factor[i]).times(game.normal.speed);
		if(game.normal.challenged[i]==1) {
			get_nc_effect[i]=ExpantaNum(game.normal.generators.amount[i]).add(1).log10().add(1);
			game.normal.generators.factor[i]=ExpantaNum(get_nc_effect[i]).times(game.normal.generators.factor[i]);
		} 


		//软上限
		if(ExpantaNum(game.normal.generators.bought[i]).gte(3000)){
			game.normal.generators.actuallprice[i]=ExpantaNum(game.normal.generators.price[i]).times(ExpantaNum.pow(game.normal.generators.scale[i],ExpantaNum.pow(game.normal.generators.bought[i],2).div(3000)));
		}else{
			if(game.infinity.inchallenge[7]==1) {
				game.normal.generators.actuallprice[i]=ExpantaNum(game.normal.generators.price[i]).times(ExpantaNum.pow(game.normal.generators.scale[i],normal_bought));
			} else{
				game.normal.generators.actuallprice[i]=ExpantaNum(game.normal.generators.price[i]).times(ExpantaNum.pow(game.normal.generators.scale[i],game.normal.generators.bought[i]));
			}
			
		}

		
		if(game.infinity.hasinfinitied) {
			game.infinity.generators.factor[i]=ExpantaNum.pow(game.infinity.multiplier,game.infinity.generators.bought[i]).times(game.infinity.generators.factor[i]).times(game.infinity.speed);
			game.infinity.generators.actuallprice[i]=ExpantaNum(game.infinity.generators.price[i]).times(ExpantaNum.pow(game.infinity.generators.scale[i],game.infinity.generators.bought[i]));
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
	//软上限
	let sacrifice_softcapped=false;
	if(ExpantaNum(get_sacrifice).gt(1e100)) {
		if(game.infinity.challenged[2]==1){
			get_sacrifice=ExpantaNum.pow(get_sacrifice,0.15).times(1e85);
		}else{
			get_sacrifice=ExpantaNum.pow(get_sacrifice,0.1).times(1e90);
		}	
		if(!sacrifice_softcapped) {
			document.getElementById("sacrifice_softcapped").innerHTML="献祭效果超过1e100，受到软上限限制！";
			sacrifice_softcapped=true;
		}
	} else{
		if(sacrifice_softcapped) {
			sacrifice_softcapped=false;
			document.getElementById("sacrifice_softcapped").innerHTML="";
		} 
	}

	//增量
	game.normal.number=ExpantaNum(game.normal.number).add(ExpantaNum(game.normal.generators.factor[0]).times(game.normal.generators.amount[0]).times(gameSpeed).times(game.delay).times(0.001));
	if(game.infinity.hasinfinitied) game.infinity.power=ExpantaNum(game.infinity.power).add(ExpantaNum(game.infinity.generators.factor[0]).times(game.infinity.generators.amount[0]).times(gameSpeed).times(game.delay).times(0.001));
	for(let i=0;i<7;i++){
		game.normal.generators.amount[i]=ExpantaNum(game.normal.generators.amount[i]).add(ExpantaNum(game.normal.generators.factor[i+1]).times(game.normal.generators.amount[i+1]).times(gameSpeed).times(game.delay).times(0.001));
		if(game.infinity.hasinfinitied) game.infinity.generators.amount[i]=ExpantaNum(game.infinity.generators.amount[i]).add(ExpantaNum(game.infinity.generators.factor[i+1]).times(game.infinity.generators.amount[i+1]).times(gameSpeed).times(game.delay).times(0.001));
		
	}
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
	
	document.getElementById("sacrifice_factor").innerHTML=ExpantaNum(game.normal.sacrifice).toPrecision(game.precision).replace("e+", "e");
	document.getElementById("boost_factor").innerHTML=ExpantaNum(game.normal.boost).toPrecision(game.precision).replace("e+", "e");
	if(document.getElementById("sacrifice_effect")) document.getElementById("sacrifice_effect").innerHTML=get_sacrifice.toPrecision(game.precision).replace("e+", "e");
	if(document.getElementById("boost_effect")) document.getElementById("boost_effect").innerHTML=get_boost.toPrecision(game.precision).replace("e+", "e");
	
	document.getElementById("ordinal_number").innerHTML=game.infinity.ordinal.number.toPrecision(game.precision).replace("e+", "e");
	document.getElementById("ordinal_base").innerHTML=Math.floor(game.infinity.ordinal.base);
	document.getElementById("ordinal_essence").innerHTML=Math.floor(game.infinity.ordinal.essence);
	document.getElementById("ordinal_essence_effect").innerHTML=get_ordinal_essence_effect.toPrecision(game.precision).replace("e+", "e");
	document.getElementById("ordinal_effect").innerHTML=get_ordinal_effect.toPrecision(game.precision).replace("e+", "e");
	document.getElementById("ordinal_number_get").innerHTML=get_ordinal_number.toPrecision(game.precision).replace("e+", "e");
	if(game.infinity.ordinal.power=="过大"){
		document.getElementById("ordinal_power").innerHTML="过大";
	}else{
		document.getElementById("ordinal_power").innerHTML=game.infinity.ordinal.power.toPrecision(game.precision).replace("e+", "e");
	}
	if(get_ordinal_power=="过大"){
		document.getElementById("ordinal_power_get").innerHTML="过大";
	}else{
		document.getElementById("ordinal_power_get").innerHTML=get_ordinal_power.toPrecision(game.precision).replace("e+", "e");
	}
	
		
	

	document.getElementById("ou1").value="Cost:"+ou_cost[0].toPrecision(game.precision).replace("e+", "e")+"序数能量";
	document.getElementById("ou2").value="Cost:"+ou_cost[1].toPrecision(game.precision).replace("e+", "e")+"序数能量";
	document.getElementById("ou3").value="Cost:"+ou_cost[2].toPrecision(game.precision).replace("e+", "e")+"序数能量";
	document.getElementById("ou4").value="Cost:"+ou_cost[3].toPrecision(game.precision).replace("e+", "e")+"无限点数";
	
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
			document.getElementById("eternity number get").innerHTML=get_eternity;
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

	if(game.infinity.hasinfinitied){
		document.getElementById("infinity number").innerHTML="你有"+ExpantaNum(game.infinity.number).toPrecision(game.precision).replace("e+", "e")+"无限点数。";
		let d=new Date();
		game.infinity.timespent=ExpantaNum(d.getTime()-game.infinity.starttime).div(1000);
		document.getElementById("infinity time").innerHTML="上次无限到现在过了"+ExpantaNum(game.infinity.timespent).toPrecision(game.precision).replace("e+", "e")+"秒。";
	} 
	if(game.eternity.haseternitied){
		document.getElementById("eternity number").innerHTML="你有"+ExpantaNum(game.eternity.number).toPrecision(game.precision).replace("e+", "e")+"永恒点数。";
		let d=new Date();
		game.eternity.timespent=ExpantaNum(d.getTime()-game.eternity.starttime).div(1000);
		document.getElementById("eternity time").innerHTML="上次永恒到现在过了"+ExpantaNum(game.eternity.timespent).toPrecision(game.precision).replace("e+", "e")+"秒。";
	} 

	if(document.getElementById("normal number")) document.getElementById("normal number").innerHTML=ExpantaNum.floor(game.normal.number).toPrecision(game.precision).replace("e+", "e");
	if(document.getElementById("infinity_power")) document.getElementById("infinity_power").innerHTML=ExpantaNum.floor(game.infinity.power).toPrecision(game.precision).replace("e+", "e");
	if(document.getElementById("infinity_power_effect")) document.getElementById("infinity_power_effect").innerHTML=ExpantaNum.floor(infinity_power_effect).toPrecision(game.precision).replace("e+", "e");
	if(document.getElementById("infinity_power_effect2")) document.getElementById("infinity_power_effect2").innerHTML=ExpantaNum(infinity_power_effect2).toPrecision(game.precision).replace("e+", "e");
	
	
	
	for(let i=1;i<=8;i++){
		if(document.getElementById("normalgenerator"+i)) document.getElementById("normalgenerator"+i).innerHTML=ExpantaNum.floor(game.normal.generators.amount[i-1]).toPrecision(game.precision).replace("e+", "e");
		if(document.getElementById("normalgeneratormultiplyer"+i)) document.getElementById("normalgeneratormultiplyer"+i).innerHTML=ExpantaNum.floor(game.normal.generators.factor[i-1]).toPrecision(game.precision).replace("e+", "e");
		if(document.getElementById("buyNG"+i)) document.getElementById("buyNG"+i).value="Cost:"+ExpantaNum(game.normal.generators.actuallprice[i-1]).toPrecision(game.precision).replace("e+", "e");
		if(game.infinity.hasinfinitied){
			if(document.getElementById("infinitygenerator"+i)) document.getElementById("infinitygenerator"+i).innerHTML=ExpantaNum.floor(game.infinity.generators.amount[i-1]).toPrecision(game.precision).replace("e+", "e");
			if(document.getElementById("infinitygeneratormultiplyer"+i)) document.getElementById("infinitygeneratormultiplyer"+i).innerHTML=ExpantaNum.floor(game.infinity.generators.factor[i-1]).toPrecision(game.precision).replace("e+", "e");
			if(document.getElementById("buyIG"+i)) document.getElementById("buyIG"+i).value="Cost:"+ExpantaNum(game.infinity.generators.actuallprice[i-1]).toPrecision(game.precision).replace("e+", "e");
		}
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
document.getElementById("normal number").innerHTML=ExpantaNum.floor(game.normal.number);
getAchievement(1);
}
document.getElementById("cheat").onclick = () =>{
//game.normal.number=ExpantaNum(game.normal.number).add(10);
game.infinity.number=1;
game.infinity.infinities=1;
//game.normal.upgrades=[1,1,1,1,1,1,1,1,1,1,1];
//game.infinity.upgrades=[1,1,1,1,1,1,1,1,1,5,5,5];
//game.normal.generators.autobuyer=[true,true,true,true,true,true,true,true];
//game.normal.challenged=[1,1,1,1,1,1,1,1,1,1,1,1];
//game.infinity.challenged=[1,1,1,1,1,1,1,1];
game.infinity.hasinfinitied=true;
/*
	if(gameSpeed==1){
		gameSpeed=1000;
	}
	else{
		gameSpeed=1;
	}
	*/
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