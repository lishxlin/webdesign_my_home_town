var play = document.getElementById("content1");
var transport = document.getElementById("content2");

function to_play()
{
	play.style.backgroundColor = "rgba(0, 117, 255, 0.2)";
	setTimeout(function (){
		play.style.backgroundColor = "rgba(0, 0, 0, 0)";
	} ,1000);
}

function to_transport()
{
	transport.style.backgroundColor = "rgba(0, 117, 255, 0.2)";
	setTimeout(function (){
		transport.style.backgroundColor = "rgba(0, 0, 0, 0)";
	} ,1000);
}