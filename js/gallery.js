alert('Наведите на фотографии!');
function upDate(previewPic){
	//changing the background-image for the div element
	let src = previewPic.src
	document.getElementById('image').style.backgroundImage = "url('"+ src +"')";
	document.getElementById('image').innerHTML = previewPic.alt;
}
function unDo(){
	document.getElementById('image').style.backgroundImage = "url('')";
	document.getElementById('image').innerHTML = "Hover an image to display the alt text";
}
