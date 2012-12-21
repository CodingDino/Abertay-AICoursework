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
		
		// OLD CODE
		// this.memfunc_pos_farleft_lbp = -650;
		// this.memfunc_pos_farleft_lpp = -650;
		// this.memfunc_pos_farleft_lc = 5;
		// this.memfunc_pos_farleft_rpp = -350;
		// this.memfunc_pos_farleft_rbp = -250;
		// this.memfunc_pos_farleft_rc = 5;
		//memfunc_pos_farleft_name = "Far Left";
		
		// Left Member Function
		this.position.sets[1].memfunc = new Object();
		this.position.sets[1].memfunc.lbp = -350;
		this.position.sets[1].memfunc.lpp = -250;
		this.position.sets[1].memfunc.lc = 5;
		this.position.sets[1].memfunc.rpp = -150;
		this.position.sets[1].memfunc.rbp = -50;
		this.position.sets[1].memfunc.rc = 5;
		
		// OLD CODE
		// this.memfunc_pos_left_lbp = -350;
		// this.memfunc_pos_left_lpp = -250;
		// this.memfunc_pos_left_lc = 5;
		// this.memfunc_pos_left_rpp = -150;
		// this.memfunc_pos_left_rbp = -50;
		// this.memfunc_pos_left_rc = 5;
		// this.memfunc_pos_left_name = "Left";
		
		// Center Member Function
		this.position.sets[2].memfunc = new Object();
		this.position.sets[2].memfunc.lbp = -150;
		this.position.sets[2].memfunc.lpp = -50;
		this.position.sets[2].memfunc.lc = 5;
		this.position.sets[2].memfunc.rpp = 50;
		this.position.sets[2].memfunc.rbp = 150;
		this.position.sets[2].memfunc.rc = 5;
		
		// OLD CODE
		// this.memfunc_pos_center_lbp = -150;
		// this.memfunc_pos_center_lpp = -50;
		// this.memfunc_pos_center_lc = 5;
		// this.memfunc_pos_center_rpp = 50;
		// this.memfunc_pos_center_rbp = 150;
		// this.memfunc_pos_center_rc = 5;
		// this.memfunc_pos_center_name = "Center";
		
		// Right Member Function
		this.position.sets[3].memfunc = new Object();
		this.position.sets[3].memfunc.lbp = 50;
		this.position.sets[3].memfunc.lpp = 150;
		this.position.sets[3].memfunc.lc = 5;
		this.position.sets[3].memfunc.rpp = 250;
		this.position.sets[3].memfunc.rbp = 350;
		this.position.sets[3].memfunc.rc = 5;
		
		// OLD CODE
		// this.memfunc_pos_right_lbp = 50;
		// this.memfunc_pos_right_lpp = 150;
		// this.memfunc_pos_right_lc = 5;
		// this.memfunc_pos_right_rpp = 250;
		// this.memfunc_pos_right_rbp = 350;
		// this.memfunc_pos_right_rc = 5;
		// this.memfunc_pos_right_name = "Right";
		
		// Far Right Member Function
		this.position.sets[4].memfunc = new Object();
		this.position.sets[4].memfunc.lbp = 250;
		this.position.sets[4].memfunc.lpp = 350;
		this.position.sets[4].memfunc.lc = 5;
		this.position.sets[4].memfunc.rpp = 650;
		this.position.sets[4].memfunc.rbp = 650;
		this.position.sets[4].memfunc.rc = 5;
		
		// OLD CODE
		// this.memfunc_pos_farright_lbp = 250;
		// this.memfunc_pos_farright_lpp = 350;
		// this.memfunc_pos_farright_lc = 5;
		// this.memfunc_pos_farright_rpp = 650;
		// this.memfunc_pos_farright_rbp = 650;
		// this.memfunc_pos_farright_rc = 5;
		// this.memfunc_pos_farright_name = "Far Right";
		
		// ********************************************************************
		// Line Velocity Member Function 
		// ********************************************************************
		
		// Far Left Member Function
		this.velocity.sets[0].memfunc = new Object();
		this.velocity.sets[0].memfunc.lbp = -650;
		this.velocity.sets[0].memfunc.lpp = -650;
		this.velocity.sets[0].memfunc.lc = 5;
		this.velocity.sets[0].memfunc.rpp = -350;
		this.velocity.sets[0].memfunc.rbp = -250;
		this.velocity.sets[0].memfunc.rc = 5;
		
		// OLD CODE
		// this.memfunc_vel_farleft_lbp = -650;
		// this.memfunc_vel_farleft_lpp = -650;
		// this.memfunc_vel_farleft_lc = 5;
		// this.memfunc_vel_farleft_rpp = -350;
		// this.memfunc_vel_farleft_rbp = -250;
		// this.memfunc_vel_farleft_rc = 5;
		//memfunc_vel_farleft_name = "Far Left";
		
		// Left Member Function
		this.velocity.sets[1].memfunc = new Object();
		this.velocity.sets[1].memfunc.lbp = -350;
		this.velocity.sets[1].memfunc.lpp = -250;
		this.velocity.sets[1].memfunc.lc = 5;
		this.velocity.sets[1].memfunc.rpp = -150;
		this.velocity.sets[1].memfunc.rbp = -50;
		this.velocity.sets[1].memfunc.rc = 5;
		
		// OLD CODE
		// this.memfunc_vel_left_lbp = -350;
		// this.memfunc_vel_left_lpp = -250;
		// this.memfunc_vel_left_lc = 5;
		// this.memfunc_vel_left_rpp = -150;
		// this.memfunc_vel_left_rbp = -50;
		// this.memfunc_vel_left_rc = 5;
		// this.memfunc_vel_left_name = "Left";
		
		// Center Member Function
		this.velocity.sets[2].memfunc = new Object();
		this.velocity.sets[2].memfunc.lbp = -150;
		this.velocity.sets[2].memfunc.lpp = -50;
		this.velocity.sets[2].memfunc.lc = 5;
		this.velocity.sets[2].memfunc.rpp = 50;
		this.velocity.sets[2].memfunc.rbp = 150;
		this.velocity.sets[2].memfunc.rc = 5;
		
		// OLD CODE
		// this.memfunc_vel_center_lbp = -150;
		// this.memfunc_vel_center_lpp = -50;
		// this.memfunc_vel_center_lc = 5;
		// this.memfunc_vel_center_rpp = 50;
		// this.memfunc_vel_center_rbp = 150;
		// this.memfunc_vel_center_rc = 5;
		// this.memfunc_vel_center_name = "Center";
		
		// Right Member Function
		this.velocity.sets[3].memfunc = new Object();
		this.velocity.sets[3].memfunc.lbp = 50;
		this.velocity.sets[3].memfunc.lpp = 150;
		this.velocity.sets[3].memfunc.lc = 5;
		this.velocity.sets[3].memfunc.rpp = 250;
		this.velocity.sets[3].memfunc.rbp = 350;
		this.velocity.sets[3].memfunc.rc = 5;
		
		// OLD CODE
		// this.memfunc_vel_right_lbp = 50;
		// this.memfunc_vel_right_lpp = 150;
		// this.memfunc_vel_right_lc = 5;
		// this.memfunc_vel_right_rpp = 250;
		// this.memfunc_vel_right_rbp = 350;
		// this.memfunc_vel_right_rc = 5;
		// this.memfunc_vel_right_name = "Right";
		
		// Far Right Member Function
		this.velocity.sets[4].memfunc = new Object();
		this.velocity.sets[4].memfunc.lbp = 250;
		this.velocity.sets[4].memfunc.lpp = 350;
		this.velocity.sets[4].memfunc.lc = 5;
		this.velocity.sets[4].memfunc.rpp = 650;
		this.velocity.sets[4].memfunc.rbp = 650;
		this.velocity.sets[4].memfunc.rc = 5;
		
		// OLD CODE
		// this.memfunc_vel_farright_lbp = 250;
		// this.memfunc_vel_farright_lpp = 350;
		// this.memfunc_vel_farright_lc = 5;
		// this.memfunc_vel_farright_rpp = 650;
		// this.memfunc_vel_farright_rbp = 650;
		// this.memfunc_vel_farright_rc = 5;
		// this.memfunc_vel_farright_name = "Far Right";
		
		// ********************************************************************
		// Action Member Function 
		// ********************************************************************
		
		// Extreme Left Member Function
		this.action.sets[0].memfunc = new Object();
		this.action.sets[0].memfunc.lbp = -650;
		this.action.sets[0].memfunc.lpp = -650;
		this.action.sets[0].memfunc.lc = 5;
		this.action.sets[0].memfunc.rpp = -550;
		this.action.sets[0].memfunc.rbp = -450;
		this.action.sets[0].memfunc.rc = 5;
		
		// OLD CODE
		// this.memfunc_act_extremeleft_lbp = -650;
		// this.memfunc_act_extremeleft_lpp = -650;
		// this.memfunc_act_extremeleft_lc = 5;
		// this.memfunc_act_extremeleft_rpp = -550;
		// this.memfunc_act_extremeleft_rbp = -450;
		// this.memfunc_act_extremeleft_rc = 5;
		// this.memfunc_act_extremeleft_name = "Extreme Left";
		
		// Large Left Member Function
		this.action.sets[1].memfunc = new Object();
		this.action.sets[1].memfunc.lbp = -600;
		this.action.sets[1].memfunc.lpp = -500;
		this.action.sets[1].memfunc.lc = 5;
		this.action.sets[1].memfunc.rpp = -400;
		this.action.sets[1].memfunc.rbp = -300;
		this.action.sets[1].memfunc.rc = 5;
		
		// OLD CODE
		// this.memfunc_act_largeleft_lbp = -600;
		// this.memfunc_act_largeleft_lpp = -500;
		// this.memfunc_act_largeleft_lc = 5;
		// this.memfunc_act_largeleft_rpp = -400;
		// this.memfunc_act_largeleft_rbp = -300;
		// this.memfunc_act_largeleft_rc = 5;
		// this.memfunc_act_largeleft_name = "Large Left";
		
		// Left Member Function
		this.action.sets[2].memfunc = new Object();
		this.action.sets[2].memfunc.lbp = -450;
		this.action.sets[2].memfunc.lpp = -350;
		this.action.sets[2].memfunc.lc = 5;
		this.action.sets[2].memfunc.rpp = -250;
		this.action.sets[2].memfunc.rbp = -150;
		this.action.sets[2].memfunc.rc = 5;
		
		// OLD CODE
		// this.memfunc_act_left_lbp = -450;
		// this.memfunc_act_left_lpp = -350;
		// this.memfunc_act_left_lc = 5;
		// this.memfunc_act_left_rpp = -250;
		// this.memfunc_act_left_rbp = -150;
		// this.memfunc_act_left_rc = 5;
		// this.memfunc_act_left_name = "Left";
		
		// Slight Left Member Function
		this.action.sets[3].memfunc = new Object();
		this.action.sets[3].memfunc.lbp = -300;
		this.action.sets[3].memfunc.lpp = -200;
		this.action.sets[3].memfunc.lc = 5;
		this.action.sets[3].memfunc.rpp = -100;
		this.action.sets[3].memfunc.rbp = 0;
		this.action.sets[3].memfunc.rc = 5;
		
		// OLD CODE
		// this.memfunc_act_slightleft_lbp = -300;
		// this.memfunc_act_slightleft_lpp = -200;
		// this.memfunc_act_slightleft_lc = 5;
		// this.memfunc_act_slightleft_rpp = -100;
		// this.memfunc_act_slightleft_rbp = 0;
		// this.memfunc_act_slightleft_rc = 5;
		// this.memfunc_act_slightleft_name = "Slight Left";
		
		// Center Member Function
		this.action.sets[4].memfunc = new Object();
		this.action.sets[4].memfunc.lbp = -150;
		this.action.sets[4].memfunc.lpp = -50;
		this.action.sets[4].memfunc.lc = 5;
		this.action.sets[4].memfunc.rpp = 50;
		this.action.sets[4].memfunc.rbp = 150;
		this.action.sets[4].memfunc.rc = 5;
		
		// OLD CODE
		// this.memfunc_act_center_lbp = -150;
		// this.memfunc_act_center_lpp = -50;
		// this.memfunc_act_center_lc = 5;
		// this.memfunc_act_center_rpp = 50;
		// this.memfunc_act_center_rbp = 150;
		// this.memfunc_act_center_rc = 5;
		// this.memfunc_act_center_name = "None";
		
		// Slight Right Member Function
		this.action.sets[5].memfunc = new Object();
		this.action.sets[5].memfunc.lbp = 0;
		this.action.sets[5].memfunc.lpp = 100;
		this.action.sets[5].memfunc.lc = 5;
		this.action.sets[5].memfunc.rpp = 200;
		this.action.sets[5].memfunc.rbp = 300;
		this.action.sets[5].memfunc.rc = 5;
		
		// OLD CODE
		// this.memfunc_act_slightright_lbp = 0;
		// this.memfunc_act_slightright_lpp = 100;
		// this.memfunc_act_slightright_lc = 5;
		// this.memfunc_act_slightright_rpp = 200;
		// this.memfunc_act_slightright_rbp = 300;
		// this.memfunc_act_slightright_rc = 5;
		// this.memfunc_act_slightright_name = "Slight Right";
		
		// Right Member Function
		this.action.sets[6].memfunc = new Object();
		this.action.sets[6].memfunc.lbp = 150;
		this.action.sets[6].memfunc.lpp = 250;
		this.action.sets[6].memfunc.lc = 5;
		this.action.sets[6].memfunc.rpp = 350;
		this.action.sets[6].memfunc.rbp = 450;
		this.action.sets[6].memfunc.rc = 5;
		
		// OLD CODE
		// this.memfunc_act_right_lbp = 150;
		// this.memfunc_act_right_lpp = 250;
		// this.memfunc_act_right_lc = 5;
		// this.memfunc_act_right_rpp = 350;
		// this.memfunc_act_right_rbp = 450;
		// this.memfunc_act_right_rc = 5;
		// this.memfunc_act_right_name = "Right";
		
		// Large Right Member Function
		this.action.sets[7].memfunc = new Object();
		this.action.sets[7].memfunc.lbp = 300;
		this.action.sets[7].memfunc.lpp = 400;
		this.action.sets[7].memfunc.lc = 5;
		this.action.sets[7].memfunc.rpp = 500;
		this.action.sets[7].memfunc.rbp = 600;
		this.action.sets[7].memfunc.rc = 5;
		
		// OLD CODE
		// this.memfunc_act_largeright_lbp = 300;
		// this.memfunc_act_largeright_lpp = 400;
		// this.memfunc_act_largeright_lc = 5;
		// this.memfunc_act_largeright_rpp = 500;
		// this.memfunc_act_largeright_rbp = 600;
		// this.memfunc_act_largeright_rc = 5;
		// this.memfunc_act_largeright_name = "Large Right";
		
		// Extreme Right Member Function
		this.action.sets[8].memfunc = new Object();
		this.action.sets[8].memfunc.lbp = 450;
		this.action.sets[8].memfunc.lpp = 550;
		this.action.sets[8].memfunc.lc = 5;
		this.action.sets[8].memfunc.rpp = 650;
		this.action.sets[8].memfunc.rbp = 650;
		this.action.sets[8].memfunc.rc = 5;
		
		// OLD CODE
		// this.memfunc_act_extremeright_lbp = 450;
		// this.memfunc_act_extremeright_lpp = 550;
		// this.memfunc_act_extremeright_lc = 5;
		// this.memfunc_act_extremeright_rpp = 650;
		// this.memfunc_act_extremeright_rbp = 650;
		// this.memfunc_act_extremeright_rc = 5;
		// this.memfunc_act_extremeright_name = "Extreme Right";
		
		// ********************************************************************
		// Rules 
		// ********************************************************************
		this.action.sets[0].rules = new Rule();
		this.action.sets[0].rules.addRule(0,0);
		this.action.sets[0].rules = new Rule();
		this.action.sets[0].rules.addRule(0,1);
		this.action.sets[0].rules.addRule(1,0);
		
		// OLD CODE
		// this.rule_extremeleft = new Output();
		// this.rule_extremeleft.addRule("farleft","largeleft");
		// this.rule_largeleft = new Output();
		// this.rule_largeleft.addRule("farleft","left");
		// this.rule_largeleft.addRule("left","largeleft");
		
		
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
		var sets = new Object();
		sets.pos = new Object();
		sets.pos.farleft=0,sets.pos.left=0,sets.pos.center=0,
			sets.pos.right=0,sets.pos.farright=0;
		sets.vel = new Object();
		sets.vel.farleft=0,sets.vel.left=0,sets.vel.center=0,
			sets.vel.right=0,sets.vel.farright=0;
		sets.act = new Object();
		sets.act.extremeleft=0,sets.act.largeleft=0,sets.act.slightleft=0,
			sets.act.left=0,sets.act.center=0,sets.act.slightright=0,
			sets.act.right=0,sets.act.largeright=0,sets.act.extremeright=0;
		
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
		sets.pos.farleft=processSetMembership("pos_farleft",line_position);
		sets.pos.left=processSetMembership("pos_left",line_position);
		sets.pos.center=processSetMembership("pos_center",line_position);
		sets.pos.right=processSetMembership("pos_right",line_position);
		sets.pos.farright=processSetMembership("pos_farright",line_position);
		
		// TODO: Use rules to determine degree of action membership
		
		// TODO: Use defuzzification to determine action from degree of membership
		
		return velocity_change = 0; // default value of 0
	}
	
    // ********************************************************************
    // Function:    processSetMembership()
    // Purpose:     Determine the set membership for the given input
    // Input:       set - The name of the set to be used
	//				input - velocity of line relative to player
    // Output:      velcoty_change - recommended change in player velocity
    // ********************************************************************
	this.processSetMembership = function(set, input) {
		//console.log("processSetMembership("+set+", "+input+") called");
		// Determine points
		var lbp = this['memfunc_'+set+'_lbp'],
			lpp = this['memfunc_'+set+'_lpp'];
		var	lc = this['memfunc_'+set+'_lc'],
			lbc = lbp+(this['memfunc_'+set+'_lc']/10)*(lpp-lbp),
			lpc = lpp-(this['memfunc_'+set+'_lc']/10)*(lpp-lbp);
		var rbp = this['memfunc_'+set+'_rbp'],
			rpp = this['memfunc_'+set+'_rpp'];
		var	rc = this['memfunc_'+set+'_rc'],
			rpc = rpp+(this['memfunc_'+set+'_rc']/10)*(rbp-rpp),
			rbc = rbp-(this['memfunc_'+set+'_rc']/10)*(rbp-rpp);
		
		// Below lbp - non-member
		if (input <= lbp) {
			//console.log("input ("+input+") <= lbp ("+lbp+")");
			//console.log("processSetMembership("+set+", "+input+") return "+0);
			return 0;
		}
		//console.log("input ("+input+") NOT <= lbp ("+lbp+")");
		
		// Between lbp and lpp - in the sloped region of the graph
		if (input > lbp && input < lpp) {
			// If there's no curviness, just use a straight line (faster)
			if (lc == 0) {
				var slope = (1)/(lpp-lbp);
				//console.log("processSetMembership("+set+", "+input+") return "+(input-lbp)*slope);
				return (input-lbp)*slope;
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
				//console.log("processSetMembership("+set+", "+input+") return "+y);
				return y;
			}
		}
		//console.log("input ("+input+") NOT > lbp ("+lbp+") and < lpp ("+lpp+")");
		
		// Between lpp and rpp - total membership
		if (input >= lpp && input <= rpp) {
			//console.log("input ("+input+") >= lpp ("+lpp+") and < =rpp ("+rpp+")");
			//console.log("processSetMembership("+set+", "+input+") return "+1);
			return 1;
		}
		//console.log("input ("+input+") NOT >= lpp ("+lpp+") and < =rpp ("+rpp+")");
		
		// Between rpp and rbp - in the sloped region of the graph
		if (input > rpp && input < rbp) {
			//console.log("input ("+input+") > rpp ("+rpp+") and < rbp ("+rbp+")");
			// If there's no curviness, just use a straight line (faster)
			if (rc == 0) {
				var slope = (1)/(rbp-rpp);
				//console.log("processSetMembership("+set+", "+input+") return "+(input-rpp)*slope);
				return (input-rpp)*slope;
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
				//console.log("processSetMembership("+set+", "+input+") return "+y);
				return y;
			}
		}
		//console.log("input ("+input+") NOT > rpp ("+rpp+") and < rbp ("+rbp+")");
		
		// Above rbp - non-member
		if (input >= rbp) {
			//console.log("input ("+input+") >= rbp ("+rbp+")");
			//console.log("processSetMembership("+set+", "+input+") return "+0);
			return 0;
		}
	}
	
    // ********************************************************************
    // Function:    solveCubic()
    // Purpose:     Given 4 coefficients, determine the root falling 
	//					between 0 and 1
    // Input:       a*x^3 + b*x^2 + c*x + d = 0
	// Output:		t = x falling between 0 and 1
    // ********************************************************************
	this.solveCubic = function(a,b,c,d) {
		//console.log("solveCubic() called");
		var p = (3*a*c - Math.pow(b,2)) / (3 * Math.pow(a,2));
		var q = (9*a*b*c - 27*Math.pow(a,2)*d - 2*Math.pow(b,3)) / (27*Math.pow(a,3));
		var Q = p/3;
		var R = q/2;
		//console.log("Q = "+Q);
		//console.log("R = "+R);
		
		// Solve for w
		var w3 = (R + Math.sqrt(Math.pow(Q,3) + Math.pow(R,2)));
		var w = Math.pow((R + Math.sqrt(Math.pow(Q,3) + Math.pow(R,2))),(1/3)); 
		//console.log("w3 = "+w3);
		//console.log("w = "+w);
		
		var t = w - p/(3*w);
		var x = t - b/(3*a);
		//console.log("t = "+t);
		//console.log("x = "+x);
		return x;
	}
	
}