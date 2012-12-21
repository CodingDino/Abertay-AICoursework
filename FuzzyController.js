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
		
		// ********************************************************************
		// Action Member Function 
		// ********************************************************************
		
		// Extreme Left Member Function
		this.memfunc_act_extremeleft_lbp = -650;
		this.memfunc_act_extremeleft_lpp = -650;
		this.memfunc_act_extremeleft_lc = 0;
		this.memfunc_act_extremeleft_rpp = -550;
		this.memfunc_act_extremeleft_rbp = -450;
		this.memfunc_act_extremeleft_rc = 0;
		this.memfunc_act_extremeleft_name = "Extreme Left";
		
		// Large Left Member Function
		this.memfunc_act_largeleft_lbp = -600;
		this.memfunc_act_largeleft_lpp = -500;
		this.memfunc_act_largeleft_lc = 0;
		this.memfunc_act_largeleft_rpp = -400;
		this.memfunc_act_largeleft_rbp = -300;
		this.memfunc_act_largeleft_rc = 0;
		this.memfunc_act_largeleft_name = "Large Left";
		
		// Left Member Function
		this.memfunc_act_left_lbp = -450;
		this.memfunc_act_left_lpp = -350;
		this.memfunc_act_left_lc = 0;
		this.memfunc_act_left_rpp = -250;
		this.memfunc_act_left_rbp = -150;
		this.memfunc_act_left_rc = 0;
		this.memfunc_act_left_name = "Left";
		
		// Slight Left Member Function
		this.memfunc_act_slightleft_lbp = -300;
		this.memfunc_act_slightleft_lpp = -200;
		this.memfunc_act_slightleft_lc = 0;
		this.memfunc_act_slightleft_rpp = -100;
		this.memfunc_act_slightleft_rbp = 0;
		this.memfunc_act_slightleft_rc = 0;
		this.memfunc_act_slightleft_name = "Slight Left";
		
		// Center Member Function
		this.memfunc_act_center_lbp = -150;
		this.memfunc_act_center_lpp = -50;
		this.memfunc_act_center_lc = 0;
		this.memfunc_act_center_rpp = 50;
		this.memfunc_act_center_rbp = 150;
		this.memfunc_act_center_rc = 0;
		this.memfunc_act_center_name = "None";
		
		// Slight Right Member Function
		this.memfunc_act_slightright_lbp = 0;
		this.memfunc_act_slightright_lpp = 100;
		this.memfunc_act_slightright_lc = 0;
		this.memfunc_act_slightright_rpp = 200;
		this.memfunc_act_slightright_rbp = 300;
		this.memfunc_act_slightright_rc = 0;
		this.memfunc_act_slightright_name = "Slight Right";
		
		// Right Member Function
		this.memfunc_act_right_lbp = 150;
		this.memfunc_act_right_lpp = 250;
		this.memfunc_act_right_lc = 0;
		this.memfunc_act_right_rpp = 350;
		this.memfunc_act_right_rbp = 450;
		this.memfunc_act_right_rc = 0;
		this.memfunc_act_right_name = "Right";
		
		// Large Right Member Function
		this.memfunc_act_largeright_lbp = 300;
		this.memfunc_act_largeright_lpp = 400;
		this.memfunc_act_largeright_lc = 0;
		this.memfunc_act_largeright_rpp = 500;
		this.memfunc_act_largeright_rbp = 600;
		this.memfunc_act_largeright_rc = 0;
		this.memfunc_act_largeright_name = "Large Right";
		
		// Extreme Right Member Function
		this.memfunc_act_extremeright_lbp = 450;
		this.memfunc_act_extremeright_lpp = 550;
		this.memfunc_act_extremeright_lc = 0;
		this.memfunc_act_extremeright_rpp = 650;
		this.memfunc_act_extremeright_rbp = 650;
		this.memfunc_act_extremeright_rc = 0;
		this.memfunc_act_extremeright_name = "Extreme Right";
	}

}