"use strict";

let commands;

const backupPoolCommands = [
    {
        "name":"Paddles up",
        "description":`
      <ul>
          <li>Ready to paddle
              <li>Paddle out of the water but you are in your position ready to perform the catch</li>
              <li>back straight</li>
              <li>bottom arm extended</li>
              <li>rotation from your core</li>
          </li>
      </ul>`,
        "gif":"videos/paddles-up.mp4"
    },
    {
        "name": "Catch",
        "description": `
           <ul>
               <li>Stretch as far as you can.</li>
               <li>Imagine spearing a fish in front of you.</li>
               <li>Another analogy: Imagine pole vaulting and putting all your weight down on your paddle
                   <li>makes more sense on the actual boat</li>
               </li>
           </ul>`,
        "gif": "videos/catch.mp4"
    },
    {
        "name": "Half Stroke",
        "description": "The first half of the stroke. Emphasis on the rotation of the stroke. Keep your bottom arm straight. Stop at around the mid thigh.",
        "gif": ""
    },
    {
        "name": "Second Half",
        "description": "The second half of the stroke. Start bending your bottom arm. ",
        "gif": ""
    },
    {
        "name": "Recovery",
        "description": "Bring your paddle up to the 'Paddles up' position leading with your top arm.",
        "gif": ""
    }

];

// deep copy of the pool commands
const poolCommands = JSON.parse(JSON.stringify(backupPoolCommands));

const backupLakeCommands = [
    {
        "name":"Back it down",
        "description":"make small strokes with your paddle backwards to move the boat backwards/out of the dock",
        "gif":"videos/back-it-down.mp4"
    },
    {
        "name":"Hold",
        "description":`
      <ul>
          <li>Place your paddle in the water to slow/stop the boat’s momentum
              <li>also known as ‘check’ - you may hear this at regattas</li>
          </li>
      </ul>`,
        "gif":"videos/hold.mp4"
    },
    {
        "name":"Hold hard",
        "description":"place paddle vertically into water to stop the boat from moving",
        "gif":"" // TODO: have a gif of the start of a race
    },
    {
        "name":"Feather",
        "description":`
      <ul>
          <li>Run paddle back and forth across water
              <li>Imagine spreading peanut butter on toast mmmm to hold the boat steady
              </li>
              <li>Keeps the boat stable, even in the most rugged water conditions.</li>
              <li>Usually called when we want paddlers to change seats or switch boats.</li>
          </li>
      </ul>`,
        "gif":""
    },
    {
        "name":"Draw",
        "description":`
      <ul>
          <li>used to straighten up the boat.</li>
          <li>Paddles placed perpendicularly to the side of the boat and strokes taken towards the boat</li>
          <li>If every paddler on one side draws, the boat translates/moves to that side.</li>
          <li>Usually called when docking the boat or right before a race.</li>
      </ul>`,
        "gif":""
    },
    {
        "name":"Paddles up",
        "description":`
      <ul>
          <li>Ready to paddle
              <li>Paddle out of the water but you are in your position ready to perform the catch</li>
              <li>back straight</li>
              <li>bottom arm extended</li>
              <li>rotation from your core</li>
          </li>
          <li>Other teams might call this an A Frame.</li>
      </ul>`,
        "gif":"videos/paddles-up.mp4"
    },
    {
        "name":"Take it away",
        "description":"start paddling",
        "gif":"videos/take-it-away.mp4"
    },
    {
        "name":"Race ready",
        "description":"Same as 'Ready Ready'. Race start position, paddles buried in the water, weight over the water",
        "gif":"videos/race-ready.mp4"
    },
    {
        "name":"Ready ready",
        "description":"Same as 'Race ready'. Race start position, paddles buried in the water, weight over the water",
        "gif":"videos/race-ready.mp4"
    },
    {
        "name":"Eyes up",
        "description":"call made when the boat isn’t in sync (remember how Ben taught us to watch the people at the front, and not the person sitting in front of you)",
        "gif":""
    },
    {
        "name":"Let it run",
        "description":"Stop paddling",
        "gif":""
    },
    {
        "name": "Exit Drill",
        "description": "",
        "gif": ""
    },
    {
        "name": "Modified Exit",
        "description": "The idea is to really feel that pop when you push off the water which really pushes your body forward. When you get a strong pop off the back, you really feel your body get pushed forward. Notice in the video how I really have to stop myself in this drill midway.",
        "gif": "videos/modified-exit.mp4"
    }
];

// deep copy of lake commands
const lakeCommands = JSON.parse(JSON.stringify(backupLakeCommands));

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
 */
function loadNextCommand() {
    const feedbackButtons = document.getElementById("feedbackButtons");

    document.getElementById("command").innerHTML = commands[0].name;
    document.getElementById("description").innerHTML = commands[0].description;
    document.getElementById("answer").style.display = "none";
    feedbackButtons.style.display = "none";

    setTimeout(
        function() {
            document.getElementById("answer").style.display = "inline";
            document.getElementById('response').innerHTML =
            `<video autoplay="autoplay" loop="loop" muted="muted" width="400" height="300">
                <source src="${commands[0].gif}" type="video/mp4" />
                I haven't made a video for this command yet.
            </video>`;
            feedbackButtons.style.display = "inline";
        }, 5000);

    timer(5);
}

function learnLakeCommands() {
    document.getElementById("start").style.display = "none";
    document.getElementById("question").style.display = "inline";
    commands = lakeCommands;
    loadNextCommand();
}

function learnPoolCommands() {
    document.getElementById("start").style.display = "none";
    document.getElementById("question").style.display = "inline";
    commands = poolCommands;
    loadNextCommand();
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
        commands = JSON.parse(JSON.stringify(backupLakeCommands));
        alert("Congrats! You finished!");

    }
    else {
        loadNextCommand();
    }
}

/**
 * Run when the "Not Yet!" button is pressed
 */
function notYet() {
    loadNextCommand();
}
