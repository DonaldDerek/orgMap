(function() {
	
	var height = $(window).height();
	var width = $(window).width();
	console.log(height)
	console.log(width)
	var container = $('.container');
	var counter = 0;

	for(var i=0; i < width/40; i++){
		for(var j=0; j < width/40; j++){
			//console.log("top:"+i + " left:"+j);
			var newBlock = $("<div id='cb-"+i+j+"' class='cb'></div>");
			newBlock.css({
				"left": j*40,
				"top": i*40
			})
			
			if(j%2 === 0 && counter%2 !== 0) {
				newBlock.css({
				"background": "#FEFEFE"
				})
			}
			else if(j%2 !== 0 && counter%2 === 0) {
				newBlock.css({
				"background": "#FEFEFE"
				})
			}	
			container.append(newBlock)
		}
		counter++;
	}	

	/*
	$('.bBlock').draggable({ connectWith: '.cellBlock' })
	.on('dragstart', function(data){
		console.log(data)
	})
	.on('dragend', function(data){
		defaultBlock.css({
			"left": data.x,
			"top": data.y
		})
		console.log(data)
	})
    
    $('.cellBlock').droppable()
     .on('dragover', function(data){
     	this.el.css({
     		"background":"red"
     	})
     })
     .on('drop', function(data){
     	this.el.css({
     		"background":"green"
     	})
     });
*/

})();