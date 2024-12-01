const progressContainer = document.querySelector('.progress-container');
const progressCircle = document.querySelector('.progress-ring__circle');
const radius = progressCircle.r.baseVal.value;
const circumference = 2 * Math.PI * radius;

progressCircle.style.strokeDasharray = `${circumference} ${circumference}`;
progressCircle.style.strokeDashoffset = circumference;

function setProgress(percent) {
    const offset = circumference - (percent / 100) * circumference;
    progressCircle.style.strokeDashoffset = offset;
}

document.getElementById('value').addEventListener('input', (event) => {
    setProgress(event.target.value);
});

document.getElementById('animate').addEventListener('change', (event) => {
    if (event.target.checked) {
        progressContainer.classList.add('rotate');
    } else {
        progressContainer.classList.remove('rotate');
    }
});

document.getElementById('hide').addEventListener('change', (event) => {
    if (event.target.checked) {
        progressContainer.classList.add('hidden');
    } else {
        progressContainer.classList.remove('hidden');
    }
});


setProgress(document.getElementById('value').value);
