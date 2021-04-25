var backspace = document.querySelector("#backspace"),
    caps = document.querySelector('#caps'),
    enter = document.querySelector('#enter'),
    shift = document.querySelector('#shift'),
    done = document.querySelector('#done'),
    volume = document.querySelector('#volume'),
    space = document.querySelector('#space'),
    micro = document.querySelector('#micro'),
    lang = document.querySelector('#lang'),
    display = document.querySelector('#display'),
    keys = document.querySelectorAll('.keyboard__key'),
    funcBtns = document.querySelectorAll('.funcBtn'),
    keyboard = document.querySelector('.keyboard'),
    letters = document.querySelectorAll('.letter'),
    audioRussian = document.querySelector('.audio-russian'),
    audioEnglish = document.querySelector('.audio-english'),
    audioEnter = document.querySelector('.audio-enter'),
    audioShift = document.querySelector('.audio-shift'),
    audioCaps = document.querySelector('.audio-caps'),
    audioBackspace = document.querySelector('.audio-backspace'),
    arrowRight = document.querySelector('#arrow_right'),
    arrowLeft = document.querySelector('#arrow_left');

const properties = {
    caps: false,
    sound: false,
    shift: false,
    microfone: false,
    lang: false
};

const lettersShift = [
    "~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+",
    "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "{", "}", "|",
    "A", "S", "D", "F", "G", "H", "J", "K", "L", ":", "\"",
    "Z", "X", "C", "V", "B", "N", "M", "<", ">", "?"
];
const lettersStandard = [
    "`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=",
    "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "\\",
    "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'",
    "z", "x", "c", "v", "b", "n", "m", ",", ".", "/",
];
const lettersRussian = [
    "ё", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=",
    "й", "ц", "у", "к", "е", "н", "г", "ш", "щ", "з", "х", "ъ", "\\",
    "ф", "ы", "в", "а", "п", "р", "о", "л", "д", "ж", "э",
    "я", "ч", "с", "м", "и", "т", "ь", "б", "ю", ".",
];
const lettersRussianShift = [
    "Ё", "!", "\"", "№", ";", "%", ":", "?", "*", "(", ")", "_", "+",
    "Й", "Ц", "У", "К", "Е", "Н", "Г", "Ш", "Щ", "З", "Х", "Ъ", "/",
    "Ф", "Ы", "В", "А", "П", "Р", "О", "Л", "Д", "Ж", "Э",
    "Я", "Ч", "С", "М", "И", "Т", "Ь", "Б", "Ю", ",",
];

const createIconHTML = (src) => {
    return `<img src="${src}">`;
};


display.addEventListener("click", () => {
    keyboard.classList.remove("keyboard--hidden")
});

done.addEventListener("click", () => {
    keyboard.classList.add("keyboard--hidden")
});

space.addEventListener("click", () => {
    display.value += " ";
});

enter.addEventListener("click", () => {
    if (properties.sound) playEnter();
    display.value += "\n";
})

backspace.addEventListener('click', () => {
    if (properties.sound) playBackspace();
    display.value = display.value.substring(0, display.value.length - 1);
    
});

caps.addEventListener("click", () => {
    properties.caps = !properties.caps;
    if (properties.sound) playCaps();
    caps.classList.toggle("keyboard__key--active");

    for (const key of keys) {
        if (key.childElementCount === 0) {
            if (properties.caps) {
                key.textContent = key.textContent.toUpperCase()
            } else {
                key.textContent = key.textContent.toLowerCase()
            }
        }
    }
});

shift.addEventListener("click", () => {
    shift.classList.toggle("keyboard__key--active")
    properties.shift = !properties.shift;
    if (properties.sound) playShift();
    if (properties.lang) {
        if (properties.shift) {
            for (let i = 0; i < letters.length; i++) {
                letters[i].textContent = properties.caps ? lettersRussianShift[i].toLowerCase() : lettersRussianShift[i]
            }
        } else {
            for (let i = 0; i < letters.length; i++) {
                letters[i].textContent = lettersRussian[i]
            }
        }
    } else {
        if (properties.shift) {
            for (let i = 0; i < letters.length; i++) {
                letters[i].textContent = properties.caps ? lettersShift[i].toLowerCase() : lettersShift[i]
            }
        } else {
            for (let i = 0; i < letters.length; i++) {
                letters[i].textContent = lettersStandard[i]
            }
        }
    }
});

lang.addEventListener("click", () => {

    properties.lang = !properties.lang;
    if (properties.lang) {
        lang.firstChild.textContent = "ru"

        for (let i = 0; i < letters.length; i++) {
            letters[i].textContent = lettersRussian[i]

        }
    } else {
        lang.firstChild.textContent = "en"

        for (let i = 0; i < letters.length; i++) {
            letters[i].textContent = lettersStandard[i]

        }
    }
})

letters.forEach(letter => {

    letter.addEventListener("click", () => {

        if (properties.sound) {
            properties.lang ? playRussian() : playEnglish();
            display.value += letter.textContent
        } else {
            display.value += letter.textContent;
        }
    })
});

volume.addEventListener("click", () => {

    properties.sound = !properties.sound
    properties.sound ? volume.innerHTML = createIconHTML("/assets/volume_up.png") : volume.innerHTML = createIconHTML("/assets/volume_off.png");
});

function playRussian() {
    audioRussian.currentTime = 0;
    audioRussian.play();
};

function playEnglish() {
    audioEnglish.currentTime = 0;
    audioEnglish.play();
};

function playEnter() {
    audioEnter.currentTime = 0;
    audioEnter.play();
};

function playShift() {
    audioShift.currentTime = 0;
    audioShift.play();
};

function playCaps() {
    audioCaps.currentTime = 0;
    audioCaps.play();
};

function playBackspace() {
    audioBackspace.currentTime = 0;
    audioBackspace.play();
};

arrowLeft.addEventListener("click", () => {
    console.log('не доделал')
});

arrowRight.addEventListener("click", () => {
    console.log('не доделал')
});

window.addEventListener("click", () => {
    display.focus();
});




micro.addEventListener("click", () => {
    properties.microfone = !properties.microfone;
    properties.microfone ? micro.innerHTML = createIconHTML("/assets/mic.png") : micro.innerHTML = createIconHTML("/assets/mic_off.png");
    var SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    var rec = new SpeechRecognition();
    rec.interimResults = true;
    rec.lang = properties.lang ? 'RU' : 'en-US';
    rec.addEventListener("result", function (e) {
        var text = Array.from(e.results)
            .map(result => result[0])
            .map(result => result.transcript)
            .join('');
        display.textContent = text
        rec.addEventListener('end', rec.start);
    });
    properties.microfone ? rec.start() : rec.abort();
    
});
