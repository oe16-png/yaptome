function yap() {
sentences = document.getElementById("text").value.split(". ")
currentIndex = 0
readnext()
}
let sentences = []
let currentIndex= 0
let rate = 1

function readnext() {
if (currentIndex>sentences.length) return
let utterance= new SpeechSynthesisUtterance(sentences[currentIndex])
let levelofyap = parseFloat (document.getElementById("speedbox").value)
utterance.rate = levelofyap
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

function end(){
    speechSynthesis.cancel()
}
/*

*/
utterance.rate
speedbox
