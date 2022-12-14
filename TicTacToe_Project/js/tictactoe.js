//Variable to keep track of whose turn it is.
let activePlayer = 'X';
//Array to store an array of moves. We use the to determine win conditions.
let selectedSquares = [];

//Function for placing an x or o in a square
function placeXorO(squareNumber){
    //This condition ensures a square hasn't been selected already.
    //The .some() method is used to check eash element of the selectSquare array
    //To see if it contains the square number clicked on.
    if (!selectedSquares.some(element => element.includes(squareNumber))) {
        //This variable retrieves the HTML element id that was clicked.
        let select = document.getElementById(squareNumber);
        //This condition checks who's turn it is.
        if (activePlayer === 'X') {
            //If activePlayer is equal to X, the x.png is placed in HTML
            select.style.backgroundImage = 'url("images/X.jpg")';
            //Active player may only be X or O, so if not X it must be O
        } else {
            //If activePlayer is euqal to O, the o.png is placed in HTML
            select.style.backgroundImage = 'url("images/O.jpg")';
        }
        //squareNumber and activePlayer are concatenated together and added to array.
        selectedSquares.push(squareNumber + activePlayer);
        //This calls a function to check for any win conditions.
        checkwinConditions();
        //This condition is for changing the active player.
        if (activePlayer === 'X') {
            //If active player is X, change it to O.
            activePlayer = 'O';
            //If activePlayer is anything other can X
        } else {
            //change activePlayer to X
            activePlayer = 'X';
        }
        //This function plays placement sound.
        audio('./media/tone.mp3');
        //This condition checks to see if it is the computers turn.
        if (activePlayer === 'O') {
            //This function disables the clicking for computers turn.
            disableClick();
            //This function waits 1 second before the computer places an image and enables click.
            setTimeout(function() {computersTurn(); }, 1000);
        }
        //returning true is needed for our computersTurn() function to work.
        return true;
    }
    //This function results ina random square being selectd by the computer.
    function computersTurn() {
        //This boolean is needed for our while loop.
        let success = false;
        //This variable stores a random number 0-8.
        let pickASquare;
        //This condition allows our while loop to keep trying if a square is selected already.
        while (!success) {
            pickASquare = String(Math.floor(Math.random() * 9));
            //If the random number evaluated returns true, the square hasn't been selected yet.
            if (placeXorO(pickASquare)) {
                //This line calls the function
                placeXorO(pickASquare);
                //This changes our boolean and ends the loop.
                success = true;
            };
        }
    }
}


//This function parses the selectedSquares array to search for win conditions.
//drawLine() function is called to draw a line on the screen if the condition is met.
function checkwinConditions() {
    //X 0, 1, 2 condition.
    if (arrayIncludes('0X', '1X', '2X')) {drawWinLine(50, 100, 558, 100)}
    //X 3, 4, 5 condition.
    else if (arrayIncludes('3X', '4X', '5X')) {drawWinLine(50, 304, 558, 304)}
    //X 6, 6, 8 condition
    else if (arrayIncludes('6X', '7X', '8X')) {drawWinLine(50, 508, 558, 508)}
    //X 0, 3, 6 condition
    else if (arrayIncludes('0X', '3X', '6X')) {drawWinLine(100, 50, 100, 558)}
    //X 1, 4, 7 condition
    else if (arrayIncludes('1X', '4X', '7X')) {drawWinLine(304, 50, 304, 558)}
    //X 2, 5, 8 condition
    else if (arrayIncludes('2X', '5X', '8X')) {drawWinLine(508, 50, 508, 558)}
    //X 6, 4, 2 condition
    else if (arrayIncludes('6X', '4X', '2X')) {drawWinLine(100, 508, 510, 90)}
    //X 0, 4, 8 condition
    else if (arrayIncludes('0X', '4X', '8X')) {drawWinLine(100, 100, 520, 520)}
    //O 0, 1, 2 condition.
    else if (arrayIncludes('0O', '1O', '2O')) {drawWinLine(50, 100, 558, 100)}
    //O 3, 4, 5 condition.
    else if (arrayIncludes('3O', '4O', '5O')) {drawWinLine(50, 304, 558, 304)}
    //O 6, 6, 8 condition
    else if (arrayIncludes('6O', '7O', '8O')) {drawWinLine(50, 508, 558, 508)}
    //O 0, 3, 6 condition
    else if (arrayIncludes('0O', '3O', '6O')) {drawWinLine(100, 50, 100, 558)}
    //O 1, 4, 7 condition
    else if (arrayIncludes('1O', '4O', '7O')) {drawWinLine(304, 50, 304, 558)}
    //O 2, 5, 8 condition
    else if (arrayIncludes('2O', '5O', '8O')) {drawWinLine(508, 50, 508, 558)}
    //O 6, 4, 2 condition
    else if (arrayIncludes('6O', '4O', '2O')) {drawWinLine(100, 508, 510, 90)}
    //O 0, 4, 8 condition
    else if (arrayIncludes('0O', '4O', '8O')) {drawWinLine(100, 100, 520, 520)}
    //This condition checks for a tie. If none of the above conditions are met and
    //9 squares are selected the code executes.
    else if (selectedSquares.length >= 9) {
        //This function playes the tie game sound.
        audio('./media/splash.mp3');
        //This function sets a .3 second timer before the resetGame is called.
        setTimeout(function() { resetGame(); }, 500);
    }
    //This function checks if an array includes 3 strings. It is used to check for
    //each win condition.
    function arrayIncludes(squareA, squareB, squareC) {
        //These variables will be used to check for 3 in a row.
        const a = selectedSquares.includes(squareA);
        const b = selectedSquares.includes(squareB);
        const c = selectedSquares.includes(squareC);
        //If the 3 variables we pass are all included in our array then
        //true is returned and our else if condition executes the drawLine() function.
        if (a === true && b === true && c === true) {return true;}
    }
}

//This function makes our body element temporarily unclickable.
function disableClick() {
    //This makes our body unclickable.
    body.style.pointerEvents = 'none';
    //This makes our body clickable again after 1 second.
    setTimeout(function() { body.style.pointerEvents = 'auto'; }, 1000);
}

//This function takes a string parameter of the path you set earlier for
//placement sound ('./media/place.mp3')
function audio(audioURL) {
    //we create a new audio object and we pass the path as a parameter.
    let audio = new Audio(audioURL);
    //Play method plays our audio sound.
    audio.play();
}

//This function utilizes HTML canvas to draw win lines.
function drawWinLine(coordX1, coordY1, coordX2, coordY2) {
    //This line accesses our HTML canvas element
    const canvas = document.getElementById('win-lines');
    //This line gives us access to methods and properties to use on canvas.
    const c = canvas.getContext('2d');
    //This line indicates where the start of a lines x axis is.
    let x1 = coordX1,
        y1 = coordY1,
        x2 = coordX2,
        y2 = coordY2,
        //variable to store temporary x axis data we update in animation loop.
        x = x1,
        //variable to store temporary y axis data we update in our animation loop.
        y = y1;
    //This function interacts with the canvas.
    function animateLineDrawing() {
        //This variable creates a loop.
        const animationLoop = requestAnimationFrame(animateLineDrawing);
        //Method to clear content from the last loop iteration.
        c.clearRect(0,0,608,608);
        //Method to star a new path.
        c.beginPath();
        //Method moves us to a starting point in our line.
        c.moveTo(x1, y1);
        //Method to indicate the end point in our line.
        c.lineTo(x, y);
        //Method sets the width of our line.
        c.lineWidth = 10;
        //Method to set color of our line.
        c.strokeStyle = 'rgba(70, 255, 33, 0.8)';
        //Method to draw everything we laid out above
        c.stroke();
        //condition to check if we've reached the endpoints.
        if (x1 <= x2 && y1 <= y2) {
            //condition adds 10 to previous end x endpoint
            if (x < x2) { x += 10; }
            //condition adds 10 to the previous y endpoint.
            if (y < y2) { y += 10; }
            //condition similar to the one above.
            //This is necessary for the 6/4/2 win conditions.
            if (x >= x2 && y >= y2) { cancelAnimationFrame(animationLoop); }
        }
        //This condition is similar to the one above.
        //This is necessary for the 6/4/2 condition.
        if (x1 <= x2 && y1 >= y2) {
            if (x < x2) { x += 10; }
            if (y > y2) { y -= 10; }
            if (x >= x2 && y <= y2) {cancelAnimationFrame(animationLoop);}
        }
    }
    //This function clears our canvas after our win line is drawn.
    function clear() {
        //start our animation loop.
        const animationLoop = requestAnimationFrame(clear);
        //clears our canvas.
        c.clearRect(0, 0, 608, 608);
        //This line stops our animation loop.
        cancelAnimationFrame(animationLoop);
    }
    //This line disallows clicking while the win sound is playing
    disableClick();
    //This line plays the win sounds.
    audio('./media/crowd.mp3');
    //This line calls our main animation loop.
    animateLineDrawing();
    //Wait one second, then clear canvas, reset game, allows clicking again.
    setTimeout(function() { clear(); resetGame(); }, 1000);
}

//This function resets the game in the event of a tie or win.
function resetGame() {
    //This loop iterates through each HTML square element.
    for (let i = 0; i < 9; i++) {
        //This variable gets teh HTML element i.
        let square = document.getElementById(String(i));
        //this removes our elements background image.
        square.style.backgroundImage = '';
    }
    //This resets our array so it is empty and we can start over.
    selectedSquares = [];
}