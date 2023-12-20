var logined = 0;
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
		let newtext = document.createTextNode("登陆成功！正在跳转至控制台......");
		newnode.appendChild(newtext);
		document.getElementById("global").append(newnode);
		logined = 1;
	}
	else
	{
		alert("用户名或密码不正确，请重试");
		document.getElementById("usr").value = "";
		document.getElementById("pwd").value = "";
	}
}

function reset()
{
	alert("Page Resetting...");
	logined = 0;
}

function back()
{
	window.location.href = "/";
}

function check_root()
{
	if (document.getElementById("usr").value == "root")
	{
		document.getElementById("usr").value = "";
		alert("Username should not be root!");
	}

	if (Boolean(document.getElementById("usr").value) == false)
	{
		document.getElementById("login_word").setAttribute("disabled", true);
		document.getElementById("login_word").style.cursor = 'not-allowed';
	}
	else
	{
		document.getElementById("login_word").removeAttribute("disabled");
		// console.log("Alive");
		document.getElementById("login_word").style.cursor = 'default';
	}
}
sh = setInterval(check_root, 50);

setInterval(() => {
	if (logined == 1)
		clearInterval(sh);
}, 30);