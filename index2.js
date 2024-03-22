var x = document.getElementById("myAudio"); 

function playAudio() { 
x.play(); 
} 

window.onload = function() {
    playAudio();
    console.log("Audio is playing...");
};