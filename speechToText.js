let speechRecognitionWindow = window.webkitSpeechRecognition

var recognition = new speechRecognitionWindow()

var instructions = document.querySelector("#instructions");
var startBtn = document.querySelector("#start-btn");
var stopBtn = document.querySelector("#stop-btn");
// var writtenText = $("#your-text");
var content = '';

recognition.continuous = true
recognition.onresult = function(event){
    var current = event.resultIndex;

    var transcript = event.results[current][0].transcript;

    content += transcript;

    // $("#textbox").val(content);
    instructions.text(content);
    console.log(content)

}

recognition.onstart = function () {
    instructions.text("Voice Recognition is on");
}

recognition.onerror = function() {
    instructions.text("Try Again");
}


startBtn.click(function (event) {
    if(content.length){
        content = ''
    }

    recognition.start()
})

stopBtn.click(function(event){
    recognition.stop();
    instructions.text("");
})