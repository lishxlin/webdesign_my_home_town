var count = 0;
document.getElementById('bridge').addEventListener('click', function() {
	window.location.href = "/wuhan_bridge.html"; // Replace with your actual URL
});

document.getElementById('huanghe').addEventListener('click', function() {
	window.location.href = "/huanghe.html"; // Replace with your actual URL
});

document.getElementById('daqiao').addEventListener('click', function() {
	window.location.href = "/Changjiang.html"; // Replace with your actual URL
});

document.getElementById('license_bar').addEventListener('click', function() {
	let text = "MIT License\n\nCopyright (c) 2023 LiShXlin\n\nPermission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the \"Software\"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:\n\nThe above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.\n\nTHE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\n\n\nMy Home Town © 2023 by Li ShXlin is licensed under Attribution-NonCommercial-ShareAlike 4.0 International. To view a copy of this license, visit http://creativecommons.org/licenses/by-nc-sa/4.0/";
	console.log(text);
	alert(text);
});

function identi()
{
	if (count == 3)
	{
		count = 0;
		login(1);
	}
}

setInterval(identi, 10);

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

setInterval(function() {
	if (count <= 2)
		count = 0;
} ,500);