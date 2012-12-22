// ************************************************************************ 
// File Name:   Rule.js 
// Author:      Sarah Herzog 
// Purpose:     COntains all rules for a specific output
// ************************************************************************

// Rule Class
function Rule() {

	this.posrules = [];
	this.velrules = [];
	
    // ********************************************************************
    // Function:    addRule()
    // Purpose:     Records a pair of position and velocity fuzzy values
	//					which will be ANDed together. All pairs will then
	//					be ORed together to determine final membership.
    // Input:       pos - integer index of the position fuzzy set
	//				vel - integer index of the velocity fuzzy set
    // ********************************************************************
	this.addRule = function (pos, vel) {
		this.posrules.push(pos);
		this.velrules.push(vel);
	}
	
    // ********************************************************************
    // Function:    processOutput()
    // Purpose:     Given inputs and their set memberships, determines the
	//				output based it's rules.
    // Input:       pos_input - position set membership values
	//				vel_input - velocity set membership values
    // Output:      result - the membership value for this output
    // ********************************************************************
	this.processOutput = function(pos_input, vel_input) {
		var result = 0;
		for (var iter = 0; iter < this.posrules.length; ++iter) {
			// get the correct position and velocity from the provided sets
			var position = pos_input[this.posrules[iter]]; 
			var velocity = vel_input[this.velrules[iter]];
			// AND the two together, then OR them with the result.
			result = Math.max(result, Math.min(position,velocity))
		}
		return result;
	}

}