"use strict";

let colorIndex = 0;
const diffColor = ['90e0ef','ffdab9','f8ad9d','ff8fab','c8b6ff'];
function nextColor() {
    const color = diffColor[colorIndex];  
    colorIndex = (colorIndex + 1) % diffColor.length;
    return color;
}

function addText() {
    let ip = document.querySelector('.userinput').value;
    if (ip.trim() === "") {
        return;
    }
    
    let newItem = document.createElement('li');
    
    let textNode = document.createTextNode(ip);
    newItem.appendChild(textNode);

    let removeButton = document.createElement('button');
    removeButton.textContent = "✕";
    removeButton.className = "rmv-btn";
    removeButton.onclick = function() {
        newItem.remove();
    };
    newItem.appendChild(removeButton);

    newItem.style.backgroundColor = nextColor();

    let disp = document.querySelector('.displaytext');
    disp.appendChild(newItem);

    document.querySelector('.userinput').value = '';
}