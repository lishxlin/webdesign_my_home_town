var images = ['LINBO.png', 'THE_YELLOW.png', 'WUHAN_CHANGJIANGBRIDGE.png'];
var index = 0;
var img = document.getElementById("images");

function change()
{
	img.style.opacity = 0;
	setTimeout(function()
	{
		index = (index + 1) % images.length;
		img.src = 'images/looping/' + images[index];
		img.style.opacity = 1;
	}, 500)

}

setInterval(change, 5000);