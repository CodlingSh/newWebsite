let menuBtn = document.getElementById("navBtn");
let opacityLayer = document.getElementById("opacityLayer")

const toggleMenu = () => {
    document.body.classList.toggle("menuVisible");

    if (!opacityLayer.classList.contains("nowExists") 
    && !opacityLayer.classList.contains("turnedOn")) {
        opacityLayer.classList.toggle("nowExists");
        opacityLayer.classList.toggle("turnedOn");
        
    } 
    else {
        opacityLayer.classList.toggle("turnedOn");
        opacityLayer.addEventListener("transitionend", hideOpacityLayer);
    }
}

const hideOpacityLayer = () => {
    opacityLayer.classList.toggle("nowExists");
    opacityLayer.removeEventListener("transitionend", hideOpacityLayer);
}

// Event listeners
menuBtn.addEventListener("click", toggleMenu);
opacityLayer.addEventListener("click", toggleMenu);