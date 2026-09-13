/*
==========================================
EXERCISE 1 - JAVASCRIPT
ABOUT ME INTERACTIVE CARD
==========================================

JavaScript Goals:

1. Select the button
2. Select the fun fact
3. Listen for a click
4. Show/hide the fun fact
==========================================
*/

const btn = document.querySelector('#fact-btn');
const fact = document.querySelector('#fun-fact');

btn.addEventListener('click', function()
{   
    if(fact.style.display ==="none"){
        fact.style.display = "block";
    } 
    else{
        fact.style.display = "none";
    }
}
);