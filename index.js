const playSound = (letter) => {
    let audioClip = null;
    switch(letter){
        case "w":
            audioClip = "sounds/tom-1.mp3";
            break;
        case "a":
            audioClip = "sounds/tom-2.mp3";
            break;
        case "s":
            audioClip = "sounds/tom-3.mp3";
            break;
        case "d":
            audioClip = "sounds/tom-4.mp3";
            break;            
        case "j":
            audioClip = "sounds/snare.mp3";
            break;
        case "k":
            audioClip = "sounds/kick-bass.mp3";
            break;
        case "l":
            audioClip = "sounds/crash.mp3";
            break;
        default:
            return null;
    }
    let letterSelected = document.querySelector("." + letter);
    letterSelected.classList.add("pressed");
    const sound = new Audio(audioClip);
    sound.play();
    window.setTimeout(() => letterSelected.classList.remove("pressed"), 100);
};

const drumArray = document.querySelectorAll(".drum");

for (let i = 0; i < drumArray.length; i++){
    const letter = drumArray[i].innerText;
    drumArray[i].addEventListener("click", () => playSound(letter));
};

document.addEventListener("keydown", (event) => playSound(event.key));