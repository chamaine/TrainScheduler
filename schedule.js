	
var database = firebase.data();

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCm4KaJ_amSqvrlw5ylKe1Lg8tum2qHfNY",
    authDomain: "train-schedule-e1908.firebaseapp.com",
    databaseURL: "https://train-schedule-e1908.firebaseio.com",
    projectId: "train-schedule-e1908",
    storageBucket: "train-schedule-e1908.appspot.com",
    messagingSenderId: "1046000128280"
  };
  firebase.initializeApp(config);

  // Data Form

function addRowElement(name, role, start, rate) {
  
  // Calculate the Next Train and Minutes Away dynamically
    	var months = employeeTotalMonths(start);
    	var total = employeeTotalBillingInfo(months, rate);

    	var row = $("<tr>");
    	row.attr('id', "table-row");
    	var markup = "<td>" + name + "</td>" +
                  "<td>" + role + "</td>" +
                  "<td>" + start + "</td>" +
                  "<td>" + months + "</td>" +
                  "<td>" + rate + "</td>" +
                  "<td>" + total + "</td>";
    	row.html(markup);          
    	$("#table-body").append(row);
 	 }

	// Utility function to add "0" in front of the hour or minute if it is less than 10 for display
	// E.g. instead of displaying 1:5 it displays 01:05
	function addZero(i) {
		if (i < 10) {
		    i = "0" + i;
		}
		return i;
	}

	// Utility function to get current time and return in HH:MM format
	function currentDate() {
		var d = new Date();
	    var year = d.getFullYear()-2000;
	    console.log(year);
	    var month = d.getMonth()+1;
	    console.log(month);
	    var dateArray = [];
	    dateArray[0] = year;
	    dateArray[1] = month;
	    return dateArray;
	}

	// function employeeTotalMonths(start) {
	// 	//DD/MM/YY format for start date
	// 	var startArray = start.split("/");

	// 	console.log("Start: " + startArray );
	// 	var year = startArray[2];
	// 	var month = startArray[1];
	// 	var dateArray = currentDate();
	// 	var currentYear = dateArray[0];
	// 	var currentMonth = dateArray[1];

	// 	console.log("emp " + currentYear + currentDate);
	// 	return 0;
	// }

	// function employeeTotalBillingInfo(months, rate) {
	// 	return (months*rate);
	// }

  	
	// // Click function for Submit Button
 //  	function submitEmployeenformation() {

	    event.preventDefault();

	    var trainName = $("#train-name").val().trim();
	    var nextLocation = $("#train-location").val().trim();
	    var frequency = $("#train-minutes").val().trim();
	    var arrival = $("#train-arrival").val().trim();
	    var time = parseInt($("#train-minutes-away").val().trim());

	    // Error conditions
	    // if (empName == "" || empRole == "" || empStart == "" || empRate == "") {
	    //   alert("Please enter all fields to add a train!")
	    //   return;
	    // }

	    // if (isNaN(empRate)) {
	    //   alert("Please enter a number for employee rate!");
	    //   return;
	    // }

	   	database.ref().push({
	   		name: trainName,
	   		destination: nextLocation,
	   		frequency: frequencyMinute,
	   		arrival: arrivalTime,
	   		time: minutesAway
	   	});
	   
	//     $("#emp-name").val("");
	//     $("#emp-role").val("");
	//     $("#emp-date").val("");
	//     $("#emp-rate").val("");
	// }	

	// database.ref().on("child_added", function(childSnapshot) {
	// 	var empName = childSnapshot.val().name;
	//     var empRole = childSnapshot.val().role;
	//     var empStart = childSnapshot.val().start;
	//     var empRate = parseInt(childSnapshot.val().rate);

	//     console.log(empName + empRole + empStart + empRate);
	    
	//     // Add this row to the table
	//     addRowElement(empName, empRole, empStart, empRate);

	// });
	// Install listener for Submit Button
  	$("#submit-button").on("click", submitEmployeenformation);
});