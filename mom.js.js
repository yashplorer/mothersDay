var mom = prompt("Are you a mother?","Enter true or false").toLowerCase();
var mothersDay = 12;
var mothersMonth = 5;
var mothersYear = 2013;
switch (mom) {
	case 'true':
		var mothersDayToday = prompt("Is today Mother's Day?","Enter true or false").toLowerCase();
		switch (mothersDayToday) {
			case 'true':
					var numberOfKids = prompt("How many children do you have?","Enter a number");
					if (numberOfKids >= 1) {
						var day = prompt("What day of the month was your first child born?","Enter a number");
						var month = prompt("What month of the year was your first child born?","Enter a number");
						var year = prompt("What year was your first child born?","Enter a number");
						var momYears = mothersYear - year - 1;
						var momMonths = mothersMonth - 14 + month;
						var momDays = mothersDay - day + 31;
						prompt("You've been a mother for " + momYears + " years, " + 4 + " months and " + momDays + " days !");
					}
					else {
						prompt("You need more children to be a mother!");
					}
				break;
			case 'false':
				prompt("This program only works on Mother's Day!");
				break;
			default:
				prompt('Only enter true or false!');			
		}
		break;
	case 'false':
		prompt('This program is only for moms!');
		break;
	default:
		prompt('Only enter true or false!');
}