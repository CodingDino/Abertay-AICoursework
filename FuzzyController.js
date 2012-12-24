// ************************************************************************ 
// File Name:   FuzzyController.js 
// Author:      Sarah Herzog 
// Purpose:     AI object which processes input using fuzzy logic
// ************************************************************************

// Inheritance
FuzzyController.prototype = new AI();
FuzzyController.prototype.constructor = FuzzyController;


// FuzzyController Class
function FuzzyController() {

    // ********************************************************************
    // Function:    initialise()
    // Purpose:     Sets default variables
    // ********************************************************************
	this.initialise = function() {
	
		// ********************************************************************
		// Position Set Information 
		// ********************************************************************
		this.position = new Object();
		this.position.sets = new Object();
		this.position.sets.length = 5;
		this.position.sets[0] = new Object();
		this.position.sets[0].name = "Far Left";
		this.position.sets[1] = new Object();
		this.position.sets[1].name = "Left";
		this.position.sets[2] = new Object();
		this.position.sets[2].name = "Center";
		this.position.sets[3] = new Object();
		this.position.sets[3].name = "Right";
		this.position.sets[4] = new Object();
		this.position.sets[4].name = "Far Right";
	
		// ********************************************************************
		// Velocity Set Information 
		// ********************************************************************
		this.velocity = new Object();
		this.velocity.sets = new Object();
		this.velocity.sets.length = 5;
		this.velocity.sets[0] = new Object();
		this.velocity.sets[0].name = "Large Left";
		this.velocity.sets[1] = new Object();
		this.velocity.sets[1].name = "Left";
		this.velocity.sets[2] = new Object();
		this.velocity.sets[2].name = "None";
		this.velocity.sets[3] = new Object();
		this.velocity.sets[3].name = "Right";
		this.velocity.sets[4] = new Object();
		this.velocity.sets[4].name = "Large Right";
	
		// ********************************************************************
		// Action Set Information 
		// ********************************************************************
		this.action = new Object();
		this.action.sets = new Object();
		this.action.sets.length = 9;
		this.action.sets[0] = new Object();
		this.action.sets[0].name = "Extreme Left";
		this.action.sets[1] = new Object();
		this.action.sets[1].name = "Large Left";
		this.action.sets[2] = new Object();
		this.action.sets[2].name = "Left";
		this.action.sets[3] = new Object();
		this.action.sets[3].name = "Slight Left";
		this.action.sets[4] = new Object();
		this.action.sets[4].name = "None";
		this.action.sets[5] = new Object();
		this.action.sets[5].name = "Slight Right";
		this.action.sets[6] = new Object();
		this.action.sets[6].name = "Right";
		this.action.sets[7] = new Object();
		this.action.sets[7].name = "Large Right";
		this.action.sets[8] = new Object();
		this.action.sets[8].name = "Extreme Right";
		
		// ********************************************************************
		// Line Position Member Function 
		// ********************************************************************
		
		// Far Left Member Function
		this.position.sets[0].memfunc = new Object();
		this.position.sets[0].memfunc.lbp = -650;
		this.position.sets[0].memfunc.lpp = -650;
		this.position.sets[0].memfunc.lc = 5;
		this.position.sets[0].memfunc.rpp = -350;
		this.position.sets[0].memfunc.rbp = -250;
		this.position.sets[0].memfunc.rc = 5;
		
		// Left Member Function
		this.position.sets[1].memfunc = new Object();
		this.position.sets[1].memfunc.lbp = -350;
		this.position.sets[1].memfunc.lpp = -250;
		this.position.sets[1].memfunc.lc = 5;
		this.position.sets[1].memfunc.rpp = -150;
		this.position.sets[1].memfunc.rbp = -50;
		this.position.sets[1].memfunc.rc = 5;
		
		// Center Member Function
		this.position.sets[2].memfunc = new Object();
		this.position.sets[2].memfunc.lbp = -150;
		this.position.sets[2].memfunc.lpp = -50;
		this.position.sets[2].memfunc.lc = 5;
		this.position.sets[2].memfunc.rpp = 50;
		this.position.sets[2].memfunc.rbp = 150;
		this.position.sets[2].memfunc.rc = 5;
		
		// Right Member Function
		this.position.sets[3].memfunc = new Object();
		this.position.sets[3].memfunc.lbp = 50;
		this.position.sets[3].memfunc.lpp = 150;
		this.position.sets[3].memfunc.lc = 5;
		this.position.sets[3].memfunc.rpp = 250;
		this.position.sets[3].memfunc.rbp = 350;
		this.position.sets[3].memfunc.rc = 5;
		
		// Far Right Member Function
		this.position.sets[4].memfunc = new Object();
		this.position.sets[4].memfunc.lbp = 250;
		this.position.sets[4].memfunc.lpp = 350;
		this.position.sets[4].memfunc.lc = 5;
		this.position.sets[4].memfunc.rpp = 650;
		this.position.sets[4].memfunc.rbp = 650;
		this.position.sets[4].memfunc.rc = 5;
		
		// ********************************************************************
		// Line Velocity Member Function 
		// ********************************************************************
		
		// Far Left Member Function
		this.velocity.sets[0].memfunc = new Object();
		this.velocity.sets[0].memfunc.lbp = -650;
		this.velocity.sets[0].memfunc.lpp = -650;
		this.velocity.sets[0].memfunc.lc = 0;
		this.velocity.sets[0].memfunc.rpp = -350;
		this.velocity.sets[0].memfunc.rbp = -250;
		this.velocity.sets[0].memfunc.rc = 0;
		
		// Left Member Function
		this.velocity.sets[1].memfunc = new Object();
		this.velocity.sets[1].memfunc.lbp = -350;
		this.velocity.sets[1].memfunc.lpp = -250;
		this.velocity.sets[1].memfunc.lc = 0;
		this.velocity.sets[1].memfunc.rpp = -150;
		this.velocity.sets[1].memfunc.rbp = -50;
		this.velocity.sets[1].memfunc.rc = 0;
		
		// Center Member Function
		this.velocity.sets[2].memfunc = new Object();
		this.velocity.sets[2].memfunc.lbp = -150;
		this.velocity.sets[2].memfunc.lpp = -50;
		this.velocity.sets[2].memfunc.lc = 0;
		this.velocity.sets[2].memfunc.rpp = 50;
		this.velocity.sets[2].memfunc.rbp = 150;
		this.velocity.sets[2].memfunc.rc = 0;
		
		// Right Member Function
		this.velocity.sets[3].memfunc = new Object();
		this.velocity.sets[3].memfunc.lbp = 50;
		this.velocity.sets[3].memfunc.lpp = 150;
		this.velocity.sets[3].memfunc.lc = 0;
		this.velocity.sets[3].memfunc.rpp = 250;
		this.velocity.sets[3].memfunc.rbp = 350;
		this.velocity.sets[3].memfunc.rc = 0;
		
		// Far Right Member Function
		this.velocity.sets[4].memfunc = new Object();
		this.velocity.sets[4].memfunc.lbp = 250;
		this.velocity.sets[4].memfunc.lpp = 350;
		this.velocity.sets[4].memfunc.lc = 0;
		this.velocity.sets[4].memfunc.rpp = 650;
		this.velocity.sets[4].memfunc.rbp = 650;
		this.velocity.sets[4].memfunc.rc = 0;
		
		// ********************************************************************
		// Action Member Function 
		// ********************************************************************
		
		// Extreme Left Member Function
		this.action.sets[0].memfunc = new Object();
		this.action.sets[0].memfunc.lbp = -650;
		this.action.sets[0].memfunc.lpp = -650;
		this.action.sets[0].memfunc.lc = 0;
		this.action.sets[0].memfunc.rpp = -550;
		this.action.sets[0].memfunc.rbp = -450;
		this.action.sets[0].memfunc.rc = 0;
		
		// Large Left Member Function
		this.action.sets[1].memfunc = new Object();
		this.action.sets[1].memfunc.lbp = -600;
		this.action.sets[1].memfunc.lpp = -500;
		this.action.sets[1].memfunc.lc = 0;
		this.action.sets[1].memfunc.rpp = -400;
		this.action.sets[1].memfunc.rbp = -300;
		this.action.sets[1].memfunc.rc = 0;
		
		// Left Member Function
		this.action.sets[2].memfunc = new Object();
		this.action.sets[2].memfunc.lbp = -450;
		this.action.sets[2].memfunc.lpp = -350;
		this.action.sets[2].memfunc.lc = 0;
		this.action.sets[2].memfunc.rpp = -250;
		this.action.sets[2].memfunc.rbp = -150;
		this.action.sets[2].memfunc.rc = 0;
		
		// Slight Left Member Function
		this.action.sets[3].memfunc = new Object();
		this.action.sets[3].memfunc.lbp = -300;
		this.action.sets[3].memfunc.lpp = -200;
		this.action.sets[3].memfunc.lc = 0;
		this.action.sets[3].memfunc.rpp = -100;
		this.action.sets[3].memfunc.rbp = 0;
		this.action.sets[3].memfunc.rc = 0;
		
		// Center Member Function
		this.action.sets[4].memfunc = new Object();
		this.action.sets[4].memfunc.lbp = -150;
		this.action.sets[4].memfunc.lpp = -50;
		this.action.sets[4].memfunc.lc = 0;
		this.action.sets[4].memfunc.rpp = 50;
		this.action.sets[4].memfunc.rbp = 150;
		this.action.sets[4].memfunc.rc = 0;
		
		// Slight Right Member Function
		this.action.sets[5].memfunc = new Object();
		this.action.sets[5].memfunc.lbp = 0;
		this.action.sets[5].memfunc.lpp = 100;
		this.action.sets[5].memfunc.lc = 0;
		this.action.sets[5].memfunc.rpp = 200;
		this.action.sets[5].memfunc.rbp = 300;
		this.action.sets[5].memfunc.rc = 0;
		
		// Right Member Function
		this.action.sets[6].memfunc = new Object();
		this.action.sets[6].memfunc.lbp = 150;
		this.action.sets[6].memfunc.lpp = 250;
		this.action.sets[6].memfunc.lc = 0;
		this.action.sets[6].memfunc.rpp = 350;
		this.action.sets[6].memfunc.rbp = 450;
		this.action.sets[6].memfunc.rc = 0;
		
		// Large Right Member Function
		this.action.sets[7].memfunc = new Object();
		this.action.sets[7].memfunc.lbp = 300;
		this.action.sets[7].memfunc.lpp = 400;
		this.action.sets[7].memfunc.lc = 0;
		this.action.sets[7].memfunc.rpp = 500;
		this.action.sets[7].memfunc.rbp = 600;
		this.action.sets[7].memfunc.rc = 0;
		
		// Extreme Right Member Function
		this.action.sets[8].memfunc = new Object();
		this.action.sets[8].memfunc.lbp = 450;
		this.action.sets[8].memfunc.lpp = 550;
		this.action.sets[8].memfunc.lc = 0;
		this.action.sets[8].memfunc.rpp = 650;
		this.action.sets[8].memfunc.rbp = 650;
		this.action.sets[8].memfunc.rc = 0;
		
		// ********************************************************************
		// Rules 
		// ********************************************************************
		for (iter = 0; iter < this.action.sets.length; ++iter) {
			this.action.sets[iter].rules = new Rule();
			for(iter2 = 0; iter2 <= iter; ++iter2) {
				var limit = this.position.sets.length;
				if (iter2 < limit && (iter-iter2) < limit) {
					this.action.sets[iter].rules.addRule(iter2,(iter-iter2));
				}
			}
		}
		
		
	}

    // ********************************************************************
    // Function:    process()
    // Purpose:     Given input, process using AI logic and recommend an
	//				action.
    // Input:       line_position - position of the line relative to player
	//				line_velocity - velocity of line relative to player
    // Output:      velcoty_change - recommended change in player velocity
    // ********************************************************************
	this.process = function(line_position, line_velocity) {
		// Default membership values
		var pos = new Array(0,0,0,0,0), 
			vel = new Array(0,0,0,0,0),
			act = new Array(0,0,0,0,0,0,0,0,0);
		
		// clamp(value, min, max) - limits value to the range min..max
		clamp = function(value, min, max) {
			if (value < min) value = min;
			if (value > max) value = max;
			return value;
		}
		
		// Clamp input into universe of discourse
		line_position = clamp(line_position, -600, 600);
		line_velocity = clamp(line_velocity, -600, 600);
		
		// Process inputs into set membership values
		for (iter = 0; iter < pos.length; ++iter) {
			pos[iter] = this.fuzzify("position",iter,line_position);
		}
		for (iter = 0; iter < vel.length; ++iter) {
			vel[iter] = this.fuzzify("velocity",iter,line_velocity);
		}
		
		// Use rules to determine degree of action membership
		for (iter = 0; iter < act.length; ++iter) {
			act[iter] = this.action.sets[iter].rules.processOutput(pos, vel);
		}
		
		// Use defuzzification to determine action from degree of membership
		var weighted_result = 0, // default value of 0
			total_area = 0,
			velocity_change = 0;
		for (iter = 0; iter < act.length; ++iter) {
			var result = this.defuzzify("action",iter,act[iter])
			weighted_result += result.value*result.area;
			total_area += result.area;
		}
		if (total_area > 0) velocity_change = weighted_result/total_area;
		
		return velocity_change; 
	}
	
    // ********************************************************************
    // Function:    fuzzify()
    // Purpose:     Determine the set membership for the given input
    // Input:       variable - The variable being processed
	//				set - the set to check for membership
	//				input - value to evaluate membership from
    // Output:      fuzzy_value - value of the fuzzy membership
    // ********************************************************************
	this.fuzzify = function(variable, set, input) {
		
		console.log("Fuzzifying variable = "+variable+", set="+set+", input="+input);
	
		// Determine points
		var lbp = this[variable].sets[set].memfunc.lbp,
			lpp = this[variable].sets[set].memfunc.lpp;
		var	lc = this[variable].sets[set].memfunc.lc,
			lbc = lbp+(this[variable].sets[set].memfunc.lc/10)*(lpp-lbp),
			lpc = lpp-(this[variable].sets[set].memfunc.lc/10)*(lpp-lbp);
		var rbp = this[variable].sets[set].memfunc.rbp,
			rpp = this[variable].sets[set].memfunc.rpp;
		var	rc = this[variable].sets[set].memfunc.rc,
			rpc = rpp+(this[variable].sets[set].memfunc.rc/10)*(rbp-rpp),
			rbc = rbp-(this[variable].sets[set].memfunc.rc/10)*(rbp-rpp);
		var fuzzy_value=0;
		console.log("   lbp = "+lbp+", lpp="+lpp+", lc="+lc+", lbc="+lbc+", lpc="+lpc);
		console.log("   rbp = "+rbp+", rpp="+rpp+", rc="+rc+", rpc="+rpc+", rbc="+rbc);
		
		// Below lbp - non-member
		if (input <= lbp) {
			fuzzy_value=0;
		}
		
		// Between lbp and lpp - in the sloped region of the graph
		else if (input > lbp && input < lpp) {
			// If there's no curviness, just use a straight line (faster)
			if (lc == 0) {
				var slope = (1)/(lpp-lbp);
				fuzzy_value = (input-lbp)*slope;
			}
			else { // use bezier curve equation to determine membership
				// Find cubic root t from x coordinates
				var a = -lbp+3*lbc-3*lpc+lpp,
					b = 3*lbp-6*lbc+3*lpc,
					c = -3*lbp+3*lbc,
					d = lbp - input;
				var t = this.solveCubic(a,b,c,d);
				
				// Given t, calculate y
				var y = Math.pow((1-t),3) + 3*Math.pow((1-t),2)*t;
				fuzzy_value = 1-y; // Why??????!!!!!
			}
		}
		
		// Between lpp and rpp - total membership
		else if (input >= lpp && input <= rpp) {
			fuzzy_value = 1;
		}
		
		// Between rpp and rbp - in the sloped region of the graph
		else if (input > rpp && input < rbp) {
			// If there's no curviness, just use a straight line (faster)
			if (rc == 0) {
				var slope = (1)/(rbp-rpp);
				fuzzy_value = (input-rpp)*slope;
			}
			else { // use bezier curve equation to determine membership
				// Find cubic root t from x coordinates
				var a = -rpp+3*rpc-3*rbc+rbp,
					b = 3*rpp-6*rpc+3*rbc,
					c = -3*rpp+3*rpc,
					d = rpp - input;
				var t = this.solveCubic(a,b,c,d);
				
				// Given t, calculate y
				var y = Math.pow((1-t),3) + 3*Math.pow((1-t),2)*t;
				fuzzy_value = y;
			}
		}
		
		// Above rbp - non-member
		else if (input >= rbp) {
			fuzzy_value = 0;
		}
		
		// Return result
		console.log("   Fuzzification result: fuzzy_value = "+fuzzy_value);
		return fuzzy_value;
	}
	
    // ********************************************************************
    // Function:    solveCubic()
    // Purpose:     Given 4 coefficients, determine the root falling 
	//					between 0 and 1
    // Input:       a*x^3 + b*x^2 + c*x + d = 0
	// Output:		t = x falling between 0 and 1
    // ********************************************************************
	this.solveCubic = function(a,b,c,d) {
		var p = (3*a*c - Math.pow(b,2)) / (3 * Math.pow(a,2));
		var q = (9*a*b*c - 27*Math.pow(a,2)*d - 2*Math.pow(b,3)) / (27*Math.pow(a,3));
		var Q = p/3;
		var R = q/2;
		console.log("   Solving cubic root for a="+a+", b="+b+", c="+c+", d="+d);
		console.log("      Depressed cubic values p="+p+", q="+q+", Q="+Q+", R="+R);
		
		// Solve for w
		var w3 = (R + Math.sqrt(Q*Q*Q + R*R));
		var w = Math.pow(w3,(1/3)); 
		console.log("      w3="+w3+", w="+w);
		
		var t = w - p/(3*w);
		var x = t - b/(3*a);
		console.log("      t="+t+", x="+x);
		
		// As one equation
		// x = -b/(3*a)
			// - (1 / (3*a) ) 
					// * Math.pow((0.5)
								// *(2*b*b*b 
									// - 9*a*b*c
									// + 27*a*a*d
									// + Math.sqrt( Math.pow((2*b*b*b
															// -9*a*b*c
															// +27*a*a*d),2
												// )
												// -4*Math.pow((b*b-3*a*c),3)
									// )
								// ),1/3)
			// - (1 / (3*a) ) 
					// * Math.pow((0.5)
								// *(2*b*b*b 
									// - 9*a*b*c
									// + 27*a*a*d
									// - Math.sqrt( Math.pow((2*b*b*b
															// -9*a*b*c
															// +27*a*a*d),2
												// )
												// -4*Math.pow((b*b-3*a*c),3)
									// )
								// ),1/3)
		// console.log("      x="+x);
		
		return x;
	}
	
    // ********************************************************************
    // Function:    defuzzify()
    // Purpose:     Given a set membership, determine the action to be
	//					taken. NOTE: Currently ignores the curviness
	//					of output functions.
    // Input:       variable - The variable being processed
	//				set - the set to check for membership
	//				input - fuzzy set membership
    // Output:      result.value - real interpretation based on fuzzy set
	//				result.area - weighting for the value
    // ********************************************************************
	this.defuzzify = function(variable, set, input) {
		// Error handling
		if (!this[variable]) {
			console.error("Cannor find variable "+variable);
			return;
		}
		
		console.log("Defuzzifying variable = "+variable+", set="+set+", input="+input);
	
		// Determine points
		var lbp = this[variable].sets[set].memfunc.lbp,
			lpp = this[variable].sets[set].memfunc.lpp;
		var	lc = this[variable].sets[set].memfunc.lc,
			lbc = lbp+(this[variable].sets[set].memfunc.lc/10)*(lpp-lbp),
			lpc = lpp-(this[variable].sets[set].memfunc.lc/10)*(lpp-lbp);
		var rbp = this[variable].sets[set].memfunc.rbp,
			rpp = this[variable].sets[set].memfunc.rpp;
		var	rc = this[variable].sets[set].memfunc.rc,
			rpc = rpp+(this[variable].sets[set].memfunc.rc/10)*(rbp-rpp),
			rbc = rbp-(this[variable].sets[set].memfunc.rc/10)*(rbp-rpp);
		var result = new Object(); 
		result.value = 0; 
		result.area = 0;
		
		// Non-member - no recommendation able to be made
		if (input == 0) {
			// Result remains 0,0
		}
		// Full-member
		if (input == 1) {
			// Area under the peak
			result.value = lpp+(rpp-lpp)/2;
			result.area = (rpp-lpp);
		}
		
		// Partial member
		if (input > 0 && input < 1) {
			// Area under the partial shape, we need x coordinates for both sides.
			var lx, rx;
			
			// Left side
			// If there's no curviness, just use a straight line (faster)
			//if (lc == 0) {
				var slope = (1)/(lpp-lbp);
				lx = lbp + input/slope;
			// } else { // use bezier curve equation to determine x
				// var a = 0+3*0-3*1+1,
					// b = 3*0-6*0+3*1,
					// c = -3*0+3*0,
					// d = 0 - input;
				// var a = -2,
					// b = 3,
					// c = 0,
					// d = -input;
				// var t = this.solveCubic(a,b,c,d);
				
				// console.log("   Cubic root t = "+t);
				
				// t = 0.5 * (
					// Math.pow(2*Math.sqrt(input*input - input)-2*input+1,(1/3))
					// + 1 / (Math.pow((2*Math.sqrt(input*input - input)-2*input+1),(1/3))) + 1
					// )
				// console.log("   Wolfram t = "+t);
				
				
				//Given t, calculate x
				// lx = Math.pow((1-t),3)*lbp + 3*Math.pow((1-t),2)*t*lbc 
						// + (1-t)*t*t*lpc + t*t*t*lpp;
			// }
			
			// Left side
			// If there's no curviness, just use a straight line (faster)
			// if (rc == 0) {
				var slope = (1)/(rbp-rpp);
				rx = rpp + input/slope;
			// } else { // use bezier curve equation to determine x
				// var a = -1+3*1-3*0+0,
					// b = 3*1-6*1+3*0,
					// c = -3*1+3*1,
					// d = 1 - input;
				// var a = 2,
					// b = -3,
					// c = 0,
					// d = 1 - input;
				// var t = this.solveCubic(a,b,c,d);
				
				//Given t, calculate x
				// rx = Math.pow((1-t),3)*rpp + 3*Math.pow((1-t),2)*t*rpc 
						// + (1-t)*t*t*rbc + t*t*t*rbp;
			// }
			
			// Calculate value and area
			result.value = lx+(rx-lx)/2;
			result.area = (rx-lx)*input;
		}
		
		// Return the result
		console.log("   Defuzzification result: value = "+result.value+", area = "+result.area);
		return result;
		
	}
}