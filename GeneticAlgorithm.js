// ************************************************************************ 
// File Name:   GeneticAlgorithm.js 
// Author:      Sarah Herzog 
// Purpose:     Runs Genetic Algorithm tuning of a controller
// ************************************************************************ 

// Global Variables
var FPS = 20,                           // Frames per second
    OPS = 100,                          // Operations per second
    DEBUGMODE = true,                   // Debug mode
	//RUNTIME = 4,						// Time the game will run before ending and processing results
	NUM_SOLUTIONS = 100,				// Number of members of the gene pool at any given time
	MUTATION_CHANCE = 0.0005;			// 0.05% chance of mutation
    
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
	this.generation = 1;
	
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
			console.log("Processing generation "+this_genetics.generation+"...");
			// Stop simulation
			stopGenetics();
			
			// Process results for all solutions
			this.now = new Date();
			this.current_time = this.now.getTime();
			// draw results to screen
			this.draw();
			
			// SELECTION, CROSSOVER, AND MUTATION
			console.log("   Calculating fitness values...");
			// Calculate raw fitness and sum raw fitnesses
			// Actually gets the inverse, as a high mean is undesireable.
			var sum_inverse_raw_fitness=0;
			for (i = 0; i < NUM_SOLUTIONS; ++i) {
				this.results[i].process(this.current_time - this.start_time);
				this.controls[i].inverse_raw_fitness = this.results[i].mean_distance;
				sum_inverse_raw_fitness += this.controls[i].inverse_raw_fitness;
			}
			// Normallise Fitness Values
			// Subtracts the inverse from 1 to get a fitness where closer to 1 is good, closer to 0 is bad.
			for (i = 0; i < NUM_SOLUTIONS; ++i) {
				this.controls[i].normalised_fitness = 1-(this.controls[i].inverse_raw_fitness / sum_inverse_raw_fitness);
			}
			// Sort by decending fitness values
			this.controls.sort( function(a,b) {return b.normalised_fitness - a.normalised_fitness;} );
			// Calculate accumulated normalised fitness values
			var sum_normalised_fitness=0;
			for (i = 0; i < NUM_SOLUTIONS; ++i) {
				sum_normalised_fitness += this.controls[i].normalised_fitness;
				this.controls[i].accumulated_normalised_fitness = sum_normalised_fitness;
			}
			// Create array to hold new controllers
			var new_controllers = Array();
			var parent1, parent2;
			// Repeat the following until we have a new population
			console.log("   Producing offspring...");
			while (new_controllers.length < NUM_SOLUTIONS) {
				// Determine R between 0 and 1;
				var R1 = Math.random(), R2 = Math.random();
				// Determine parent1 and parent2
				for (iter = 0; iter < NUM_SOLUTIONS; ++iter) {
					if (this.controls[iter].accumulated_normalised_fitness >= R1) parent1 = this.controls[iter].accumulated_normalised_fitness;
					if (this.controls[iter].accumulated_normalised_fitness >= R2) parent2 = this.controls[iter].accumulated_normalised_fitness;
				}
				// Use Crossover to determine offspring settings
				var offspring = this.crossover(parent1,parent2);
				// Mutation
				offspring = this.mutate(offspring);
				// Save resulting offspring in new array;
				new_controllers.push(offspring);
			}
			// Prepare solutions for next round of evaluation
			console.log("   Preparing the next generation...");
			++this.generation;
			this.controls = new_controllers;
			// Prepare other arrays
			for (i = 0; i < NUM_SOLUTIONS; ++i) {
				this.tracks[i].reset();
				this.results[i].reset();
				this.cars[i].reset();
				this.lines[i].reset();
			}
			this.stop = false;
			startGenetics();
		}
    } 
	
    // ********************************************************************
    // Function:    crossover()
    // Purpose:     Combines two controllers using the Uniform Crossover method
    // ********************************************************************
    this.crossover = function(parent1,parent2) {
		var offspring = new FuzzyController();
		var parents = new Array(parent1, parent2);
		offspring.initialise();
	
		// Fitness Function Crossover
		variables = new Array("position", "velocity", "action");
		for (iter1 = 0; iter1 < variables.length; ++iter1) {
			for (iter2 = 0; iter2 < offspring[variables[iter1]].sets; ++iter2) {
				offspring[variables[iter1]].sets[iter2] = choose(parents)[variables[iter1]].sets[iter2];
			}
		}
		
		// Note: currently not crossing over rules, nor individual parts of the fitness functions
	
		return offspring;
	}
	
    // ********************************************************************
    // Function:    mutate()
    // Purpose:     mutates a controller at a small chance
    // ********************************************************************
    this.mutate = function(controller) {
	
		variables = new Array("position", "velocity", "action");
		for (iter1 = 0; iter1 < variables.length; ++iter1) {
			for (iter2 = 0; iter2 < controller[variables[iter1]].sets.length; ++iter2) {
				if (Math.random() < MUTATION_CHANCE) {
					controller[variables[iter1]].sets[iter2].lbp = randomise(-650, controller[variables[iter1]].sets[iter2].lpp);
				}
				if (Math.random() < MUTATION_CHANCE) {
					controller[variables[iter1]].sets[iter2].lpp = randomise(controller[variables[iter1]].sets[iter2].lbp, controller[variables[iter1]].sets[iter2].rpp);
				}
				if (Math.random() < MUTATION_CHANCE) {
					controller[variables[iter1]].sets[iter2].rpp = randomise(controller[variables[iter1]].sets[iter2].lpp, controller[variables[iter1]].sets[iter2].rbp);
				}
				if (Math.random() < MUTATION_CHANCE) {
					controller[variables[iter1]].sets[iter2].rbp = randomise(controller[variables[iter1]].sets[iter2].rpp, 650);
				}
			}
		}
		
		// Note: currently not mutating rules
	
		return controller;
	}
	
    // ********************************************************************
    // Function:    logic()
    // Purpose:     Handle all game logic. 
    // ********************************************************************
    this.logic = function() {
		if (this.stop) return;
	
		// Process each solution
		for (i = 0; i < NUM_SOLUTIONS; ++i) {
	
			// Get track control
			this.tracks[i].logic(this.lines[i]);
		
			// Perform Line Logic
			this.lines[i].logic(false);
			
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
        this.ctx.beginPath();                // Start drawing
        this.ctx.rect(0,0,                   // Draws rectangle
            CANVAS_WIDTH,
            CANVAS_HEIGHT);        
        this.ctx.closePath();                // Ends drawing
        this.ctx.fill();                     // Fills rectangle w/ active color
		
		// Text properties
		this.ctx.font = '20px san-serif';
		this.ctx.textBaseline = 'top';
		this.ctx.textAlign = 'right';
		this.ctx.fillStyle = "#222";
		
		// Statistics
		this.ctx.fillText("SIMULATING GENERATION "+this.generation+"...", 5, CANVAS_WIDTH-5);
		
    }
	
    // ********************************************************************
    // Function:    draw()
    // Purpose:     Draws all game objects and text to the canvas. 
    // ********************************************************************
    this.draw = function() {
        // Clear the canvas to the level's bg color
        this.clear();
		
		// Draw current results to the screen
		//this.results[0].draw(this.ctx);
		
		
    }	
	
}

// ********************************************************************
// Function:    geneticsLoop()
// Purpose:     Start function which adds game_Loop to interval
// ********************************************************************
function geneticsLoop() {
	this_genetics.gameLoop();
}

// ********************************************************************
// Function:    startGenetics()
// Purpose:     Start function which adds game_Loop to interval
// ********************************************************************
function startGenetics() {
	this_genetics.interval_ID = setInterval(geneticsLoop, 1000 / OPS);
	console.log("Simulating generation "+this_genetics.generation+"...");
}

// ********************************************************************
// Function:    stopGenetics()
// Purpose:     Removes the game loop from the interval.
// ********************************************************************
function stopGenetics() {
	if (this_genetics.interval_ID) clearInterval(this_genetics.interval_ID);
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
	//this_genetics.clear();
}