function yap() {
sentences = document.getElementById("text").value.split(". ")
currentIndex = 0
readnext()
}
let sentences = []
let currentIndex= 0
let rate = 1
let pitch = 1
function readnext() {
if (currentIndex>sentences.length) return
let utterance= new SpeechSynthesisUtterance(sentences[currentIndex])
let levelofyap = parseFloat (document.getElementById("speedbox").value)
utterance.rate = levelofyap
let squeaking = parseFloat (document.getElementById("squeeker").value)
utterance.pitch = squeaking
speechSynthesis.speak(utterance)
}

function wait() {
    ispaused = true
    speechSynthesis.pause()
}

function go() {
    ispaused = false
    speechSynthesis.resume()
}

rate.onchange = () => {
  rateValue.textContent = rate.value;
}
pitch.onchange = () => {
  rateValue.textContent = pitch.value;
}

function end(){
    speechSynthesis.cancel()
}

let $input = document.querySelector("#speedbox") ;
const SPEEDBOX_ALLOWED_CHARS_REGEXP = /[0-9.]+/
$input.addEventListener("beforeinput", e =>
    {if (e.data && !SPEEDBOX_ALLOWED_CHARS_REGEXP.test(e.data)){e.preventDefault();

}
}) ;





/*
utterance.rate
speedbox

*/
