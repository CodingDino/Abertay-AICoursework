// ************************************************************************ 
// File Name:   Utility.js 
// Author:      Sarah Herzog 
// Purpose:     Utility JS functions for use with the HTML inputs
// ************************************************************************ 

var ai_variables = new AIVariables();
var CANVAS_WIDTH = 1200,                 
	CANVAS_HEIGHT = 300,
	FUNC_TOP = 50,
	FUNC_BOT = 250;

// ************************************************************************
// Function:    inputUpdate()
// Purpose:     Updates the provided element to the provided value. 
// ************************************************************************
function inputUpdate(variable, memfunc, point, newValue)
{
	// Error checking
	if (point == "lbp") {
		if (newValue > ai_variables["memfunc_"+variable+"_"+memfunc+"_lpp"])
			newValue = ai_variables["memfunc_"+variable+"_"+memfunc+"_lpp"];
	}
	if (point == "lpp") {
		if (newValue < ai_variables["memfunc_"+variable+"_"+memfunc+"_lbp"])
			newValue = ai_variables["memfunc_"+variable+"_"+memfunc+"_lbp"];
		if (newValue > ai_variables["memfunc_"+variable+"_"+memfunc+"_rpp"])
			newValue = ai_variables["memfunc_"+variable+"_"+memfunc+"_rpp"];
	}
	if (point == "rpp") {
		if (newValue < ai_variables["memfunc_"+variable+"_"+memfunc+"_lpp"])
			newValue = ai_variables["memfunc_"+variable+"_"+memfunc+"_lpp"];
		if (newValue > ai_variables["memfunc_"+variable+"_"+memfunc+"_rbp"])
			newValue = ai_variables["memfunc_"+variable+"_"+memfunc+"_rbp"];
	}
	if (point == "rbp") {
		if (newValue < ai_variables["memfunc_"+variable+"_"+memfunc+"_rpp"])
			newValue = ai_variables["memfunc_"+variable+"_"+memfunc+"_rpp"];
	}
	if (point == "lc" || point == "rc") {
		if (newValue < 0)
			newValue = 0;
		if (newValue > 10)
			newValue = 10;
	}
	// Update input fields
	if (document.getElementById("input_memfunc_"+variable+"_"+memfunc+"_"+point))
		document.getElementById("input_memfunc_"+variable+"_"+memfunc+"_"+point).value=newValue;
	if (document.getElementById("readout_memfunc_"+variable+"_"+memfunc+"_"+point))
		document.getElementById("readout_memfunc_"+variable+"_"+memfunc+"_"+point).value=newValue;
		
	// Update value
	if (point != "name")
		ai_variables["memfunc_"+variable+"_"+memfunc+"_"+point] = parseInt(newValue, 10);
	
	// Update canvas
	updateMemFuncCanvas("pos");
	updateMemFuncCanvas("vel");
}

// ************************************************************************
// Function:    AIVariables()
// Purpose:     Sets up an object to hold AI variables 
// ************************************************************************
function AIVariables() {
    // ********************************************************************
    // Line Position Member Function 
    // ********************************************************************
	
	// Far Left Member Function
    this.memfunc_pos_farleft_lbp = -650;
    this.memfunc_pos_farleft_lpp = -650;
    this.memfunc_pos_farleft_lc = 0;
    this.memfunc_pos_farleft_rpp = -350;
    this.memfunc_pos_farleft_rbp = -250;
    this.memfunc_pos_farleft_rc = 0;
    this.memfunc_pos_farleft_name = "Far Left";
	
	// Left Member Function
    this.memfunc_pos_left_lbp = -350;
    this.memfunc_pos_left_lpp = -250;
    this.memfunc_pos_left_lc = 0;
    this.memfunc_pos_left_rpp = -150;
    this.memfunc_pos_left_rbp = -50;
    this.memfunc_pos_left_rc = 0;
    this.memfunc_pos_left_name = "Left";
	
	// Center Member Function
    this.memfunc_pos_center_lbp = -150;
    this.memfunc_pos_center_lpp = -50;
    this.memfunc_pos_center_lc = 0;
    this.memfunc_pos_center_rpp = 50;
    this.memfunc_pos_center_rbp = 150;
    this.memfunc_pos_center_rc = 0;
    this.memfunc_pos_center_name = "Center";
	
	// Right Member Function
    this.memfunc_pos_right_lbp = 50;
    this.memfunc_pos_right_lpp = 150;
    this.memfunc_pos_right_lc = 0;
    this.memfunc_pos_right_rpp = 250;
    this.memfunc_pos_right_rbp = 350;
    this.memfunc_pos_right_rc = 0;
    this.memfunc_pos_right_name = "Right";
	
	// Far Right Member Function
    this.memfunc_pos_farright_lbp = 250;
    this.memfunc_pos_farright_lpp = 350;
    this.memfunc_pos_farright_lc = 0;
    this.memfunc_pos_farright_rpp = 650;
    this.memfunc_pos_farright_rbp = 650;
    this.memfunc_pos_farright_rc = 0;
    this.memfunc_pos_farright_name = "Far Right";
	
    // ********************************************************************
    // Line Velocity Member Function 
    // ********************************************************************
	
	// Far Left Member Function
    this.memfunc_vel_farleft_lbp = -650;
    this.memfunc_vel_farleft_lpp = -650;
    this.memfunc_vel_farleft_lc = 0;
    this.memfunc_vel_farleft_rpp = -350;
    this.memfunc_vel_farleft_rbp = -250;
    this.memfunc_vel_farleft_rc = 0;
    this.memfunc_vel_farleft_name = "Large Left";
	
	// Left Member Function
    this.memfunc_vel_left_lbp = -350;
    this.memfunc_vel_left_lpp = -250;
    this.memfunc_vel_left_lc = 0;
    this.memfunc_vel_left_rpp = -150;
    this.memfunc_vel_left_rbp = -50;
    this.memfunc_vel_left_rc = 0;
    this.memfunc_vel_left_name = "Left";
	
	// Center Member Function
    this.memfunc_vel_center_lbp = -150;
    this.memfunc_vel_center_lpp = -50;
    this.memfunc_vel_center_lc = 0;
    this.memfunc_vel_center_rpp = 50;
    this.memfunc_vel_center_rbp = 150;
    this.memfunc_vel_center_rc = 0;
    this.memfunc_vel_center_name = "None";
	
	// Right Member Function
    this.memfunc_vel_right_lbp = 50;
    this.memfunc_vel_right_lpp = 150;
    this.memfunc_vel_right_lc = 0;
    this.memfunc_vel_right_rpp = 250;
    this.memfunc_vel_right_rbp = 350;
    this.memfunc_vel_right_rc = 0;
    this.memfunc_vel_right_name = "Right";
	
	// Far Right Member Function
    this.memfunc_vel_farright_lbp = 250;
    this.memfunc_vel_farright_lpp = 350;
    this.memfunc_vel_farright_lc = 0;
    this.memfunc_vel_farright_rpp = 650;
    this.memfunc_vel_farright_rbp = 650;
    this.memfunc_vel_farright_rc = 0;
    this.memfunc_vel_farright_name = "Large Right";
}

// ************************************************************************
// Function:    memfuncInit()
// Purpose:     Initialises the memory function values and input. 
// ************************************************************************
function memfuncInit() {
	// Set inputs to default values
	for (var variable in ai_variables) {
		var str = variable.split("_")
		inputUpdate(str[1], str[2], str[3], ai_variables[variable]);
	}
	
	// Initialise canvas
	var canvas_memfunc_pos = document.getElementById('canvas_memfunc_pos');
	var canvas_memfunc_vel = document.getElementById('canvas_memfunc_vel');
	canvas_memfunc_pos.width = CANVAS_WIDTH;
	canvas_memfunc_pos.height = CANVAS_HEIGHT;
	canvas_memfunc_vel.width = CANVAS_WIDTH;
	canvas_memfunc_vel.height = CANVAS_HEIGHT;
	updateMemFuncCanvas("pos");
	updateMemFuncCanvas("vel");
}


function updateMemFuncCanvas(variable) {

	// Setup
	var canvas = document.getElementById('canvas_memfunc_'+variable);
	var ctx = canvas.getContext('2d');
	ctx.fillStyle = 'rgba('+        // Sets fill color
		'255,255,200,255)';
	ctx.beginPath();                // Start drawing
	ctx.rect(0,0,                   // Draws rectangle
		CANVAS_WIDTH,
		CANVAS_HEIGHT);        
	ctx.closePath();                // Ends drawing
	ctx.fill();                     // Fills rectangle w/ active color
	
	// Draw lines
	drawMemFunc(variable, "farleft", "#339");
	drawMemFunc(variable, "left", "#393");
	drawMemFunc(variable, "center", "#933");
	drawMemFunc(variable, "right", "#993");
	drawMemFunc(variable, "farright", "#399");
	
	// Draw axis and labels
	
}

function drawMemFunc(variable, memfunc, color) {

	// Setup line
	var canvas = document.getElementById('canvas_memfunc_'+variable);
	var ctx = canvas.getContext('2d');
	ctx.lineWidth = 6;				// Set line width
	ctx.strokeStyle = color;		// Set line color
	ctx.fillStyle = color;		// Set line color
	
	// Determine points
	var lbp = 600+ai_variables['memfunc_'+variable+'_'+memfunc+'_lbp'],
		lpp = 600+ai_variables['memfunc_'+variable+'_'+memfunc+'_lpp'];
	var	lbc = lbp+(ai_variables['memfunc_'+variable+'_'+memfunc+'_lc']/10)*(lpp-lbp),
		lpc = lpp-(ai_variables['memfunc_'+variable+'_'+memfunc+'_lc']/10)*(lpp-lbp);
	var rbp = 600+ai_variables['memfunc_'+variable+'_'+memfunc+'_rbp'],
		rpp = 600+ai_variables['memfunc_'+variable+'_'+memfunc+'_rpp'];
	var	rpc = rpp+(ai_variables['memfunc_'+variable+'_'+memfunc+'_rc']/10)*(rbp-rpp),
		rbc = rbp-(ai_variables['memfunc_'+variable+'_'+memfunc+'_rc']/10)*(rbp-rpp);
		
	// Left side
	ctx.beginPath();
	ctx.moveTo(lbp, FUNC_BOT);
	ctx.bezierCurveTo(lbc, FUNC_BOT, lpc, FUNC_TOP, lpp, FUNC_TOP);
	ctx.stroke();
	
	// Top
	ctx.beginPath();
	ctx.moveTo(lpp,FUNC_TOP);
	ctx.lineTo(rpp,FUNC_TOP);
	ctx.stroke();
	
	// Right side
	ctx.beginPath();
	ctx.moveTo(rpp, FUNC_TOP);
	ctx.bezierCurveTo(rpc, FUNC_TOP, rbc, FUNC_BOT, rbp, FUNC_BOT);
	ctx.stroke();
	
	// Title
	ctx.font = '20px san-serif';
	ctx.textBaseline = 'bottom';
    ctx.textAlign = 'center';
	console.log('memfunc_'+variable+'_'+memfunc+'_name');
	console.log(ai_variables['memfunc_'+variable+'_'+memfunc+'_name']);
	ctx.fillText(ai_variables['memfunc_'+variable+'_'+memfunc+'_name'], (lpp+(rpp-lpp)/2), FUNC_TOP);
}