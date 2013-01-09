// ************************************************************************ 
// File Name:   Game.js 
// Author:      Sarah Herzog 
// Purpose:     Wrapper and main game loop. 
// ************************************************************************ 

// Global Variables
var gLoop,                              // Game loop timer
    canvas_game = document.getElementById('canvas_game'),   // The canvas itself
    ctx = canvas_game.getContext('2d'),           // 2d graphics context
    FPS = 60,                            // Frames per second
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
	game_keypress = new Object();
	
	// Objects
	game_car = new Car();
	game_line = new Line();
	game_readout = new Readout();
    
    // ********************************************************************
    // Function:    onkeydown()
    // Purpose:     Listens for key presses and passes them to the level 
    //              object. 
    // ********************************************************************
    document.onkeydown = function(e) {
        if (e.keyCode == LEFT) {
			game_keypress.left = true;
			game_line.direction = -1;
        }
        if (e.keyCode == RIGHT) {
			game_keypress.right = true;
			game_line.direction = 1;
        }
        if (e.keyCode == UP) {
			game_keypress.up = true;
        }
        if (e.keyCode == DOWN) {
			game_keypress.down = true;
        }
        if (e.keyCode == NUM1) {
			game_keypress.num1 = true;
        }
        if (e.keyCode == NUM2) {
			game_keypress.num2 = true;
        }
        if (e.keyCode == NUM3) {
			game_keypress.num3 = true;
        }
    }

    // ********************************************************************
    // Function:    onkeyup()
    // Purpose:     Listens for key presses and passes them to the level 
    //              object. 
    // ********************************************************************
    document.onkeyup = function(e) {
        if (e.keyCode == LEFT) {
			game_keypress.left = false;
			game_line.direction = 0;
        }
        if (e.keyCode == RIGHT) {
			game_keypress.right = false;
			game_line.direction = 0;
        }
        if (e.keyCode == UP) {
			game_keypress.up = false;
			game_line.change_rate +=1;
			if (game_line.change_rate >3) game_line.change_rate = 3;
        }
        if (e.keyCode == DOWN) {
			game_keypress.down = false;
			game_line.change_rate -=1;
			if (game_line.change_rate <1) game_line.change_rate = 1;
        }
        if (e.keyCode == NUM1) {
			game_keypress.num1 = false;
			game_line.change_rate =1;
        }
        if (e.keyCode == NUM2) {
			game_keypress.num2 = false;
			game_line.change_rate =2;
        }
        if (e.keyCode == NUM3) {
			game_keypress.num3 = false;
			game_line.change_rate =3;
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
		// Perform Line Logic
		game_line.logic();
		
		// Perform Car Logic
		game_car.logic(game_line);
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
		game_line.draw(0);
		game_car.draw(0);
		game_readout.draw(game_car,game_line);
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
