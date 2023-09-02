
function make_sound(buttonInnerHTML) {
switch(buttonInnerHTML){
    case "w": var sound = new Audio('/sounds/tom-1.mp3');
    sound.play();
    break;
    case "a": var sound = new Audio('/sounds/tom-2.mp3');
    sound.play();
    break;
    case "s": var sound = new Audio('/sounds/tom-3.mp3');
    sound.play();
    break;
    case "d": var sound = new Audio('/sounds/tom-4.mp3');
    sound.play();
    break;
    case "j": var sound = new Audio('/sounds/snare.mp3');
    sound.play();
    break;
    case "k": var sound = new Audio('/sounds/crash.mp3');
    sound.play();
    break;
    case "l": var sound = new Audio('/sounds/kick-bass.mp3');
    sound.play();
    break;
    default: console.log(buttonInnerHTML);
}

}

function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);
}


document.addEventListener("keydown", function(presskey) {
    var key = presskey.key.toLowerCase();
    make_sound(key);
    buttonAnimation(key);
    
});

// Event-Handler für jeden Button
document.getElementById("buttonW").addEventListener("click", function() {
    make_sound("w");
    buttonAnimation("w");
});


document.getElementById("buttonA").addEventListener("click", function() {
    make_sound("a");
    buttonAnimation("a");
});

document.getElementById("buttonS").addEventListener("click", function() {
    make_sound("s");
    buttonAnimation("s");
});

document.getElementById("buttonD").addEventListener("click", function() {
    make_sound("d");
    buttonAnimation("d");
});

document.getElementById("buttonJ").addEventListener("click", function() {
    make_sound("j");
    buttonAnimation("j");
});

document.getElementById("buttonK").addEventListener("click", function() {
    make_sound("k");
    buttonAnimation("k");
});

document.getElementById("buttonL").addEventListener("click", function() {
    make_sound("l");
    buttonAnimation("l");
});
