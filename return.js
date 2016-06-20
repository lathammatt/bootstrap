// addDonor method, argument the array

var Donations = (function (){

	var input;

	return {
		getInput: function(){
			return input;
		},

		setInput: function addDonor(newData){
			Donations.push(newData);
		}
	};

})();