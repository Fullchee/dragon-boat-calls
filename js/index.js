"use strict";

const command = document.getElementById("command");
const description = document.getElementById("description");
const feedbackButtons = document.getElementById("feedbackButtons");
 
const poolCommands = [
	"Paddles Up: ",
	"Catch",
	"Half Stroke",
	"Second Half"
];

const backupCommands = [  
   // {  
   //    "name":"Back it down",
   //    "description":"make small strokes with your paddle backwards to move the boat backwards/out of the dock",
   //    "gif":""
   // },
   // {  
   //    "name":"Hold",
   //    "description":"place your paddle in the water to slow/stop the boat’s momentum (also known as ‘check’ - you may hear this at regattas)",
   //    "gif":""
   // },
   // {  
   //    "name":"Hold hard",
   //    "description":"place paddle vertically into water to stop the boat from moving",
   //    "gif":""
   // },
   // {  
   //    "name":"Feather",
   //    "description":"run paddle back and forth across water (imagine spreading peanut butter on toast mmmm) to hold the boat steady",
   //    "gif":""
   // },
   // {  
   //    "name":"Draw",
   //    "description":"used to straighten up the boat. Paddles placed perpendicularly to the side of the boat and strokes taken towards the boat",
   //    "gif":""
   // },
   // {  
   //    "name":"Paddles up",
   //    "description":"ready to paddle - paddle out of the water but you are in your position ready to perform the catch; back straight, bottom arm extended, rotation from your core",
   //    "gif":""
   // },
   // {  
   //    "name":"Take it away",
   //    "description":"start paddling",
   //    "gif":""
   // },
   // {  
   //    "name":"Race ready",
   //    "description":"Race start p",
   //    "gif":""
   // },
   // {  
   //    "name":"Ready ready",
   //    "description":"race start position, paddles buried in the water, weight over the water",
   //    "gif":""
   // },
   // {  
   //    "name":"Eyes up",
   //    "description":"call made when the boat isn’t in sync (remember how Ben taught us to watch the people at the front, and not the person sitting in front of you)",
   //    "gif":""
   // },
   {  
      "name":"Let it run",
      "description":"Stop paddling",
      "gif":""
   }
];

let commands = JSON.parse(JSON.stringify(backupCommands))

const seats = {
	"Seat": "row (eg. seat 4 = 4th row)",
	"Pacers": "seats 1-3",
	"Engine (room)": "seats 4-7",
	"Rockets": "seats 8-10",
	"Pod": "the boat can be split up into pods of 2 rows. Seats 1-2, 3-4, 5-6, 7-8, 9-10"
};

/**
 * load the first command and it's description.
 * Then show the answer a few seconds later.
 * TODO: show a 5,4,3,2,1 timer
 * TODO: hide the buttons when not present
 */
function loadNextCommand() {
	document.getElementById("command").innerHTML = commands[0].name;
	description.innerHTML = commands[0].description;
	document.getElementById("answer").style.display = "none";
	feedbackButtons.style.display = "none";

	setTimeout(
    	function() {
    		document.getElementById("answer").style.display = "inline";
      		document.getElementById('response').innerHTML = '<img src="./images/Capture.GIF" size=></img>';
      	feedbackButtons.style.display = "inline";
    	}, 5000);

	timer(5);
}

function learnLakeCommands() {
	document.getElementById("start").style.display = "none";
	document.getElementById("question").style.display = "inline";
	loadNextCommand();
}

function learnPoolCommands() {
	document.getElementById("start").style.display = "none";
	alert("Sorry, I haven't worked on the pool commands yet");
}

/**
 *  Run when the "Got It" button is pressed
 */
function gotIt() {
	commands.shift();
	if (commands.length === 0) {
		document.getElementById("start").style.display = "none";
		document.getElementById("question").style.display = "none";
		document.getElementById("answer").style.display = "none";

		// reset
		document.getElementById("start").style.display = "inline";
		commands = JSON.parse(JSON.stringify(backupCommands))
		alert("Congrats! You finished!");

	} else {
		loadNextCommand();
	}
}

/**
 * Run when the "Not Yet!" button is pressed
 */
function notYet() {
	// Working memory has a capacity of around 3-7 items. 
	const GAP = 3;
	moveArrayItem(commands, 0, GAP);
	loadNextCommand();
}

/** 
 * Moves the item in "array" in the "from" index to the "to" index
 * 
 * @param {Array<*>} array
 * @param {array index of array} from - index of item we're moving FROM
 * @param {array index of array} to - index we're moving TO
 */
function moveArrayItem(array, from, to) {
    array.splice(to, 0, array.splice(from, 1)[0]);
}
