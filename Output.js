// ************************************************************************ 
// File Name:   Output.js 
// Author:      Sarah Herzog 
// Purpose:     Class containing a rule
// ************************************************************************

// Output Class
function Output() {

	this.pos = [];
	this.vel = [];
	
    // ********************************************************************
    // Function:    addRule()
    // Purpose:     Records a pair of position and velocity fuzzy values
	//					which will be ANDed together. All pairs will then
	//					be ORed together to determine final membership.
    // Input:       pos - string name of the position fuzzy set
	//				vel - string name of the velocity fuzzy set
    // ********************************************************************
	this.addRule = function (pos, vel) {
		pos.push(pos);
		vel.push(vel);
	}
	
    // ********************************************************************
    // Function:    processOutput()
    // Purpose:     Given inputs and their set memberships, determines the
	//				output based it's rules.
    // Input:       sets - two sets, pos and vel, containing input 
	//					membership values
    // Output:      result - the membership value for this output
    // ********************************************************************
	this.processOutput = function(sets) {
		var result = 0;
		for (var i = 0; i < pos.length; ++i) {
			// get the correct position and velocity from the provided sets
			var position = sets.pos[this.pos[i]]; 
			var velocity = sets.vel[this.vel[i]];
			// AND the two together, then OR them with the result.
			result = Math.max(result, Math.min(position,velocity))
		}
		return result;
	}

}