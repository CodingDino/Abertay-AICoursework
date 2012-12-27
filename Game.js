// ************************************************************************ 
// File Name:   Game.js 
// Author:      Sarah Herzog 
// Purpose:     Wrapper and main game loop. 
// ************************************************************************ 

// Global Variables
var CANVAS_WIDTH = 1200,                 // width of the canvas
    CANVAS_HEIGHT = 300,                // height of the canvas
    gLoop,                              // Game loop timer
    canvas_game = document.getElementById('canvas_game'),   // The canvas itself
    ctx = canvas_game.getContext('2d'),           // 2d graphics context
    FPS = 50,                           // Frames per second
    DEBUGMODE = true;                   // Debug mode
    
// Set canvas size    
canvas_game.width = CANVAS_WIDTH;
canvas_game.height = CANVAS_HEIGHT;

// Movement keys
UP = 38;
DOWN = 40;
LEFT = 37;
RIGHT = 39;
NUM1 = 49;
NUM2 = 50;
NUM3 = 51;
    
// Game Class
function Game() {
    // ********************************************************************
    // Data Members 
    // ********************************************************************
    
    // Timers
    this.now = new Date();
    this.start_time = this.now.getTime();
    this.current_time = this.start_time;
	
	// Keypresses
	this.keypress = new Object();
	
	// Objects
	//this.car = new Car();
	//this.line = new Line();
    
    // ********************************************************************
    // Function:    onkeydown()
    // Purpose:     Listens for key presses and passes them to the level 
    //              object. 
    // ********************************************************************
    document.onkeydown = function(e) {
        if (e.keyCode == LEFT) {
			this.keypress.left = true;
        }
        if (e.keyCode == RIGHT) {
			this.keypress.right = true;
        }
        if (e.keyCode == UP) {
			this.keypress.up = true;
        }
        if (e.keyCode == DOWN) {
			this.keypress.down = true;
        }
        if (e.keyCode == NUM1) {
			this.keypress.num1 = true;
        }
        if (e.keyCode == NUM2) {
			this.keypress.num2 = true;
        }
        if (e.keyCode == NUM3) {
			this.keypress.num3 = true;
        }
    }

    // ********************************************************************
    // Function:    onkeyup()
    // Purpose:     Listens for key presses and passes them to the level 
    //              object. 
    // ********************************************************************
    document.onkeyup = function(e) {
        if (e.keyCode == LEFT) {
			this.keypress.left = false;
        }
        if (e.keyCode == RIGHT) {
			this.keypress.right = false;
        }
        if (e.keyCode == UP) {
			this.keypress.up = false;
        }
        if (e.keyCode == DOWN) {
			this.keypress.down = false;
        }
        if (e.keyCode == NUM1) {
			this.keypress.num1 = false;
        }
        if (e.keyCode == NUM2) {
			this.keypress.num2 = false;
        }
        if (e.keyCode == NUM3) {
			this.keypress.num3 = false;
        }
    }

    // ********************************************************************
    // Function:    gameLoop()
    // Purpose:     Continuous loop runs while the game is loaded. 
    // ********************************************************************
    this.gameLoop = function() {
        logic();     // Run all logic functions
        draw();      // Draw all objects and text
    } 
	
    // ********************************************************************
    // Function:    logic()
    // Purpose:     Handle all game logic. 
    // ********************************************************************
    logic = function() {
    } 
    
    // ********************************************************************
    // Function:    clear()
    // Purpose:     Sets up the canvas for each frame. 
    // ********************************************************************
    clear = function() {
        ctx.fillStyle = 'rgba(150, 150, 150, 255)';
        ctx.beginPath();                // Start drawing
        ctx.rect(0,0,                   // Draws rectangle
            CANVAS_WIDTH,
            CANVAS_HEIGHT);        
        ctx.closePath();                // Ends drawing
        ctx.fill();                     // Fills rectangle w/ active color
    }
	
    // ********************************************************************
    // Function:    draw()
    // Purpose:     Draws all game objects and text to the canvas. 
    // ********************************************************************
    draw = function() {
        // Clear the canvas to the level's bg color
        clear();
    }  
	
}

// ********************************************************************
// Function:    startGame()
// Purpose:     Creates a game instance and runs the game loop FPS 
//				times per second. 
// ********************************************************************
function startGame() {
	var this_game = new Game();     // Create instance of the game
	this_game.gameLoop();           // Run Game Loop
	setInterval(this_game.gameLoop, 1000 / FPS);
}
