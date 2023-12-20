function check()
{
	let user = "admin";
	let passwd = "admin";
	let getUsername = document.getElementById("usr").value;
	console.log(getUsername);
	let getPasscode = document.getElementById("pwd").value;
	console.log(getPasscode);
	if (getUsername == user && getPasscode == passwd)
	{
		console.log("hi");
		document.getElementById("form").remove();

		let newnode = document.createElement("p");
		let newtext = document.createTextNode("Login Successful, redirecting you to control console......");
		newnode.appendChild(newtext);

		document.getElementById("global").append(newnode);
	}
	else
	{
		alert("Username or Password is not correct, please try again!");
		document.getElementById("usr").value = "";
		document.getElementById("pwd").value = "";
	}
}

function reset()
{
	alert("Page Resetting...");
}

function back()
{
	window.location.href = "/Changjiang.html"; 
}

function check_root()
{
	if(document.getElementById("usr").value == "root")
	{
		document.getElementById("usr").value = "";
		alert("Username should not be root!");
	}
}

setInterval(check_root, 50);