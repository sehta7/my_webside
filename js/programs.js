function showPhoto(){
	var see = document.getElementById('photo');
		
	see.onclick = function(){
		var photo = document.getElementById('quad');
		if(photo.style.display === 'none'){
			photo.style.display = 'block';
		}
	};
};

function hide(){
	
	if (this.event.currentTarget.nextElementSibling.hidden === true) {
		this.event.currentTarget.nextElementSibling.hidden = false;
	}
	else{
		this.event.currentTarget.nextElementSibling.hidden = true;
	}

};

