
var Donations = (function (){
	var info = [
		{name: "Jack",
		pledge: 50,
		frequency: "single"},
		
		{name: "Jill",
		pledge: 75,
		frequency: "single"},
		
		{name: "John",
		pledge: 20,
		frequency: "single"},
		
		{name: "Jane",
		pledge: 5,
		frequency: "per lap"},
		
		{name: "Jimmy Crackcorn",
		pledge: 0.10,
		frequency: "per lap"}
	];

	return{
		getInfo: function(){
			return info;
		},
		setInfo: function (newData){
			info.push(newData);
		}
	};


})(Donations);