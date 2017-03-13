<script>

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
$( "#ShoamRadio1" ).click(function() {

  localStorage.setItem("ShoamRadio1", "True");
  
  localStorage.setItem("ShoamRadio2", "False");
  
  localStorage.setItem("ShoamRadio3", "False");
  
});




$( "#ShoamRadio2" ).click(function() {

  localStorage.setItem("ShoamRadio1", "False");
  
  localStorage.setItem("ShoamRadio2", "True");
  
  localStorage.setItem("ShoamRadio3", "False");
  
});




$( "#ShoamRadio3" ).click(function() {

  localStorage.setItem("ShoamRadio1", "False");
  
  localStorage.setItem("ShoamRadio2", "False");
  
  localStorage.setItem("ShoamRadio3", "True");
  
});





$( "#DiscoverAnswerQ1Shoham" ).click(function() {

  var ShoamRadio2 = localStorage.getItem("ShoamRadio2");
  
  if (ShoamRadio2 == "True") {
  
  		$("#ShoamQ1").fadeOut( 300 );
      
      $("#RightAnswerQ1Shoam").fadeIn( 500 );
  
  } else {
  	 $("#WrongAnswerQ1Shoam").fadeIn( 500 );
  }
 
});

//shoam wrong answer q1 back to q1
$( "#BackToQ1Shoham" ).click(function() {
  
  $( "#WrongAnswerQ1Shoam" ).fadeOut( 500 );
  
  $( "#ShoamQ1" ).fadeIn( 500 );
  
});



//shoham link to second question
$( "#ButtonQ2Shoham" ).click(function() {
 
 $( "#RightAnswerQ1Shoam" ).fadeOut( 500 )

 $( "#ShoamQ2" ).fadeIn( 500 );
 
});



//shoam RADIO BUTTON Q2
$( "#ShoamRadio4" ).click(function() {

  localStorage.setItem("ShoamRadio4", "True");
  
  localStorage.setItem("ShoamRadio5", "False");
  
  localStorage.setItem("ShoamRadio6", "False");
  
});




$( "#ShoamRadio5" ).click(function() {

  localStorage.setItem("ShoamRadio4", "False");
  
  localStorage.setItem("ShoamRadio5", "True");
  
  localStorage.setItem("ShoamRadio6", "False");
  
});




$( "#ShoamRadio6" ).click(function() {

  localStorage.setItem("ShoamRadio4", "False");
  
  localStorage.setItem("ShoamRadio5", "False");
  
  localStorage.setItem("ShoamRadio6", "True");
  
});


$( "#DiscoverAnswerQ2Shoham" ).click(function() {

  var ShoamRadio6 = localStorage.getItem("ShoamRadio6");
  
  if (ShoamRadio6 == "True") {
  
  		$("#ShoamQ2").fadeOut("fast");
      
      $("#RightAnswerQ2Shoam").fadeIn("slow");
  
  } else {
  	 $("#WrongAnswerQ2Shoam").fadeIn("slow");
  }
  
});

//SHOHAM wrong answer q2 back to q2
$( "#BackToQ2Shoham" ).click(function() {
  
  $( "#WrongAnswerQ2Shoam" ).fadeOut( 500 );
  
  $( "#RightAnswerQ2Shoam" ).fadeIn( 500 );
  
});




//SHOHAM link to picture
$( "#ButtonEndShoham" ).click(function() {
  
  $( "#RightAnswerQ2Shoam" ).fadeOut( 500 );
  
  $( "#PictureShoham" ).fadeIn( 500 );
  
  $( "#LinkShoham" ).css('z-index', 0);

});




</script>

