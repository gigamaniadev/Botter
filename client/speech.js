function SpeechRecog() {
  var output = document.getElementById("output");
  var action = document.getElementById("action");
  var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
  var recognition = new SpeechRecognition();

  // This runs when the speech recognition service starts
  recognition.onstart = function () {
    action.setAttribute(
      "style",
      "filter: invert(30%) sepia(61%) saturate(6688%) hue-rotate(330deg) brightness(98%) contrast(106%)"
    );
  };

  recognition.onspeechend = function () {
    action.setAttribute(
      "style",
      "filter: brightness(0) saturate(100%) invert(73%) sepia(60%) saturate(3849%) hue-rotate(99deg) brightness(94%) contrast(101%);"
    );
    recognition.stop();
  };

  // This runs when the speech recognition service returns result
  recognition.onresult = function (event) {
    var transcript = event.results[0][0].transcript;
    var confidence = event.results[0][0].confidence;
    output.value = transcript;
  };

  // start recognition
  recognition.start();
}
