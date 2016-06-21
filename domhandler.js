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
	newDonor.name = userName.value;
	newDonor.email = userEmail.value;
	newDonor.pledge = parseFloat(amount.value);
    if (document.getElementById('r1').checked) {
  	newDonor.frequency = document.getElementById("r1").value;
	} else {newDonor.frequency = document.getElementById("r2").value;}
	main.setInput(newDonor);
});


cancel.addEventListener("click", function clear(){
	userName.value = "";
	userEmail.value = "";
	amount.value = "";
});

function tableOut (object){
	console.log("DOMhandler", object);
	for (var i = 0; i < object.length; i++) {
		var tabRow = document.createElement("tr");
		document.getElementById("display").appendChild(tabRow);
		var tabName = document.createElement("td");
		tabName.appendChild(document.createTextNode(object[i].name));
		tabRow.appendChild(tabName);
		var tabMoney = document.createElement("td");
		tabMoney.appendChild(document.createTextNode(object[i].pledge));
		tabRow.appendChild(tabMoney);		
		var tabFreq = document.createElement("td");
		tabFreq.appendChild(document.createTextNode(object[i].frequency));
		tabRow.appendChild(tabFreq);
	};
};





