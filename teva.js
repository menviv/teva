
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
  
  $( "#Q1Natanya" ).fadeIn( 500 );
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
  
  $( "#AshdodQ1new" ).fadeIn( 500 );
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
  
  $( "#Q1shmona" ).fadeIn( 500 );
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
      $("#bsq").fadeOut( 500 );  
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
  
  		$("#BsQ2").fadeOut( 500 );
      
      $("#SecondQRightBS").fadeIn( 500 );
  
  } else {
     		$("#BsQ2").fadeOut( 500 );  
   $("#WrongAnswerBS2").fadeIn( 500 );
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
 
   localStorage.setItem("BS", "Done");

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
  
  		$("#jerusalemQ1").fadeOut( 500 );
      
      $("#AnswerRightJE").fadeIn( 500 );
  
  } else {
   
     		$("#jerusalemQ1").fadeOut( 500 );
   
  	 $("#WrongAnswerQ1Jerusalem").fadeIn( 500 );
  }
  
});

//jerusalem wrong answer q1 back to q1

$( "#buttonwrongje" ).click(function() {
  
  $( "#WrongAnswerQ1Jerusalem" ).fadeOut( 500 );
  
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
  
  		$("#JerusalemQ2").fadeOut( 500 );
      
      $("#AnswerRightJEQ2").fadeIn( 500 );
  
  } else {
   
     		$("#JerusalemQ2").fadeOut( 500 );   
   
  	 $("#WrongAnswerQ2Jerusalem").fadeIn( 500 );
  }
  
});

//jerusalem wrong answer q2 back to q2
$( "#buttonwrongje2" ).click(function() {
  
  $( "#WrongAnswerQ2Jerusalem" ).fadeOut( 500 );
  
  $( "#jerusalemQ2" ).fadeIn( 500 );
  
});




//jerusalem link to picture
$( "#LastButtonJE" ).click(function() {
  
  $( "#AnswerRightJEQ2" ).fadeOut( 500 );
  
  $( "#PictureJE" ).fadeIn( 500 );
  
  $( "#jerusalemlink" ).css('z-index', 0);
 
  localStorage.setItem("JERUSALEM", "Done");


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
  
  		$("#ShohamQ1").fadeOut( 500 );
      
      $("#RightAnswerQ1Shoham").fadeIn( 500 );
  
  } else {
   
     		$("#ShohamQ1").fadeOut( 500 );  	
   
   $("#WrongAnswerQ1Shoham").fadeIn( 500 );
  }
 
});

//shoam wrong answer q1 back to q1
$( "#BackToQ1Shoham" ).click(function() {
  
  $( "#WrongAnswerQ1Shoham" ).fadeOut( 500 );
  
  $( "#ShohamQ1" ).fadeIn( 500 );
  
});



//shoham link to second question
$( "#ButtonqQ2Shoham" ).click(function() {
 
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
  
  		$("#ShohamQ2").fadeOut( 500 );
      
      $("#RightAnswerQ2Shoham").fadeIn( 500 );
  
  } else {
   
  		$("#ShohamQ2").fadeOut( 500 );
   
  	 $("#WrongAnswerQ2Shoham").fadeIn( 500 );
  }
  
});

//SHOHAM wrong answer q2 back to q2

$( "#BackToQ2Shoham" ).click(function() {
  
  $( "#WrongAnswerQ2Shoham" ).fadeOut( 500 );
  
  $( "#ShohamQ2" ).fadeIn( 500 );
  
});




//SHOHAM link to picture
$( "#ButtonqEndShoham" ).click(function() {
  
  $( "#RightAnswerQ2Shoham" ).fadeOut( 500 );
  
  $( "#PictureShoham" ).fadeIn( 500 );
  
  $( "#LinkShoham" ).css('z-index', 0);
 
   localStorage.setItem("SHOHAM", "Done");

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
  
  		$("#rehovotq").fadeOut( 500 );
      
      $("#RightAnswerQ1Rehovot").fadeIn( 500 );
  
  } else {
   
     		$("#rehovotq").fadeOut( 500 );   
   
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
 
   localStorage.setItem("REHOVOT", "Done");
 
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
  
  		$("#AshdodQ1new").fadeOut( 500 );
   
    $("#RightAnswerQ1Ashdod").fadeIn( 500 );
  
  } else {
   
   		$("#AshdodQ1new").fadeOut( 500 ); 
   
  	 $("#WrongAnswerQ1Ashdod").fadeIn( 500 );
  }
  
});

//ASHDOD wrong answer q1 back to q1
  $("#BackToQ1Ashdod").click(function() {
  
  $( "#WrongAnswerQ1Ashdod").fadeOut( 500 );
  
  $( "#AshdodQ1new" ).fadeIn( 500 );
  
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


$( "#DiscoverAnswerQ2Ashdod" ).click(function() {

  var RadioAshdod5 = localStorage.getItem("RadioAshdod5");
  
  if (RadioAshdod5 == "True") {
  
  		$("#ashdodq2").fadeOut( 500 );
      
      $("#RightAnswerQ2Ashdod").fadeIn( 500 );
  
  } else {
   
     		$("#ashdodq2").fadeOut( 500 );   
   
  	 $("#WrongAnswerQ2Ashdod").fadeIn( 500 );
  }
  
});

//ASHDOD wrong answer q2 back to q2
$( "#BackToQ2Ashdod" ).click(function() {
  
  $( "#WrongAnswerQ2Ashdod" ).fadeOut( 500 );
  
  $( "#ashdodq2" ).fadeIn( 500 );
  
});

//ASHDOD link to picture
$( "#ButtonEndAshdod" ).click(function() {
  
  $( "#RightAnswerQ2Ashdod" ).fadeOut( 500 );
  
  $( "#PictureAshdod" ).fadeIn( 500 );
  
  $( "#ashdodlink" ).css('z-index', 0);
 
  localStorage.setItem("ASHDOD", "Done");
 
});



//NATANYA RADIO BUTTON Q1
$( "#RadioNatanya1" ).click(function() {

  localStorage.setItem("RadioNatanya1", "True");
  
  localStorage.setItem("RadioNatanya2", "False");
  
  localStorage.setItem("RadioNatanya3", "False");
  
});




$( "#RadioNatanya2" ).click(function() {

  localStorage.setItem("RadioNatanya1", "False");
  
  localStorage.setItem("RadioNatanya2", "True");
  
  localStorage.setItem("RadioNatanya3", "False");
  
});




$( "#RadioNatanya3" ).click(function() {

  localStorage.setItem("RadioNatanya1", "False");
  
  localStorage.setItem("RadioNatanya2", "False");
  
  localStorage.setItem("RadioNatanya3", "True");
  
});





$( "#DiscoverQ1Natanya" ).click(function() {

  var RadioNatanya1 = localStorage.getItem("RadioNatanya1");
  
  if (RadioNatanya1 == "True") {
  
  		$("#Q1Natanya").fadeOut( 500 );
      
      $("#RightAnswerQ1Natanya").fadeIn( 500 );
  
  } else {
   
     		$("#Q1Natanya").fadeOut( 500 ); 
   
  	 $("#WrongAnswerQ1Natanya").fadeIn( 500 );
  }
  
});

//NATANYA wrong answer q1 back to q1
$( "#ButtonForQ1" ).click(function() {
  
  $( "#WrongAnswerQ1Natanya" ).fadeOut( 500 );
  
  $( "#Q1Natanya" ).fadeIn( 500 );
  
});





//NATANYA link to second question
$( "#ButtonForQ2natanya" ).click(function() {

  $( "#RightAnswerQ1Natanya").fadeOut( 500);
  
  $( "#Q2Natanya" ).fadeIn( 500 );
});



//NATANYA RADIO BUTTON Q2
$( "#RadioNatanya4" ).click(function() {

  localStorage.setItem("RadioNatanya4", "True");
  
  localStorage.setItem("RadioNatanya5", "False");
  
  localStorage.setItem("RadioNatanya6", "False");
  
});




$( "#RadioNatanya5" ).click(function() {

  localStorage.setItem("RadioNatanya4", "False");
  
  localStorage.setItem("RadioNatanya5", "True");
  
  localStorage.setItem("RadioNatanya6", "False");
  
});




$( "#RadioNatanya6" ).click(function() {

  localStorage.setItem("RadioNatanya4", "False");
  
  localStorage.setItem("RadioNatanya5", "False");
  
  localStorage.setItem("RadioNatanya6", "True");
  
});


$( "#DiscoverQ2Natanya" ).click(function() {

  var RadioNatanya5 = localStorage.getItem("RadioNatanya5");
  
  if (RadioNatanya5 == "True") {
  
  		$("#Q2Natanya").fadeOut( 500 );
      
      $("#RightAnswerQ2Natanya").fadeIn( 500 );
  
  } else {
   
     		$("#Q2Natanya").fadeOut( 500 );
   
  	 $("#WrongAnswerQ2Natanya").fadeIn( 500 );
  }
  
});

//NATANYA wrong answer q2 back to q2
$( "#ButtonForQ2" ).click(function() {
  
  $( "#WrongAnswerQ2Natanya" ).fadeOut( 500 );
  
  $( "#Q2Natanya" ).fadeIn( 500 );
  
});

//NATANYA link to picture
$( "#LastButtonNatanya" ).click(function() {
  
  $( "#RightAnswerQ2Natanya" ).fadeOut( 500 );
  
  $( "#PictureNatanya" ).fadeIn( 500 );
  
  $( "#linknatanya" ).css('z-index', 0);
 
   localStorage.setItem("NATANYA", "Done");
});



//k-shmona RADIO BUTTON Q1
$( "#RadioShmona1" ).click(function() {

  localStorage.setItem("RadioShmona1", "True");
  
  localStorage.setItem("RadioShmona2", "False");
  
  localStorage.setItem("RadioShmona3", "False");
  
});




$( "#RadioShmona2" ).click(function() {

  localStorage.setItem("RadioShmona1", "False");
  
  localStorage.setItem("RadioShmona2", "True");
  
  localStorage.setItem("RadioShmona3", "False");
  
});




$( "#RadioShmona3" ).click(function() {

  localStorage.setItem("RadioShmona1", "False");
  
  localStorage.setItem("RadioShmona2", "False");
  
  localStorage.setItem("RadioShmona3", "True");
  
});





$( "#DiscoverQ1Shmona" ).click(function() {

  var RadioShmona1 = localStorage.getItem("RadioShmona1");
  
  if (RadioShmona1 == "True") {
  
  		$("#Q1shmona").fadeOut( 500 );
      
      $("#RightAnswerQ1Shmona").fadeIn( 500 );
  
  } else {
   
     		$("#Q1shmona").fadeOut( 500 );  
   
  	 $("#WrongAnswerQ1Shmona").fadeIn( 500 );
  }
  
});

//K-SHMONA wrong answer q1 back to q1
$( "#ButtonForQ1Shmona" ).click(function() {
  
  $( "#WrongAnswerQ1Shmona" ).fadeOut( 500 );
  
  $( "#Q1shmona" ).fadeIn( 500 );
  
});





//K-SHMONA link to second question
$( "#ButtonForQq2Shmona" ).click(function() {

  $( "#RightAnswerQ1Shmona").fadeOut( 500);
  
  $( "#Q2shmona" ).fadeIn( 500 );
});



//Shmona RADIO BUTTON Q2
$( "#RadioShmona4" ).click(function() {

  localStorage.setItem("RadioShmona4", "True");
  
  localStorage.setItem("RadioShmona5", "False");
  
  localStorage.setItem("RadioShmona6", "False");
  
});




$( "#RadioShmona5" ).click(function() {

  localStorage.setItem("RadioShmona4", "False");
  
  localStorage.setItem("RadioShmona5", "True");
  
  localStorage.setItem("RadioShmona6", "False");
  
});




$( "#RadioShmona6" ).click(function() {

  localStorage.setItem("RadioShmona4", "False");
  
  localStorage.setItem("RadioShmona5", "False");
  
  localStorage.setItem("RadioShmona6", "True");
  
});


$( "#DiscoverQ2Shmona" ).click(function() {

  var RadioShmona6 = localStorage.getItem("RadioShmona6");
  
  if (RadioShmona6 == "True") {
  
  		$("#Q2shmona").fadeOut( 500 );
      
      $("#RightAnswerQ2Shmona").fadeIn( 500 );
  
  } else {
   
     		$("#Q2shmona").fadeOut( 500 );
   
  	 $("#WrongAnswerQ2Shmona").fadeIn( 500 );
  }
  
});

//SHMONA wrong answer q2 back to q2
$( "#ButtonForQ2Shmona" ).click(function() {
  
  $( "#WrongAnswerQ2Shmona" ).fadeOut( 500 );
  
  $( "#Q2shmona" ).fadeIn( 500 );
  
});

//SHMONA link to picture
$( "#LastButtonShmona" ).click(function() {
  
  $( "#RightAnswerQ2Shmona" ).fadeOut( 500 );
  
  $( "#PictureShmona" ).fadeIn( 500 );
  
  $( "#kslink" ).css('z-index', 0);
 
   localStorage.setItem("SHMONA", "Done");
});



//KFAR-SABA RADIO BUTTON Q1
$( "#RadioKfar1" ).click(function() {

  localStorage.setItem("RadioKfar1", "True");
  
  localStorage.setItem("RadioKfar2", "False");
  
  localStorage.setItem("RadioKfar3", "False");
  
});




$( "#RadioKfar2" ).click(function() {

  localStorage.setItem("RadioKfar1", "False");
  
  localStorage.setItem("RadioKfar2", "True");
  
  localStorage.setItem("RadioKfar3", "False");
  
});




$( "#RadioKfar3" ).click(function() {

  localStorage.setItem("RadioKfar1", "False");
  
  localStorage.setItem("RadioKfar2", "False");
  
  localStorage.setItem("RadioKfar3", "True");
  
});





$( "#DiscoverQ1Kfar" ).click(function() {

  var RadioKfar1 = localStorage.getItem("RadioKfar1");
  
  if (RadioKfar1 == "True") {
  
  		$("#kfarq").fadeOut( 500 );
      
      $("#RightAnswerQ1Kfar").fadeIn( 500 );
  
  } else {
   
     		$("#kfarq").fadeOut( 500 );
   
  	 $("#WrongAnswerQ1Kfar").fadeIn( 500 );
  }
  
});

//KFAR SABA wrong answer q1 back to q1
$( "#BackToQ1KFAR" ).click(function() {
  
  $( "#WrongAnswerQ1Kfar" ).fadeOut( 500 );
  
  $( "#kfarq" ).fadeIn( 500 );
  
});





//KFAR-SABA link to second question
$( "#ButtonForQ2Kfar" ).click(function() {

  $( "#RightAnswerQ1Kfar").fadeOut( 500);
  
  $( "#KfarsabaQ2" ).fadeIn( 500 );
});



//KFAR SABA RADIO BUTTON Q2
$( "#RadioKfar4" ).click(function() {

  localStorage.setItem("RadioKfar4", "True");
  
  localStorage.setItem("RadioKfar5", "False");
  
  localStorage.setItem("RadioKfar6", "False");
  
});




$( "#RadioKfar5" ).click(function() {

  localStorage.setItem("RadioKfar4", "False");
  
  localStorage.setItem("RadioKfar5", "True");
  
  localStorage.setItem("RadioKfar6", "False");
  
});




$( "#RadioKfar6" ).click(function() {

  localStorage.setItem("RadioKfar4", "False");
  
  localStorage.setItem("RadioKfar5", "False");
  
  localStorage.setItem("RadioKfar6", "True");
  
});


$( "#DiscoverQ2Kfar" ).click(function() {

  var RadioKfar6 = localStorage.getItem("RadioKfar6");
  
  if (RadioKfar6 == "True") {
  
  		$("#KfarsabaQ2").fadeOut( 500 );
      
      $("#RightAnswerQ2Kfar").fadeIn( 500 );
  
  } else {
   
     		$("#KfarsabaQ2").fadeOut( 500 );
   
  	 $("#WrongAnswerQ2Kfar").fadeIn( 500 );
  }
  
});

//KFAR SABA wrong answer q2 back to q2
$( "#BackToQ2KFAR" ).click(function() {
  
  $( "#WrongAnswerQ2Kfar" ).fadeOut( 500 );
  
  $( "#KfarsabaQ2" ).fadeIn( 500 );
  
});

//KFAR SABA link to picture
$( "#LastButtonKfar" ).click(function() {
  
  $( "#RightAnswerQ2Kfar" ).fadeOut( 500 );
  
  $( "#PictureKfarSaba" ).fadeIn( 500 );
  
  $( "#kfarlink" ).css('z-index', 0);
 
   localStorage.setItem("KFARSABA", "Done");
});



//p-tikva RADIO BUTTON Q1
$( "#RadioPT1" ).click(function() {

  localStorage.setItem("RadioPT1", "True");
  
  localStorage.setItem("RadioPT2", "False");
  
  localStorage.setItem("RadioPT3", "False");
  
});




$( "#RadioPT2" ).click(function() {

  localStorage.setItem("RadioPT1", "False");
  
  localStorage.setItem("RadioPT2", "True");
  
  localStorage.setItem("RadioPT3", "False");
  
});




$( "#RadioPT3" ).click(function() {

  localStorage.setItem("RadioPT1", "False");
  
  localStorage.setItem("RadioPT2", "False");
  
  localStorage.setItem("RadioPT3", "True");
  
});





$( "#DiscoverQ1PT" ).click(function() {

  var RadioPT3 = localStorage.getItem("RadioPT3");
  
  if (RadioPT3 == "True") {
  
  		$("#ptquestion").fadeOut( 500 );
      
      $("#RightAnswerQ1PT").fadeIn( 500 );
  
  } else {
   
     		$("#ptquestion").fadeOut( 500 );
   
  	 $("#WrongAnswerQ1PT").fadeIn( 500 );
  }
  
});

//p-tikva wrong answer q1 back to q1
$( "#BackToQ1PT" ).click(function() {
  
  $( "#WrongAnswerQ1PT" ).fadeOut( 500 );
  
  $( "#ptquestion" ).fadeIn( 500 );
  
});





//p-tikva link to second question
$( "#ButtonForQ2PT" ).click(function() {

  $( "#RightAnswerQ1PT").fadeOut( 500);
  
  $( "#Q2PT" ).fadeIn( 500 );
});



//p-tikva RADIO BUTTON Q2
$( "#RadioPT4" ).click(function() {

  localStorage.setItem("RadioPT4", "True");
  
  localStorage.setItem("RadioPT5", "False");
  
  localStorage.setItem("RadioPT6", "False");
  
});




$( "#RadioPT5" ).click(function() {

  localStorage.setItem("RadioPT4", "False");
  
  localStorage.setItem("RadioPT5", "True");
  
  localStorage.setItem("RadioPT6", "False");
  
});




$( "#RadioPT6" ).click(function() {

  localStorage.setItem("RadioPT4", "False");
  
  localStorage.setItem("RadioPT5", "False");
  
  localStorage.setItem("RadioPT6", "True");
  
});


$( "#DiscoverQ2PT" ).click(function() {

  var RadioPT5 = localStorage.getItem("RadioPT5");
  
  if (RadioPT5 == "True") {
  
  		$("#Q2PT").fadeOut( 500 );
      
      $("#RightAnswerQ2PT").fadeIn( 500 );
  
  } else {
   
     		$("#Q2PT").fadeOut( 500 );
   
  	 $("#WrongAnswerQ2PT").fadeIn( 500 );
  }
  
});

//P-TIKVA wrong answer q2 back to q2

$( "#BackToQ2PT" ).click(function() {
  
  $( "#WrongAnswerQ2PT" ).fadeOut( 500 );
  
  $( "#Q2PT" ).fadeIn( 500 );
  
});

//P-TIKVA link to picture
$( "#LastButtonPT" ).click(function() {
  
  $( "#RightAnswerQ2PT" ).fadeOut( 500 );
  
  $( "#PicturePT" ).fadeIn( 500 );
  
  $( "#ptlink" ).css('z-index', 0);
 
   localStorage.setItem("PT", "Done");
 
});


// On page ready

$( document ).ready(function() {
 
   var BS_done = localStorage.getItem("BS");
 
   if (BS_done == "Done") {  
    
       $( "#PictureBS" ).fadeIn( 500 );
  
       $( "#bslink" ).css('z-index', 0);
    
   }
 
 
   var JERUSALEM_done = localStorage.getItem("JERUSALEM");
 
   if (JERUSALEM_done == "Done") {  
    
       $( "#PictureJE" ).fadeIn( 500 );
  
       $( "#jerusalemlink" ).css('z-index', 0);
    
   }

 
   var SHOHAM_done = localStorage.getItem("SHOHAM");
 
   if (SHOHAM_done == "Done") {  
    
       $( "#PictureShoham" ).fadeIn( 500 );
  
       $( "#LinkShoham" ).css('z-index', 0);
    
   }
  
 
   var REHOVOT_done = localStorage.getItem("REHOVOT");
 
   if (REHOVOT_done == "Done") {  
    
       $( "#PictureRehovot" ).fadeIn( 500 );
  
       $( "#rehovotlink" ).css('z-index', 0);
    
   } 
  
 
   var ASHDOD_done = localStorage.getItem("ASHDOD");
 
   if (ASHDOD_done == "Done") {  
    
       $( "#PictureAshdod" ).fadeIn( 500 );
  
       $( "#ashdodlink" ).css('z-index', 0);
    
   } 
  
 
   var NATANYA_done = localStorage.getItem("NATANYA");
 
   if (NATANYA_done == "Done") {  
    
       $( "#PictureNatanya" ).fadeIn( 500 );
  
       $( "#linknatanya" ).css('z-index', 0);
    
   } 
  
 
   var SHMONA_done = localStorage.getItem("SHMONA");
 
   if (SHMONA_done == "Done") {  
    
       $( "#PictureShmona" ).fadeIn( 500 );
  
       $( "#kslink" ).css('z-index', 0);
    
   } 
  
 
   var KFARSABA_done = localStorage.getItem("KFARSABA");
 
   if (KFARSABA_done == "Done") {  
    
       $( "#PictureKfarSaba" ).fadeIn( 500 );
  
       $( "#kfarlink" ).css('z-index', 0);
    
   } 
  
 
   var PT_done = localStorage.getItem("PT");
 
   if (PT_done == "Done") {  
    
       $( "#PicturePT" ).fadeIn( 500 );
  
       $( "#ptlink" ).css('z-index', 0);
    
   } 
  
    if (PT_done == "Done" && KFARSABA_done == "Done" && SHMONA_done == "Done" && NATANYA_done == "Done" && ASHDOD_done == "Done" && REHOVOT_done == "Done" && SHOHAM_done == "Done" && JERUSALEM_done == "Done" && BS_done == "Done") {  
    
     $( "#ENDOFGAME" ).fadeIn( 500 );    
  }
                    
   });
