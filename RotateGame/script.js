
    let previousOrientation = window.orientation;
    const display = document.getElementById('do');
function checkOrientation (){
    if(window.orientation !== previousOrientation){
        previousOrientation = window.orientation;
        console.log(previousOrientation);
        display.innerHTML = previousOrientation;

    }
}

window.addEventListener("resize", checkOrientation, false);
window.addEventListener("orientationchange", checkOrientation, false);
