const speechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition;
let microphoneBtn = document.querySelector(".microphoneBtn");

function startListening() {
    const recog = new speechRecognition();
    recog.start();

    recog.onstart = microphoneBtn.classList.add("listen");

    recog.onresult = function (data) {
        microphoneBtn.classList.remove("listen");
        handleResults(data);
    };
}

function handleResults(data) {
    let text = data.results[0][0].transcript;
    text = text.toLowerCase();

    ProcessCommand(text);
}

function ProcessCommand(userText) {

    if (userText.includes('instagram')) {
        Speak("Opening Instagram");
        window.open("https://www.instagram.com", "_blank");
    } else if (userText.includes("whatsapp")) {
        Speak("Opening Whatsapp");
        window.open("https://web.whatsapp.com/", "_blank");
    } else if (userText.includes("the") && userText.includes("time")) {
        Speak("The Time is: " + getCurrentTime());
    } else if (userText.includes("facebook") || userText.includes("fb")) {
        Speak("Opening Facebook");
        window.open("https://www.facebook.com/", "_blank");
    } else if (userText.includes("linkedin")) {
        Speak("Opening LinkedIn");
        window.open("https://www.linkedin.com/feed/", "_blank");
    } else if (userText.includes("telegram")) {
        Speak("Opening Telegram");
        window.open("https://web.telegram.org/k/", "_blank");
    } else if (userText.includes("github")) {
        Speak("Opening Github");
        window.open("https://github.com/", "_blank");
    }else {
        console.log("else");
        Speak("Sorry, I can't do these type of tasks");
    }


}

function getCurrentTime() {
    const date = new Date();

    let hour = date.getHours();
    let minutes = date.getMinutes();

    return `${hour} ${minutes}`;
}

function Speak(text) {
    const utter = new SpeechSynthesisUtterance();

    utter.text = text;

    window.speechSynthesis.speak(utter);
}
//Call Functions on Load
microphoneBtn.addEventListener("click", startListening);