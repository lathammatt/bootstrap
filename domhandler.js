// function with Donations.setInfo(value of input from eventlistener)
// 
// same returns info to table
// 
var userName = document.getElementById("custname");
var userEmail = document.getElementById("custEmail");
var radios = document.getElementsByName("donation");
var amount = document.getElementById("money");
var button = document.getElementById("donbut");
var cancel = document.getElementById("canbut");	

var newInfo = [];
button.addEventListener("click", function tally(){
	var newDonor = {};
	newDonor.name = userName.value;
	newDonor.pledge = amount.value;
	for (var i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
    	newDonor.frequency = radios.value;
        break;
    };
    
};

})




