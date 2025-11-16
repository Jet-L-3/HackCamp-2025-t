const circle = document.getElementById('circle');
const prompt = document.getElementById('prompt');

const breatheInDuration = 3; // seconds
const breatheOutDuration = 5; // seconds

const smallSize = 100;
const bigSize = 200;

function setCircleSize(size) {
    circle.style.width = size + 'px';
    circle.style.height = size + 'px';
}

// Helper to animate countdown from duration down to 0, calling onTick each second
function countdown(duration, label, onTick, onComplete) {
    let timeLeft = duration;
    onTick(timeLeft);
    const interval = setInterval(() => {
        timeLeft--;
        if (timeLeft >= 0) {
            onTick(timeLeft);
        }
        if (timeLeft <= 0) {
            clearInterval(interval);
            onComplete();
        }
    }, 1000);
}

function breatheIn() {
    prompt.textContent = `Breathe in... ${breatheInDuration}`;
    setCircleSize(bigSize);
    countdown(breatheInDuration, 'Breathe in', (time) => {
        prompt.textContent = `Breathe in... ${time}`;
    }, breatheOut);
}

function breatheOut() {
    prompt.textContent = `Breathe out... ${breatheOutDuration}`;
    setCircleSize(smallSize);
    countdown(breatheOutDuration, 'Breathe out', (time) => {
        prompt.textContent = `Breathe out... ${time}`;
    }, breatheIn);
}

// Initialize
setCircleSize(smallSize);
breatheIn();