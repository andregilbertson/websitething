
let blur = 0;
let inc = 0;

const img = document.querySelector('.bg-image');
const textElement = document.getElementById("my-text");


function miniBlur() {
    if (blur >= 10) {
        
        clearInterval(id)
        textElement.classList.add('fade-in');
        setTimeout(() => document.getElementById('my-text-2').classList.add('fade-in'), 2000);
    }
    img.style.filter = `blur(${blur}px)`;
    blur += inc;
    inc += 0.01;
    
}

function fullFunction() {
    
    id = setInterval(miniBlur, 50);
    const element1 = document.getElementById("my-text");
    const element2 = document.getElementById("my-text-2");
    window.addEventListener("click", function() {
    
    element1.classList.remove('fade-in');
    element1.classList.add('fade-out');
    element2.classList.remove('fade-in');
    element2.classList.add('fade-out');
    setTimeout(() => this.location.replace('second-page.html'), 2000);
    });
}


window.onload(fullFunction());





