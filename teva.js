
 //green kfar-saba
$( "#kafas" ).mouseover(function() {
  
  $( "#kafasGreen" ).fadeIn( 500 );
    
});

$( "#kafas" ).mouseout(function() {
  
  $( "#kafasGreen" ).fadeOut( 500 );
  
});

//green pet-tikva
$( "#pt" ).mouseover(function() {
  
  $( "#ptgreen" ).fadeIn( 500 );
  
});

$( "#pt" ).mouseout(function() {
  
  $( "#ptgreen" ).fadeOut( 500 );
});

//green rehovot
$( "#rehovot" ).mouseover(function() {
  
  $( "#rehovotgreen" ).fadeIn( 500 );
});

$( "#rehovot" ).mouseout(function() {
  
  $( "#rehovotgreen" ).fadeOut( 500 );
});

//green ashdod
$( "#ashdod" ).mouseover(function() {
  
  $( "#ashdodgreen" ).fadeIn( 500 );
});

$( "#ashdod" ).mouseout(function() {
  
  $( "#ashdodgreen" ).fadeOut( 500 );
});

//green beer-sheva 
$( "#bs" ).mouseover(function() {
  
  $( "#bsgreen" ).fadeIn( 500 );
});

$( "#bs" ).mouseout(function() {
  
  $( "#bsgreen" ).fadeOut( 500 );
});

//green jerusalem
$( "#jerusalem" ).mouseover(function() {
  
  $( "#jerusalemgreen" ).fadeIn( 500 );
});

$( "#jerusalem" ).mouseover(function() {
  
  $( "#jerusalemgreen" ).fadeOut( 500 );
});

//green shoham
$( "#shoham" ).mouseover(function() {
  
  $( "#GreenShoham" ).fadeIn( 500 );
});

$( "#shoham" ).mouseout(function() {
  
  $( "#GreenShoham" ).fadeOut( 500 );
});

//green k-shmona
$( "#shmona" ).mouseover(function() {
  
  $( "#shmonagreen" ).fadeIn( 500 );
});

$( "#shmona" ).mouseout(function() {
  
  $( "#shmonagreen" ).fadeOut( 500 );
});

//natanyagreen
$( "#natanya" ).mouseover(function() {
  
  $( "#natanyagreen" ).fadeIn( 500 );
});

$( "#natanya" ).mouseout(function() {
  
  $( "#natanyagreen" ).fadeOut( 500 );
});

//natanya question
$( "#linknatanya" ).click(function() {
  
  $( "#natanyaq" ).fadeIn( 500 );
});

//kfar saba question
$( "#kfarlink" ).click(function() {
  
  $( "#kfarq" ).fadeIn( 500 );
});

//p-tikva question
$( "#ptlink" ).click(function() {
  
  $( "#ptquestion" ).fadeIn( 500 );
});

//rehovot question
$( "#rehovotlink" ).click(function() {
  
  $( "#rehovotq" ).fadeIn( 500 );
});

//ashdod question
$( "#ashdodlink" ).click(function() {
  
  $( "#ashdodq" ).fadeIn( 500 );
});

//beer sheva question
$( "#bslink" ).click(function() {
  
  $( "#bsq" ).fadeIn( 500 );
  
});

//jerusalem question
$( "#jerusalemlink" ).click(function() {
  
  $( "#jerusalemQ1" ).fadeIn( 500 );
});

//shoham question
$( "#LinkShoham" ).click(function() {
  
  $( "#ShohamQ1" ).fadeIn( 500 );
});

//k-shmona question
$( "#kslink" ).click(function() {
  
  $( "#shmonalink" ).fadeIn( 500 );
});


//BEER SHEVA RADIO BUTTON Q1
$( "#BsAn1" ).click(function() {

  localStorage.setItem("BsAn1", "True");
  
  localStorage.setItem("BsAn2", "False");
  
  localStorage.setItem("BsAn3", "False");
  
});




$( "#BsAn2" ).click(function() {

  localStorage.setItem("BsAn1", "False");
  
  localStorage.setItem("BsAn2", "True");
  
  localStorage.setItem("BsAn3", "False");
  
});




$( "#BsAn3" ).click(function() {

  localStorage.setItem("BsAn1", "False");
  
  localStorage.setItem("BsAn2", "False");
  
  localStorage.setItem("BsAn3", "True");
  
});





$( "#ButtonQ1BS" ).click(function() {

  var BsAn2 = localStorage.getItem("BsAn2");
  
  if (BsAn2 == "True") {
  
  		$("#bsq").fadeOut( 500 );
      
      $("#rightbs").fadeIn( 500 );
  
  } else {
  	 $("#wrongbeer").fadeIn( 500 );
  }
  
});

//beer sheva wrong answer q1 back to q1
$( "#bsWrong" ).click(function() {
  
  $( "#wrongbeer" ).fadeOut( 500 );
  
  $( "#bsq" ).fadeIn( 500 );
  
});





//beer sheva link to second question
$( "#ButtonForSecondQBS" ).click(function() {

  $( "#rightbs").fadeOut( 500);
  
  $( "#BsQ2" ).fadeIn( 500 );
});



//BEER SHEVA RADIO BUTTON Q2
$( "#BsAn4" ).click(function() {

  localStorage.setItem("BsAn4", "True");
  
  localStorage.setItem("BsAn5", "False");
  
  localStorage.setItem("BsAn6", "False");
  
});




$( "#BsAn5" ).click(function() {

  localStorage.setItem("BsAn4", "False");
  
  localStorage.setItem("BsAn5", "True");
  
  localStorage.setItem("BsAn6", "False");
  
});




$( "#BsAn6" ).click(function() {

  localStorage.setItem("BsAn4", "False");
  
  localStorage.setItem("BsAn5", "False");
  
  localStorage.setItem("BsAn6", "True");
  
});


$( "#ButtonForAnswerBS" ).click(function() {

  var BsAn4 = localStorage.getItem("BsAn4");
  
  if (BsAn4 == "True") {
  
  		$("#BsQ2").fadeOut("fast");
      
      $("#SecondQRightBS").fadeIn( 300 );
  
  } else {
  	 $("#WrongAnswerBS2").fadeIn( 300 );
  }
  
});

//beer sheva wrong answer q2 back to q2
$( "#bsWrongq2" ).click(function() {
  
  $( "#WrongAnswerBS2" ).fadeOut( 500 );
  
  $( "#BsQ2" ).fadeIn( 500 );
  
});

//beer sheva link to picture
$( "#Lastbs" ).click(function() {
  
  $( "#SecondQRightBS" ).fadeOut( 500 );
  
  $( "#PictureBS" ).fadeIn( 500 );
  
  $( "#bslink" ).css('z-index', 0);

});







//jerusalem RADIO BUTTON Q1
$( "#RadioButton1" ).click(function() {

  localStorage.setItem("RadioButton1", "True");
  
  localStorage.setItem("RadioButton2", "False");
  
  localStorage.setItem("RadioButton3", "False");
  
});




$( "#RadioButton2" ).click(function() {

  localStorage.setItem("RadioButton1", "False");
  
  localStorage.setItem("RadioButton2", "True");
  
  localStorage.setItem("RadioButton3", "False");
  
});




$( "#RadioButton3" ).click(function() {

  localStorage.setItem("RadioButton1", "False");
  
  localStorage.setItem("RadioButton2", "False");
  
  localStorage.setItem("RadioButton3", "True");
  
});





$( "#AnswerQ1" ).click(function() {

  var RadioButton3 = localStorage.getItem("RadioButton3");
  
  if (RadioButton3 == "True") {
  
  		$("#jerusalemQ1").fadeOut( 300 );
      
      $("#AnswerRightJE").fadeIn( 500 );
  
  } else {
  	 $("#WrongQ1").fadeIn( 500 );
  }
  
});

//jerusalem wrong answer q1 back to q1
$( "#buttonwrongje" ).click(function() {
  
  $( "#WrongQ1" ).fadeOut( 500 );
  
  $( "#jerusalemQ1" ).fadeIn( 500 );
  
});



//jerusalem link to second question
$( "#NextQuesJE" ).click(function() {
  $( "#AnswerRightJE" ).fadeOut( 500 )
  $( "#JerusalemQ2" ).fadeIn( 500 );
});



//JERUSALEM RADIO BUTTON Q2
$( "#RadioButton4" ).click(function() {

  localStorage.setItem("RadioButton4", "True");
  
  localStorage.setItem("RadioButton5", "False");
  
  localStorage.setItem("RadioButton6", "False");
  
});




$( "#RadioButton5" ).click(function() {

  localStorage.setItem("RadioButton4", "False");
  
  localStorage.setItem("RadioButton5", "True");
  
  localStorage.setItem("RadioButton6", "False");
  
});




$( "#RadioButton6" ).click(function() {

  localStorage.setItem("RadioButton4", "False");
  
  localStorage.setItem("RadioButton5", "False");
  
  localStorage.setItem("RadioButton6", "True");
  
});


$( "#AnswerQ2JE" ).click(function() {

  var RadioButton4 = localStorage.getItem("RadioButton4");
  
  if (RadioButton4 == "True") {
  
  		$("#JerusalemQ2").fadeOut("fast");
      
      $("#AnswerRightJEQ2").fadeIn("slow");
  
  } else {
  	 $("#WrongQ2").fadeIn("slow");
  }
  
});

//jerusalem wrong answer q2 back to q2
$( "#buttonwrongje2" ).click(function() {
  
  $( "#WrongQ2" ).fadeOut( 500 );
  
  $( "#jerusalemQ2" ).fadeIn( 500 );
  
});




//jerusalem link to picture
$( "#LastButtonJE" ).click(function() {
  
  $( "#AnswerRightJEQ2" ).fadeOut( 500 );
  
  $( "#PictureJE" ).fadeIn( 500 );
  
  $( "#jerusalemlink" ).css('z-index', 0);

});


//shoham RADIO BUTTON Q1
$( "#ShohamRadio1" ).click(function() {

  localStorage.setItem("ShohamRadio1", "True");
  
  localStorage.setItem("ShohamRadio2", "False");
  
  localStorage.setItem("ShohamRadio3", "False");
  
});




$( "#ShohamRadio2" ).click(function() {

  localStorage.setItem("ShohamRadio1", "False");
  
  localStorage.setItem("ShohamRadio2", "True");
  
  localStorage.setItem("ShohamRadio3", "False");
  
});




$( "#ShohamRadio3" ).click(function() {

  localStorage.setItem("ShohamRadio1", "False");
  
  localStorage.setItem("ShohamRadio2", "False");
  
  localStorage.setItem("ShohamRadio3", "True");
  
});





$( "#DiscoverAnswerQ1Shoham" ).click(function() {

  var ShohamRadio2 = localStorage.getItem("ShohamRadio2");
  
  if (ShohamRadio2 == "True") {
  
  		$("#ShohamQ1").fadeOut( 300 );
      
      $("#RightAnswerQ1Shoham").fadeIn( 500 );
  
  } else {
  	 $("#WrongAnswerQ1Shoham").fadeIn( 500 );
  }
 
});

//shoam wrong answer q1 back to q1
$( "#BackToQ1Shoham" ).click(function() {
  
  $( "#WrongAnswerQ1Shoham" ).fadeOut( 500 );
  
  $( "#ShohamQ1" ).fadeIn( 500 );
  
});



//shoham link to second question
$( "#ButtonQ2Shoham" ).click(function() {
 
 $( "#RightAnswerQ1Shoham" ).fadeOut( 500 )

 $( "#ShohamQ2" ).fadeIn( 500 );
 
});



//shoham RADIO BUTTON Q2
$( "#ShohamRadio4" ).click(function() {

  localStorage.setItem("ShohamRadio4", "True");
  
  localStorage.setItem("ShohamRadio5", "False");
  
  localStorage.setItem("ShohamRadio6", "False");
  
});




$( "#ShohamRadio5" ).click(function() {

  localStorage.setItem("ShohamRadio4", "False");
  
  localStorage.setItem("ShohamRadio5", "True");
  
  localStorage.setItem("ShohamRadio6", "False");
  
});




$( "#ShohamRadio6" ).click(function() {

  localStorage.setItem("ShohamRadio4", "False");
  
  localStorage.setItem("ShohamRadio5", "False");
  
  localStorage.setItem("ShohamRadio6", "True");
  
});


$( "#DiscoverAnswerQ2Shoham" ).click(function() {

  var ShohamRadio6 = localStorage.getItem("ShohamRadio6");
  
  if (ShohamRadio6 == "True") {
  
  		$("#ShohamQ2").fadeOut("fast");
      
      $("#RightAnswerQ2Shoham").fadeIn("slow");
  
  } else {
  	 $("#WrongAnswerQ2Shoham").fadeIn("slow");
  }
  
});

//SHOHAM wrong answer q2 back to q2
$( "#BackToQ2Shoham" ).click(function() {
  
  $( "#WrongAnswerQ2Shoham" ).fadeOut( 500 );
  
  $( "#RightAnswerQ2Shoham" ).fadeIn( 500 );
  
});




//SHOHAM link to picture
$( "#ButtonEndShoham" ).click(function() {
  
  $( "#RightAnswerQ2Shoham" ).fadeOut( 500 );
  
  $( "#PictureShoham" ).fadeIn( 500 );
  
  $( "#LinkShoham" ).css('z-index', 0);

});

//Rehovot RADIO BUTTON Q1
$( "#Radio1Rehovot1" ).click(function() {

  localStorage.setItem("Radio1Rehovot1", "True");
  
  localStorage.setItem("Radio1Rehovot2", "False");
  
  localStorage.setItem("Radio1Rehovot3", "False");
  
});




$( "#Radio1Rehovot2" ).click(function() {

  localStorage.setItem("Radio1Rehovot1", "False");
  
  localStorage.setItem("Radio1Rehovot2", "True");
  
  localStorage.setItem("Radio1Rehovot3", "False");
  
});




$( "#Radio1Rehovot3" ).click(function() {

  localStorage.setItem("Radio1Rehovot1", "False");
  
  localStorage.setItem("Radio1Rehovot2", "False");
  
  localStorage.setItem("Radio1Rehovot3", "True");
  
});





$( "#DiscoverQ1Rehovot" ).click(function() {

  var Radio1Rehovot2 = localStorage.getItem("Radio1Rehovot2");
  
  if (Radio1Rehovot2 == "True") {
  
  		$("#RehovotQ1").fadeOut( 300 );
      
      $("#RightAnswerQ1Rehovot").fadeIn( 500 );
  
  } else {
  	 $("#WrongAnswerQ1Rehovot").fadeIn( 500 );
  }
 
});

//rehovot wrong answer q1 back to q1
$( "#BackToQ1Rehovot" ).click(function() {
  
  $( "#WrongAnswerQ1Rehovot" ).fadeOut( 500 );
  
  $( "#RehovotQ1" ).fadeIn( 500 );
  
});




//rehovot link to picture
$( "#ButtonEndRehovot" ).click(function() {
  
  $( "#RightAnswerQ1Rehovot" ).fadeOut( 500 );
  
  $( "#PictureRehovot" ).fadeIn( 500 );
  
  $( "#rehovotlink" ).css('z-index', 0);

});

// ASHDOD RADIO BUTTON Q1
$( "#RadioAshdod1" ).click(function() {

  localStorage.setItem("RadioAshdod1", "True");
  
  localStorage.setItem("RadioAshdod2", "False");
  
  localStorage.setItem("RadioAshdod3", "False");
  
});




$( "#RadioAshdod2" ).click(function() {

  localStorage.setItem("RadioAshdod1", "False");
  
  localStorage.setItem("RadioAshdod2", "True");
  
  localStorage.setItem("RadioAshdod3", "False");
  
});




$( "#RadioAshdod3" ).click(function() {

  localStorage.setItem("RadioAshdod1", "False");
  
  localStorage.setItem("RadioAshdod2", "False");
  
  localStorage.setItem("RadioAshdod3", "True");
  
});





$( "#DiscoverAnswerQ1Ashdod" ).click(function() {

  var RadioAshdod3 = localStorage.getItem("RadioAshdod3");
  
  if (RadioAshdod3 == "True") {
  
  		$("#ashdodq").fadeOut( 500 );
      
      $("#RightAnswerQ1Ashdod").fadeIn( 500 );
  
  } else {
  	 $("#WrongAnswerQ1Ashdod").fadeIn( 500 );
  }
  
});

//ASHDOD wrong answer q1 back to q1
$( "#BackToQ1Ashdod" ).click(function() {
  
  $( "#WrongAnswerQ1Ashdod" ).fadeOut( 500 );
  
  $( "#ashdodq" ).fadeIn( 500 );
  
});





//ashdod link to second question
$( "#ButtonQ2Ashdod" ).click(function() {

  $( "#RightAnswerQ1Ashdod").fadeOut( 500);
  
  $( "#ashdodq2" ).fadeIn( 500 );
});



//ASHDOD RADIO BUTTON Q2
$( "#RadioAshdod4" ).click(function() {

  localStorage.setItem("RadioAshdod4", "True");
  
  localStorage.setItem("RadioAshdod5", "False");
  
  localStorage.setItem("RadioAshdod6", "False");
  
});




$( "#RadioAshdod5" ).click(function() {

  localStorage.setItem("RadioAshdod4", "False");
  
  localStorage.setItem("RadioAshdod5", "True");
  
  localStorage.setItem("RadioAshdod6", "False");
  
});




$( "#RadioAshdod6" ).click(function() {

  localStorage.setItem("RadioAshdod4", "False");
  
  localStorage.setItem("RadioAshdod5", "False");
  
  localStorage.setItem("RadioAshdod6", "True");
  
});


$( "#RadioAshdod5" ).click(function() {

  var RadioAshdod5 = localStorage.getItem("RadioAshdod5");
  
  if (RadioAshdod5 == "True") {
  
  		$("#ashdodq2").fadeOut("fast");
      
      $("#RightAnswerQ2Ashdod").fadeIn( 300 );
  
  } else {
  	 $("#WrongAnswerQ2Ashdod").fadeIn( 300 );
  }
  
});

//ASHDOD wrong answer q2 back to q2
$( "#BackToQ2Ashdod" ).click(function() {
  
  $( "#WrongAnswerQ2Ashdod" ).fadeOut( 500 );
  
  $( "#ashdodq2" ).fadeIn( 500 );
  
});

//ASHDOD link to picture
$( "#ButtonEndAshdod" ).click(function() {
  
  $( "#ashdodq2" ).fadeOut( 500 );
  
  $( "#PictureAshdod" ).fadeIn( 500 );
  
  $( "#ashdodlink" ).css('z-index', 0);

});


