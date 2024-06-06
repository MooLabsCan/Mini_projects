
    let previousOrientation = window.orientation;
    const display = document.getElementById('do');
    const vis = document.getElementById('vis');


    window.document.addEventListener('load', checkOrientation)

    function detectDevice() {
        return window.matchMedia("(hover: none), (pointer: coarse)").matches;
    }
    function checkOrientation (){
    if(window.orientation !== '90'){
        previousOrientation = window.orientation;
        console.log(previousOrientation);
        display.innerHTML = previousOrientation;
       if (previousOrientation === 90) vis.src = 'ls.jpeg';
       else if (previousOrientation === 0)   vis.src = 'Rotatescreen.gif';

    }
}

window.addEventListener("resize", checkOrientation, false);
window.addEventListener("orientationchange", checkOrientation, false);

if(detectDevice()) setInterval(checkOrientation, 2000)
    else  {
        display.innerHTML = 'desktop detected';
    vis.src = 'ls.jpeg';
}
