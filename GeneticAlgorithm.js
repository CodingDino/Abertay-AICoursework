// ************************************************************************ 
// File Name:   GeneticAlgorithm.js 
// Author:      Sarah Herzog 
// Purpose:     Runs Genetic Algorithm tuning of a controller
// ************************************************************************ 

// Global Variables
var gLoop,                              // Game loop timer
    canvas_game,   						// The canvas itself
    ctx,           						// 2d graphics context
    FPS = 20,                           // Frames per second
    OPS = 100,                          // Operations per second
    DEBUGMODE = true,                   // Debug mode
	//RUNTIME = 4,						// Time the game will run before ending and processing results
	NUM_SOLUTIONS = 100;				// Number of members of the gene pool at any given time
    
// GeneticAlgorithm Class
function GeneticAlgorithm() {
    // ********************************************************************
    // Data Members 
    // ********************************************************************
    
    // Timers
    this.now = new Date();
    this.start_time = this.now.getTime();
    this.mark_time = this.start_time;
    this.current_time = this.start_time;
	this.stop = false;
	this.interval_ID = 0;
	
	// Arrays of objects
	this.cars = new Array();
	this.lines = new Array();
	this.tracks = new Array();
	this.controls = new Array();
	this.results = new Array();
	
	// Set up individual objects
	for (i = 0; i < NUM_SOLUTIONS; ++i) {
		this.cars.push(new Car());
		this.lines.push(new Line());
		this.tracks.push(new Track());
		this.controls.push(new FuzzyController());
		this.results.push(new Results());
	}
	for (i = 0; i < NUM_SOLUTIONS; ++i) {
		this.tracks[i].initialise();
		this.controls[i].initialise();
		this.controls[i].randomise();
		this.results[i].initialise();
	}

    // ********************************************************************
    // Function:    gameLoop()
    // Purpose:     Continuous loop runs while the game is loaded. 
    // ********************************************************************
    this.gameLoop = function() {
        this.logic();     // Run all logic functions for each solution
		// Drawing only happens after a track is finished (draw generation's results to screen)
		
		if (this.stop) {
			// Process results for all solutions
			// Selection (choose which will breed)
			// Crossover (breeding)
			// Mutation
			// draw results to screen
			// prepare solutions for next round of evaluation
			this.stop = false;
		}
    } 
	
    // ********************************************************************
    // Function:    logic()
    // Purpose:     Handle all game logic. 
    // ********************************************************************
    this.logic = function() {
	
		// Process each solution
		for (i = 0; i < NUM_SOLUTIONS; ++i) {
	
			// Get track control
			this.tracks[i].logic(this.lines[i]);
		
			// Perform Line Logic
			this.lines[i].logic();
			
			// Perform Car Logic
			this.cars[i].logic(this.lines[i], this.controls[i]);
			
			// Record results
			this.results[i].record(this.lines[i], this.cars[i]);
			
			// Stop game if done
			if (this.tracks[i].done) {
				this.stop = true;
			}
			
		}
		
    } 
    
    // ********************************************************************
    // Function:    clear()
    // Purpose:     Sets up the canvas for each frame. 
    // ********************************************************************
    this.clear = function() {
		this.ctx.fillStyle = 'rgba('+        // Sets fill color
		'255,255,200,255)';
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
    this.draw = function() {
        // Clear the canvas to the level's bg color
        this.clear();
		// Draw current results to the screen
    }	
	
}


// ********************************************************************
// Function:    initialiseGenetics()
// Purpose:     Creates a game instance and initialises game
// ********************************************************************
function initialiseGenetics() {
	
	this_genetics = new GeneticAlgorithm();     // Create instance of the genetic algorithm
	
	// Initialise canvas  
	this_genetics.canvas = document.getElementById('canvas_genetics'),   // The canvas itself
	this_genetics.ctx = this_genetics.canvas.getContext('2d'),           // 2d graphics context
	this_genetics.canvas.width = CANVAS_WIDTH;
	this_genetics.canvas.height = CANVAS_HEIGHT;
}

// Start function which adds game_Loop to interval