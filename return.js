// addDonor method, argument the array

var main = (function (){

	var input;

	return {
		getInput: function(){
			return input;
		},

		setInput: function addDonor(newData){
			console.log("HELLO", Donations);
			Donations.push(newData);
			var clearSpot = document.getElementById("display");
			while (clearSpot.firstChild) {
    		clearSpot.removeChild(clearSpot.firstChild);
				}
			tableOut(Donations);
		}
	};
	return Donations;

})(Donations || {});