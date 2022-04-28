

document.querySelectorAll("button").forEach(item => {item.addEventListener("click", function () {
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML)
}) })

document.querySelectorAll('button').forEach(item => {item.addEventListener("mouseover", function(){
    var buttonInnerHTML = this.innerHTML;
    makeAnimation(buttonInnerHTML)
})})

document.querySelectorAll('button').forEach(item => {item.addEventListener("mouseout", function() {
    var buttonInnerHTML = this.innerHTML;
    removeAnimation(buttonInnerHTML)
})} )

document.addEventListener("keypress", function(event){
    makeSound(event.key)
    makeAnimation(event.key)
})
document.addEventListener("keyup", function(event) {
    removeAnimation(event.key)
})


function makeSound(key){
    switch(key) {
        case"w":
            var audio = new Audio('sounds/crash.mp3')
            audio.play()
        break;

        case "a":
            var audio = new Audio('sounds/kick-bass.mp3')
            audio.play()
        break;

        case "s":
            var audio = new Audio('sounds/snare.mp3')
            audio.play()
        break;

        case "d":
            var audio = new Audio('sounds/tom-1.mp3')
            audio.play()
        break;

        case "j":
            var audio = new Audio('sounds/tom-2.mp3')
            audio.play()
        break;

        case "k":
            var audio = new Audio('sounds/tom-3.mp3')
            audio.play()
        break;

        case "l":
            var audio = new Audio('sounds/tom-4.mp3')
            audio.play()
        break;

        default: console.log(key + " is not an option!")
    }
}

function makeAnimation(theKey) {
var activeNote = document.querySelector("." + theKey).classList.add("pressed")
}

function removeAnimation(theKey) {
        document.querySelector("." + theKey).classList.remove("pressed")
}
