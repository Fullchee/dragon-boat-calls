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
        "description": "The first half of the stroke. Emphasize the  on the rotation of the stroke. Keep your bottom arm straight. Stop at around the mid thigh.",
        "gif": "videos/half-stroke.mp4"
    },
    {
        "name": "Quarter Stroke",
        "description": `<li><Stop at the knee./li>
                        <li><Really focus on grabbing as much water as possible./li>
                        <li>You should feel some tension in your bottom lat </li>
                        <li>The bottom arm should be completely straight</li>`,
        "gif": ""
    },
    {
        "name": "Second Half",
        "description": "The second half of the stroke. Start bending your bottom arm. ",
        "gif": "videos/second-half.mp4"
    },
    {
        "name":"Let it run",
        "description":"Stop paddling",
        "gif":""
    }
    // {
    //     "name": "Recovery",
    //     "description": "Bring your paddle up to the 'Paddles up' position leading with your top arm.",
    //     "gif": ""
    // }
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
        "description":"<p>Place paddle vertically into water to stop the boat from moving</p>",
        "gif":"videos/ready-ready.mp4" // TODO: have a gif of the start of a race
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
        "gif":"videos/feather.mp4"
    },
    {
        "name":"Draw",
        "description":`
      <ul>
          <li>used to straighten up the boat.</li>
          <li>Move water under the boat so the boat moves to one side.</li>
          <li>If every paddler on one side draws, the boat translates/moves to that side.</li>
          <li>Usually called when docking the boat or right before a race.</li>
      </ul>`,
        "gif":"videos/draw.mp4"
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
        "gif":"videos/ready-ready.mp4"
    },
    {
        "name":"Ready ready",
        "description":"Same as 'Race ready'. Race start position, paddles buried in the water, weight over the water",
        "gif":"videos/ready-ready.mp4"
    },
    {
        "name":"Eyes up",
        "description":"call made when the boat isn’t in sync (remember how Ben taught us to watch the people at the front, and not the person sitting in front of you)",
        "gif":""
    },
    {
        "name": "Let it run",
        "description": "Stop paddling. Only stop paddling when your steers calls it. Don't listen to the other boat's steers.",
        "gif": ""
    },
    // {
    //     "name": "Exit Drill",
    //     "description": "",
    //     "gif": ""
    // },
    {
        "name": "Modified Exit",
        "description": "The idea is to really feel that pop when you push off the water which really pushes your body forward. When you get a strong pop off the back, you really feel your body get pushed forward. Notice in the video how I really have to stop myself in this drill midway.",
        "gif": "videos/modified-exit.mp4"
    },
    {
        "name": "Front Lefts Draw",
        "description": "The front 3 left paddlers (not the front) start drawing water towards them in sync. This is usually called when turning during a 2K",
        "gif": ""
    },
    {
        "name": "Back Rights Draw",
        "description": "The back 3 right side paddlers (seat 8, 9, 10) start drawing water towards them in sync. This is sometimes called when turning during a 2K when the coxwain really needs a tight turn.",
        "gif": ""
    },
    {
        "name": "Front Half",
        "description": "Rows 1 through 5",
        "gif": ""
    },
    {
        "name": "Back Half",
        "description": "Rows 6 through 10",
        "gif": ""
    },
    {
        "name": "Pry",
        "description": "This call is never used during a race and rarely called during practice. This is the opposite of drawing. When prying, you push water away from you and away from the boat.",
        "gif": ""
    },
    {
        "name": "Power Now",
        "description":
            `<li>The first two strokes after the start.</li>
            <li>The first stroke after the start, the steers and drummer yell "POWER" and you pull back to the hip</li>
            <li>The second stroke after the start, the steers and drummer yell "NOW" and you reach out to get the full length of the catch.</li>
            `,
        "gif": ""
    },
    {
        "name": "Back Six! Give Me Five, NOW!",
        "description": "The back three rows (the rockets), have to give 5 of their biggest strokes. This is usually called during the 2K when we're tired and we need to get some oomphf",
        "gif": ""
    },
    {
        "name": "Five Five in TWO! ONE!",
        "description": `<li>We need to pick up our cruising speed we lost during the turn.</li>
        <li>So, we have 10 strokes that are like a start to pick up our speed.</li>
        `,
        "gif": ""
    },
    {
        "name": "Turning in TWO! ONE!",
        "description": `<li>Turns are not a time to take a break. - Ben</li>
        <li>The left side paddlers lean.</li>
        <li>The water will get heavier because we will slow down</li>
        `,
        "gif": ""
    },
    {
        "name": "Rights! Power Through!",
        "description": `<li>This is sometimes called during a turn.</li>
        <li>If you paddle on the right on an OC with broken steering, you might notice that the boat starts steering to the left. Physics, google it if you're interested.</li>
        <li>The water will get heavier because we will slow down</li>
        <li>The rights need to keep on paddling strong so the boat will turn.</li>
        <li>If the rights take it easy, we might make a wide turn and lose ~3 seconds per turn</li>`,
        "gif": ""
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
