var btn = document.getElementById('login');
var user= import ;
btn.addEventListener('click', function (){
	let name = document.getElementById('user-name').value;
	if (name == ""){
		alert("user is not correct")
	}
	else{
 user.push(name)
	alert(`welcome ${name}`)
	}
})