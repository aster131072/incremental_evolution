function autobuynormalgenerator(){
	for(i=1;i<=8;i++){
		buymaxnormalgenerator(i);
	}
	
}

const autonormalgenerator = [];
for (let i = 1; i <= 8; i++) {
  (function(index) {
    const checkbox = document.getElementById("autobuygenerator" + index);
    checkbox.addEventListener("input", function() {
      if (checkbox && checkbox.checked) {
        game.normal.generators.autobuyer[index - 1] = true;
        const generatordelayInput = document.getElementById("generatordelay" + index);
        if (generatordelayInput) {
        	if(true){
        		const generatordelay = Math.max(generatordelayInput.value, game.delay);
        	}else{
        		;
        	}
          game.normal.generators.autodelay[index - 1] = generatordelay;
          const bulkgeneratorCheckbox = document.getElementById("bulkgenerator" + index);
          if (bulkgeneratorCheckbox && bulkgeneratorCheckbox.checked == false) {
            game.normal.generators.bulkbuy[index - 1] = false;
            const autogeneratorId = setInterval(function() {
              buynormalgenerator(index);
            }, generatordelay);
            autonormalgenerator[index - 1] = autogeneratorId;
          } else {
            game.normal.generators.bulkbuy[index - 1] = true;
            const autogeneratorId = setInterval(function() {
              buymaxnormalgenerator(index);
            }, generatordelay);
            autonormalgenerator[index - 1] = autogeneratorId;
          }
        }
      } else if (checkbox) {
        game.normal.generators.autobuyer[index - 1] = false;
        clearInterval(autonormalgenerator[index - 1]);
      }
    });
  })(i);
}
