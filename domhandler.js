// function with Donations.setInfo(value of input from eventlistener)
// 
// same returns info to table
// 
var userName = document.getElementById("custname");
var userEmail = document.getElementById("custemail");
var radios = document.getElementsByName("donation");
var amount = document.getElementById("money");
var button = document.getElementById("donbut");
var cancel = document.getElementById("canbut");	


var newDonor = {};
button.addEventListener("click", function tally(){
	console.log("event", event);
	newDonor.name = userName.value;
	newDonor.email = userEmail.value;
	newDonor.pledge = parseFloat(amount.value);
    if (document.getElementById('r1').checked) {
  	newDonor.frequency = document.getElementById("r1").value;
	} else {newDonor.frequency = document.getElementById("r2").value;}
    // info.push(newDonor);
;
console.log("new", newDonor);

});

cancel.addEventListener("click", function clear(){
	userName.value = "";
	userEmail.value = "";
	amount.value = "";
})




