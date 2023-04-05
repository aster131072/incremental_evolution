for (let i = 1; i <= 8; i++) {
  (function(index) {
    const checkbox = document.getElementById("autobuygenerator" + index);
    checkbox.addEventListener("input", function() {
      if (checkbox && checkbox.checked) {
      	var d=new Date();
				var nowtime=d.getTime();
        game.normal.generators.autobuyer[index - 1] = true;
        game.normal.generators.timer[index - 1] = nowtime;
        const generatordelayInput = document.getElementById("generatordelay" + index);
        if (generatordelayInput) {
        	const generatordelay = Math.max(generatordelayInput.value/gameSpeed, game.delay);
          game.normal.generators.autodelay[index - 1] = generatordelay;
          const bulkgeneratorCheckbox = document.getElementById("bulkgenerator" + index);
          if (bulkgeneratorCheckbox && bulkgeneratorCheckbox.checked == false) {
            game.normal.generators.bulkbuy[index - 1] = false; 
          } else {
            game.normal.generators.bulkbuy[index - 1] = true;
          }
        }
      } else if (checkbox) {
        game.normal.generators.autobuyer[index - 1] = false;
      }
    });
  })(i);
}
