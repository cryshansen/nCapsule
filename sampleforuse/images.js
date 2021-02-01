var thumbToOpen = -1;
var thumbToClose = -1;

function openThumbs(selected,open){
	var thumbs = $$('.thumbnailContainer');
	var thumbFx = new Fx.Elements(thumbs, {wait: false, duration: 400, transition: Fx.Transitions.quadOut, onComplete: nextThumbs});
	var thumbFx2 = new Fx.Elements(thumbs, {wait: false, duration: 400, transition: Fx.Transitions.quadIn, onComplete: nextThumbs});
	
	thumbToOpen = selected;
	//thumbToClose = open;
	
	var obj = {};
	if(selected == -1){
		obj[thumbToClose] = {
			'height': [thumbs[thumbToClose].getStyle('height').toInt(), 0]
		};
		thumbFx.start(obj);
		//thumbToClose = -1;
	}else{
		if(thumbToClose == -1){
			thumbs[selected].setStyle('display', 'block');
			obj[selected] = {
				'height': [thumbs[selected].getStyle('height').toInt(), 275]
			};
			thumbFx.start(obj);
			thumbToClose = selected;
		}else{
			obj[thumbToClose] = {
				'height': [thumbs[thumbToClose].getStyle('height').toInt(), 0]
			};
			thumbFx2.start(obj);
			//thumbToClose = -1;
		}
	}
}

function nextThumbs(){
	var thumbs = $$('.thumbnailContainer');
	var thumbFx = new Fx.Elements(thumbs, {wait: false, duration: 400, transition: Fx.Transitions.quadOut});
	
	if(thumbToClose != -1){
		thumbs[thumbToClose].setStyle('display', 'none');
		thumbToClose = -1;
	
	if(thumbToOpen != -1){
		thumbs[thumbToOpen].setStyle('display', 'block');
		var obj = {};
		obj[thumbToOpen] = {
			'height': [thumbs[thumbToOpen].getStyle('height').toInt(), 275]
		};
		thumbFx.start(obj);
		thumbToClose = thumbToOpen;
	}
	}
}