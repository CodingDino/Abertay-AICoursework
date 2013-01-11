// ************************************************************************ 
// File Name:   Results.js 
// Author:      Sarah Herzog 
// Purpose:     Evaluation of the controller performance 
// ************************************************************************


// ************************************************************************
// Global Constants
// ************************************************************************
var RESULTS_X_PAD = 270,
	RESULTS_Y_PAD = 20,
	RESULTS_TRUNC = 25;

// Results Class
function Results() {
    // ********************************************************************
    // Data Members 
    // ********************************************************************
	this.data_set = new Array();		// Array to hold data
	this.statistics = new Object;		// Totals and statistics based on data

    // ********************************************************************
    // Function:    initialise()
    // Purpose:     Sets default variables
    // ********************************************************************
	this.initialise = function() {
		var results_canvas = document.getElementById('canvas_results');     // The canvas itself
		this.ctx = results_canvas.getContext('2d');           				// 2d graphics context
			
		// Set canvas size    
		results_canvas.width = CANVAS_WIDTH;
		results_canvas.height = CANVAS_HEIGHT;
	}
	
    // ********************************************************************
    // Function:    reset()
    // Purpose:     Resets to starting values
    // ********************************************************************
    this.reset = function() {	
		this.data_set = new Array();
		this.statistics = new Object;	
		//this.clear();
    }
	
    // ********************************************************************
    // Function:    record()
    // Purpose:     Records the game state for later analyses
    // ********************************************************************
    this.record = function(line, car) {	
		var point = new Object();
		point.line_pos = line.position;
		point.car_pos = car.position;
		point.line_vel = line.velocity;
		point.car_vel = car.velocity;
		this.data_set.push(point);
    }
	
    // ********************************************************************
    // Function:    process()
    // Purpose:     Processes the results and performs analyses on them.
    // ********************************************************************
    this.process = function(runtime) {	
		// Record run time
		this.statistics.runtime = runtime;
	
		// Initialise sums
		this.statistics.total_distance = 0;
		this.statistics.vel_mem = new Array(0,0,0,0,0);
		this.statistics.pos_mem = new Array(0,0,0,0,0);
		this.statistics.act_mem = new Array(0,0,0,0,0,0,0,0,0);
		
		// Initialise percentages
		this.statistics.vel_mem_percent = new Array(0,0,0,0,0);
		this.statistics.pos_mem_percent = new Array(0,0,0,0,0);
		this.statistics.act_mem_percent = new Array(0,0,0,0,0,0,0,0,0);
		
		// For each point of data...
		var sorted_distance = Array();
		for (var i = 0; i < this.data_set.length; ++i) {
		
			// Get the point to work with
			var point = this.data_set[i];
			
			// Calculate relative values
			point.rel_pos = point.car_pos - point.line_pos;
			point.rel_vel = point.car_vel - point.line_vel;
			
			// Record distance for later sorting
			sorted_distance.push(Math.abs(point.rel_pos));
			
			// Add distance to sum
			this.statistics.total_distance += Math.abs(point.rel_pos);
			
			// Add set memberships to sums
			var vel = new Array(0,0,0,0,0);
			for (iter = 0; iter < this.statistics.vel_mem.length; ++iter) {
				vel[iter] = controller.fuzzify("velocity",iter,point.rel_vel);
				this.statistics.vel_mem[iter] += vel[iter];
			}
			var pos = new Array(0,0,0,0,0);
			for (iter = 0; iter < this.statistics.pos_mem.length; ++iter) {
				pos[iter] += controller.fuzzify("position",iter,point.rel_vel);
				this.statistics.pos_mem[iter] += pos[iter];
			}
			var act = new Array(0,0,0,0,0,0,0,0,0);
			for (iter = 0; iter < pos.length; ++iter) {
				for (iter2 = 0; iter2 < vel.length; ++iter2) {
					var act_index = controller.rules[iter][iter2];
					act[act_index] = Math.max(act[act_index], Math.min(pos[iter],vel[iter2]));
				}
			}
			for (iter = 0; iter < this.statistics.act_mem.length; ++iter) {
				this.statistics.act_mem[iter] += act[iter];
			}
			
		}
		
		// Membership Percentages
		for (iter = 0; iter < this.statistics.vel_mem.length; ++iter) {
			this.statistics.vel_mem_percent[iter] = 100 * this.statistics.vel_mem[iter] / this.data_set.length;
		}
		for (iter = 0; iter < this.statistics.pos_mem.length; ++iter) {
			this.statistics.pos_mem_percent[iter] = 100 * this.statistics.pos_mem[iter] / this.data_set.length;
		}
		for (iter = 0; iter < this.statistics.act_mem.length; ++iter) {
			this.statistics.act_mem_percent[iter] = 100 * this.statistics.act_mem[iter] / this.data_set.length;
		}
			
		// Mean
		this.statistics.mean_distance = this.statistics.total_distance / this.data_set.length;
		
		// Standard deviation
		var sum_of_squares = 0;
		for (var i = 0; i < sorted_distance.length; ++i) {
			sum_of_squares += Math.pow( sorted_distance[i] - this.statistics.mean_distance , 2);
		}
		this.statistics.standard_deviation = Math.sqrt( sum_of_squares / this.data_set.length );
		
		// Median
		sorted_distance.sort( function(a,b) {return a - b;} );
		var half = Math.floor(sorted_distance.length/2)
		if(sorted_distance.length % 2)
			this.statistics.median = sorted_distance[half];
		else
			this.statistics.median = (sorted_distance[half-1] + sorted_distance[half]) / 2.0;
		
    }
    
    // ********************************************************************
    // Function:    clear()
    // Purpose:     Sets up the results for each frame. 
    // ********************************************************************
    this.clear = function() {
		this.ctx.fillStyle = 'rgba('+        // Sets fill color
		'255,255,200,255)';
        this.ctx.beginPath();                // Start drawing
        this.ctx.rect(0,0,        		 	// Draws rectangle
            CANVAS_WIDTH,
            CANVAS_HEIGHT);        
        this.ctx.closePath();                // Ends drawing
        this.ctx.fill();                     // Fills rectangle w/ active color
    }
	
    // ********************************************************************
    // Function:    draw()
    // Purpose:     Draws all results text to the canvas. 
    // ********************************************************************
    this.draw = function() {
	
        // Clear the readout
        this.clear();
		
		// Exit here if there's no data
		if (!this.data_set.length) return;
		
		// Text properties
		this.ctx.font = '20px san-serif';
		this.ctx.textBaseline = 'top';
		this.ctx.textAlign = 'left';
		this.ctx.fillStyle = "#222";
		
		// Statistics
		this.ctx.fillText("RESULTS", 5, 5+RESULTS_Y_PAD*(0));
		this.ctx.fillText(("   Runtime = " + this.statistics.runtime/1000).substring(0,RESULTS_TRUNC), 5, 5+RESULTS_Y_PAD*(1));
		this.ctx.fillText(("   Data Points = " + this.data_set.length).substring(0,RESULTS_TRUNC), 5, 5+RESULTS_Y_PAD*(2));
		
		this.ctx.fillText("DEVIATION FROM COURSE", RESULTS_X_PAD, 5+RESULTS_Y_PAD*(0));
		this.ctx.fillText(("   Sum (Overall) = " + this.statistics.total_distance).substring(0,RESULTS_TRUNC), RESULTS_X_PAD, 5+RESULTS_Y_PAD*(1));
		this.ctx.fillText(("   Median = " + this.statistics.median).substring(0,RESULTS_TRUNC), RESULTS_X_PAD, 5+RESULTS_Y_PAD*(2));
		this.ctx.fillText(("   Mean = " + this.statistics.mean_distance).substring(0,RESULTS_TRUNC), RESULTS_X_PAD, 5+RESULTS_Y_PAD*(3));
		this.ctx.fillText(("   Standard Dev. = " + this.statistics.standard_deviation).substring(0,RESULTS_TRUNC), RESULTS_X_PAD, 5+RESULTS_Y_PAD*(4));
		
		
		// Position Membership
		this.ctx.fillText("POSITION MEMBERSHIP %", 5, 5+RESULTS_Y_PAD*(8));
		for (iter = 0; iter < this.statistics.pos_mem_percent.length; ++iter) {
			this.ctx.fillText(("   "+controller["position"].sets[iter].name+" % = "+this.statistics.pos_mem_percent[iter]).substring(0,RESULTS_TRUNC), 5, 5+RESULTS_Y_PAD*(9+iter));
		}
		
		// Velocity Membership
		this.ctx.fillText("VELOCITY MEMBERSHIP %", RESULTS_X_PAD, 5+RESULTS_Y_PAD*(8));
		for (iter = 0; iter < this.statistics.vel_mem_percent.length; ++iter) {
			this.ctx.fillText(("   "+controller["velocity"].sets[iter].name+" % = "+this.statistics.vel_mem_percent[iter]).substring(0,RESULTS_TRUNC), RESULTS_X_PAD, 5+RESULTS_Y_PAD*(9+iter));
		}
		
		// Action Membership
		this.ctx.fillText("ACTION MEMBERSHIP %", RESULTS_X_PAD*2, 5+RESULTS_Y_PAD*(4));
		for (iter = 0; iter < this.statistics.act_mem_percent.length; ++iter) {
			this.ctx.fillText(("   "+controller["action"].sets[iter].name+" % = "+this.statistics.act_mem_percent[iter]).substring(0,RESULTS_TRUNC), RESULTS_X_PAD*2, 5+RESULTS_Y_PAD*(5+iter));
		}
	
    } 
}