const button = document.querySelector('#listen');
const pause = document.querySelector('#pause');
const play = document.querySelector('#play');
const cancel = document.querySelector('#cancel');
const deleteButton = document.querySelector('#delete');
const speakTheText = new SpeechSynthesisUtterance;

// declaring the voice selected 
let difVoices = [];
let voiceSelect = document.querySelector('select');
window.speechSynthesis.onvoiceschanged = () =>{
    difVoices = window.speechSynthesis.getVoices();
    console.log(difVoices);
    difVoices.forEach((voice, i) => (voiceSelect.options[i] = new Option(voice.name, i)));
    
};
window.speechSynthesis.speaking = () => {
        console.log(speakTheText)
};


// change the voice selected 
voiceSelect.addEventListener('change', () =>{
    speakTheText.voice = difVoices[voiceSelect.value];
})

button.addEventListener('click', () => {
speakTheText.text = document.querySelector('textarea').value;
window.speechSynthesis.speak(speakTheText);
});

pause.addEventListener('click',()=>{
    window.speechSynthesis.pause(speakTheText)
});
play.addEventListener('click',()=>{
    window.speechSynthesis.resume(speakTheText);
})
cancel.addEventListener('click',()=>{
    window.speechSynthesis.cancel(speakTheText);
});

deleteButton.addEventListener('click', () => {
    const text = document.querySelector('textarea');
    if (text.value) {
        text.value = '';
    }
});