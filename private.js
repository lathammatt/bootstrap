
var Donations = (function (oldDonations) {
	var info = [
		{name: "Jack",
		email: "blah@gmail.com",
		pledge: 50,
		frequency: "single"},
		
		{name: "Jill",
		email: "blah@gmail.com",
		pledge: 75,
		frequency: "single"},
		
		{name: "John",
		email: "blah@gmail.com",
		pledge: 20,
		frequency: "single"},
		
		{name: "Jane",
		email: "blah@gmail.com",
		pledge: 5,
		frequency: "per lap"},
		
		{name: "Jimmy Crackcorn",
		email: "eyup@gmail.com",
		pledge: 0.10,
		frequency: "per lap"}
	];
	tableOut(info);
	return info;


})(Donations || {});

