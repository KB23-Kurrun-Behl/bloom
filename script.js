const playButton = document.getElementById("play-button");
const pauseButton = document.getElementById("pause-button");
const restartButton = document.getElementById("restart-button");
const audioTrack = document.getElementById("audio-track");


function playAudio() {
    audioTrack.play();
}

function pauseAudio() {
    audioTrack.pause();
}

function restartAudio() {
    audioTrack.currentTime = 0;
}