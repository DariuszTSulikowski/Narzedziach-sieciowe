const canvas = document.getElementById('oscilloscopeCanvas');
const ctx = canvas.getContext('2d');

let amplitude = 100;
let frequency = 5;
let phase = 0;
let waveType = 'sinusoidal';
let time = 0;
let paused = false;

// Elementy interfejsu użytkownika
document.getElementById('amplitude').addEventListener('input', (e) => {
    amplitude = e.target.value;
});

document.getElementById('frequency').addEventListener('input', (e) => {
    frequency = e.target.value;
});

document.getElementById('phase').addEventListener('input', (e) => {
    phase = e.target.value;
});

document.getElementById('waveType').addEventListener('change', (e) => {
    waveType = e.target.value;
});

document.getElementById('pauseOscilloscope').addEventListener('click', () => {
    paused = true;
});

document.getElementById('resumeOscilloscope').addEventListener('click', () => {
    paused = false;
    drawWave();
});

// Funkcja do generowania różnych typów fal
function generateWave(x) {
    const angle = (x * frequency * 0.01) + (phase * Math.PI / 180);
    switch (waveType) {
        case 'sinusoidal':
            return amplitude * Math.sin(angle);
        case 'square':
            return amplitude * (Math.sin(angle) > 0 ? 1 : -1);
        case 'triangle':
            return amplitude * (2 / Math.PI) * Math.asin(Math.sin(angle));
        default:
            return 0;
    }
}

// Funkcja rysująca falę
function drawWave() {
    if (paused) return;
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = 'lime';
    ctx.lineWidth = 2;
    ctx.beginPath();
    
    for (let x = 0; x < canvas.width; x++) {
        const y = canvas.height / 2 + generateWave(x);
        if (x === 0) {
            ctx.moveTo(x, y);
        } else {
            ctx.lineTo(x, y);
        }
    }

    ctx.stroke();
    time += 0.05;

    requestAnimationFrame(drawWave);
}

// Start rysowania fali
drawWave();
