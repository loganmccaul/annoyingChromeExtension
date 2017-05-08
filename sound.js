var paragraphs = document.querySelectorAll('p');
var text = '';
for(var i = 0; i < paragraphs.length; i++) {
  text += paragraphs[i].textContent;
}
var audioCtx = new(window.AudioContext || window.webkitAudioContext)();
var osc = audioCtx.createOscillator();
var gain = audioCtx.createGain();

osc.connect(gain);
gain.connect(audioCtx.destination);

osc.type = 'sine';
osc.frequency.value = 0;
osc.start();

gain.gain.value = .5;

function playNote(count) {
  if (count > text.length - 1) count = 0;
  tempo = 100;
  setTimeout(function() {
    osc.frequency.value = getFrequency(text[count]);
    playNote(++count);
  }, tempo);
}

playNote(0);

function getFrequency(char) {
  if ('aeiouy'.indexOf(char) >= 0) {
    return 500;
  } else if (char === ' ') {
    return 0;
  } else if (',."\';:><?/!@$#%^&*()_+-={}[]'.indexOf(char) >= 0) {
    return 1500;
  } else {
    return 1000;
  }
}
