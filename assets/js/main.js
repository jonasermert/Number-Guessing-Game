let showAttempts = document.getElementById("showAttempts")
let showCustomInput = document.getElementById("showCustomInput")
let customNum = document.getElementById("customNum")
let attempt = document.getElementById("attempt")
let attempts = document.getElementById("attempts")
let numInput = document.getElementById("numInput")
let radioFour = document.getElementById("radioFour")
let radioFive = document.getElementById("radioFive")
let radioSix = document.getElementById("radioSix")
let custom = document.getElementById("custom")
let addText = document.getElementById("addText")
let randomNum = Math.floor(Math.random() * 100) + 1

console.log(randomNum)

getRechnen = () => {
    if (radioFour.checked) {
        attempts.innerHTML = radioFour.value
        showCustomInput.style.display = "none"
        showAttempts.style.display = "block"
    } else if (radioFive.checked) {
        attempts.innerHTML = radioFive.value
        showCustomInput.style.display = "none"
        showAttempts.style.display = "block"
    } else if (radioSix.checked) {
        attempts.innerHTML = radioSix.value
        showCustomInput.style.display = "none"
        showAttempts.style.display = "block"
    } else if (custom.checked) {
        attempts.innerHTML = customNum.value
        showCustomInput.style.display = "block"
        showAttempts.style.display = "block"
    }

    getBingo()
    displayInfo()
    counter()

}

let index = 0
counter = () => {
    if (radioFour.checked && index >= radioFour.value) {
        addText.innerHTML = `<p>Unlucky, attempts ended :(</p>`
        return
    } else if (radioFive.checked && index >= radioFive.value) {
        addText.innerHTML = `<p>Unlucky, attempts ended :(</p>`
        return
    } else if (radioSix.checked && index >= radioSix.value) {
        addText.innerHTML = `<p>Unlucky, attempts ended :(</p>`
        return
    } else if (custom.checked && index >= customNum.value) {
        addText.innerHTML = `<p>Unlucky, attempts ended :(</p>`
        return
    }
    index = index + 1
    attempt.innerHTML = index
}

getBingo = () => {
    if (numInput.value == randomNum) {
        addText.innerHTML = `<p>Yes!! You got me in ${index + 1}, i'm ${randomNum}. <a href="index.html">You win!! Play Again</a></p>`
    }
}

displayInfo = () => {
    if (numInput.value < randomNum) {
        addText.innerHTML = `<p>${index + 1}- You need to guess higher than ${numInput.value}, try again...</p>`
    } else if (numInput.value > randomNum) {
        addText.innerHTML = `<p>${index + 1}- You need to guess lower than ${numInput.value}, try again...</p>`
    }
}

attemptsFunc = () => {
    attempt.innerHTML = 0
    if (radioFour.checked) {
        index = 0
        attempts.innerHTML = radioFour.value
        showCustomInput.style.display = "none"
        showAttempts.style.display = "none"
    } else if (radioFive.checked) {
        index = 0
        attempts.innerHTML = radioFive.value
        showCustomInput.style.display = "none"
        showAttempts.style.display = "none"
    } else if (radioSix.checked) {
        index = 0
        attempts.innerHTML = radioSix.value
        showCustomInput.style.display = "none"
        showAttempts.style.display = "none"
    } else if (custom.checked) {
        index = 0
        attempts.innerHTML = customNum.value
        showCustomInput.style.display = "block"
        showAttempts.style.display = "none"
    }
}