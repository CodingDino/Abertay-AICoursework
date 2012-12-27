// ************************************************************************ 
// File Name:   Car.js 
// Author:      Sarah Herzog 
// Purpose:     AI racecar 
// ************************************************************************

// ************************************************************************
// Global Constants
// ************************************************************************

// Car Class
function Car() {
    // ********************************************************************
    // Data Members 
    // ********************************************************************
	this.position = 0;		// The x position of the car in game world
	this.velocity = 0;		// The x velocity of the car in game world
	this.line_position;		// The position of the line relative to the car
	this.line_rel_vel;		// The velocity of the line relative to the car
	
    // ********************************************************************
    // Function:    logic()
    // Purpose:     Handles logic for line. 
	// Arguments:	abs_line_pos - the line position in the game world
    // ********************************************************************
    this.logic = function(abs_line_pos) {
		// Process abs_line_pos
		var new_line_position = abs_line_pos - this.position;
		this.line_rel_vel = (new_line_position - this.line_position) * FPS;
		this.line_position = new_line_position;
		
		// Send through fuzzy controller
		this.velocity = controller.process(this.line_position, this.line_rel_vel);
		
		// Update position based on velocity
		this.position = this.velocity / FPS;
    } 
	
    // ********************************************************************
    // Function:    draw()
    // Purpose:     Draws the line to the screen
    // ********************************************************************
    this.draw = function() {
		ctx.fillStyle = "#900";		// Set color
		// Circle (car)
        ctx.beginPath();
        ctx.arc(CANVAS_WIDTH/2, 70, 
            20, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.fill();
    }
}