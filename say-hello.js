function sayhellotouser()
{
var uname;
uname = document.getElementById("fname").value

document.getElementById("hellomsg").innerHTML = "Greetings, " + uname;

document.getElementById("fname").value = '';
document.getElementById("p1").innerHTML = "Hindi ka miss";
}