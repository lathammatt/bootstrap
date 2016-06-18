// addDonor method, argument the array

var Donations = (function (){

	var info;

		return{
		getInfo: function(){
			return info;
		},

		setInfo: function addDonor(newData){
			info.push(newData);
		}
	};

})();