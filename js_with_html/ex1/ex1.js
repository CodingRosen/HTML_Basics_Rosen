console.log('hello world');

// The browser will load elements like h1, p quickly but also load
//      images, videos etc. then trigger aka invokes the window.onload property
//       window.onload();
//       by default window.onload = undefine;
// window is JS Object, onload is a property

window.onload = function app() {
    // showHtmlHeaderElementInConsole();

    // Create (add) an event listener for a btn click, then fire off the showHtmlHeadeElementInConsole
    let htmlHeaderBtn = document.getElementById("showHtmlHeaderElementBtn");
    console.log('selected the button element:')
    console.log(htmlHeaderBtn);
    //first argument is the type of event
    //  click, mouseover, keydown, keyup
    //second argument it the callback function!
    htmlHeaderBtn.addEventListener("mouseover", showHtmlHeaderElementInConsole);

    // html element, mouseleave alert

    let mouseOverStuff = document.getElementsByTagName("h1");
    mouseOverStuff = mouseOverStuff[0]
    console.log(mouseOverStuff);
    mouseOverStuff.addEventListener("mouseover", mouseLeaving);
}

let mouseLeaves = document.getElementById("htmlMouseLeave");
mouseLeaves.addEventListener("mouseleave", mouseLeavePage);
function mouseLeavePage() {
    //alert('YOU HAVE LEFT THE PAGE!');
}


var colorFlag = true;
function mouseLeaving() {
    // Print the word Blue or Red every mouseleave
    if (myBooleanValue == true) {
        console.log("Red");
        colorFlag = false;
    } else {
        console.log("Blue");
        colorFlag = true;
    }
}


function showHtmlHeaderElementInConsole() {
    let htmlHeaderElement = document.getElementById("htmlHeader");
    console.log(htmlHeaderElement);
}