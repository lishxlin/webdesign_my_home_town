document.getElementById('bridge').addEventListener('click', function() {
	window.location.href = "/wuhan_bridge.html"; // Replace with your actual URL
});

document.getElementById('huanghe').addEventListener('click', function() {
	window.location.href = "/huanghe.html"; // Replace with your actual URL
});

document.getElementById('daqiao').addEventListener('click', function() {
	window.location.href = "/Changjiang.html"; // Replace with your actual URL
});

function login(args)
{
	switch (args)
	{
		case 1:
			window.location.href = "/login.html";
			break;
		default:
			console.log("Failed to redirect. Check your statement!");
	}
}