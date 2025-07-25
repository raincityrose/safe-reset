let currentLevel = 1;
let currentIndex = 0;

const activities = {
    1: [
        "Take a deep breath... inhale 🌬️",
        "Now exhale slowly... 😌",
        "Notice 5 things you can see 👀",
        "Text your support person or look at comforting photos 📱"
    ],
    2: [
        "Place a cool object in your hand (ice, metal) 🧊",
        "Distract with counting backwards from 100 🔢",
        "Think of your safe place 🏡",
        "Say out loud: 'This will pass.' 💬"
    ],
    3: [
        "SOS Mode: Tap fingers together slowly 🤏",
        "Repeat: 'I’m safe. I’m grounded.' 🌱",
        "Imagine holding a calm animal 🐕",
        "Stand up and stretch gently 🙆"
    ]
};

function startLevel(level) {
    currentLevel = level;
    currentIndex = 0;
    document.getElementById("welcome-screen").style.display = "none";
    document.getElementById("activity-display").style.display = "block";
    showActivity();
}

function showActivity() {
    document.getElementById("activity-title").innerText = `Level ${currentLevel} Reset`;
    document.getElementById("activity-content").innerText = activities[currentLevel][currentIndex];
}

function nextActivity() {
    currentIndex++;
    if (currentIndex < activities[currentLevel].length) {
        showActivity();
    } else {
        document.getElementById("activity-content").innerText = "You’ve completed this round. 🕊️ You can start again or check in.";
    }
}