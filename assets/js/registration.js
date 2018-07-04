var str="",
checkOnSubmit=true;
$(document).ready(function(){
	
	$("#header").show(1000);
	
	$(".success").mouseover(function(){	
	
    $("#success").animate({
        zoom:'110%'
	});
});
$(".success").mouseout(function(){	
	
    $("#success").animate({
        zoom:'100%',
		
    });
});
$("#back").mouseover(function(){
 $("#success").hide();
 $("#overlayText").show();
 $("#overlayText").css({"marginTop":"0px"});
});
$("#back").mouseout(function(){
 $("#success").show();
 $("#overlayText").hide();
});
	
	$.validator.addMethod("notEqualToZero",function(value,element)
	{
		return this.optional(element)
		||value!=="000000";
	},"It cannot contain only zeroes");
	$.validator.addMethod("sameDigit",function(value,element)
	{
		return this.optional(element)
		||!(/(\d)\1{9}/.test(value));
	},"Invalid Number");
	$.validator.addMethod("checkadd",function(value,element)
	{
		return this.optional(element)
		||(/^([A-Za-z0-9])*([A-Za-z0-9\s\_\-\,\/\:\;])*$/.test(value));
	},"Invalid Format");
	
	$("#fname1").fadeIn(1000);
	$("#mname1").fadeIn(1100);
	$("#lname1").fadeIn(1200);
	$("#email1").fadeIn(1300);
	$("#lphone1").fadeIn(1400);
	$("#mphone1").fadeIn(1500);
	$("#dob1").fadeIn(1600);
	$("#gen1").fadeIn(1700);
	$("#pass1").fadeIn(1800);
	$("#pass2").fadeIn(1900);
	$("#present").fadeIn(2000);
	$("#line_no1").fadeIn(2100);
	$("#line_no2").fadeIn(2200);
	$("#city1").fadeIn(2300);
	$("#state1").fadeIn(2400);
	$("#country1").fadeIn(2500);
	$("#zip1").fadeIn(2600);
	
	
	$("#regform").validate({
		rules:{
			fname:{
				required:true,
				nowhitespace:true,
				lettersonly:true
				},
			lname:{
				required:true,
				nowhitespace:true,
				lettersonly:true
				},
			mname:{
				nowhitespace:true,
				lettersonly:true
				},
			email:{
			    required:true,
				email:true
			},
			lphone:{
				required:true,
				pattern:"^[0-9]+",
				minlength:10,
				maxlength:10,
				sameDigit:true
			},
			mphone:{
				pattern:"^[0-9]+",
				minlength:10,
				maxlength:10,
				sameDigit:true
			},
			pass:{
				required:true,
				minlength:8
			},
			passw:{
				required:true,
				equalTo:"#pass"
			},
			lineno1:{
				required:true,
				checkadd:true
			},
			city:{
				required:true,
				pattern:"^([a-zA-Z]+|[a-zA-Z]+\s[a-zA-Z]+)$"
			},
			state:{
				required:true,
				pattern:"^([a-zA-Z]+|[a-zA-Z]+\s[a-zA-Z]+)$"
			},
			country:{
				required:true,
				pattern:"^([a-zA-Z]+|[a-zA-Z]+\s[a-zA-Z]+)$"
			},
			zip:{
				required:true,
				pattern:"^[0-9]+",
				minlength:6,
				maxlength:6,
				notEqualToZero:true
			}
			
		},
		messages:{
			
		}
	});
	
});

function dobvalidate()
{
   var dob=$("#dob").val();
   var today=new Date();
   var day=Date.parse(dob);
   if(today<=day || isNaN(day)){

	$("#dob").css({"borderColor":"red"});
	checkOnSubmit=false;

	}
	else
	$("#dob").css({"borderColor":"white"});	

}
function convertPassword(id)
{
    var x = $("#"+id);
    if (x.is(":password")){
        x.attr("type","text");
   } 
   else{
        x.attr("type","password");
   }
}
function captcha()
{
        var c=0;
		while(c==0)
		{
			generate();
			var a=parseInt(str[0]+str[1]);
			var b=parseInt(str[3]+str[4]);
			if(Number.isInteger(+(eval(str))) && a>=b && (a>9 && b>9))
			{
				$("#captcha").html(str);
				c++;
			}
		}
 }
function rand(){
	return Math.floor(Math.random() * 100);
}
function generate()
{
	var a=rand();
	var possible="+-*/";
	var d=possible.charAt(Math.floor(Math.random() * 4));
	var b=rand();
	if(d=='*')
	{
		a=a-(a%10);
		b=b-(b%10);
	}
	str=a+d+b; 
}
 function validCaptcha()
  {
	 var getans=$("#ans").val();
	 if(eval(str) == getans)
	 {
         return true;
	 }
	 else
	 {
		 return false;
	 }
 }

function startTime(){
    var today = new Date();
    var h = today.getHours();
	if(h<12)
		$("#wishes").html("Good Morning User");
	else if(h>=12 && h<=16)
		$("#wishes").html("Good Afternoon User");
	else if(h>=16)
		$("#wishes").html("Good Evening User");
    var m = today.getMinutes();
    m = checkTime(m);
   $("#clock").html(h + ":" + m);
    var t = setTimeout(startTime, 60000);
   var months = ["January", "February", "March", "April", "May", "June",
   "July", "August", "September", "October", "November", "December"];
    var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    var curWeekDay = days[today.getDay()];
    var curDay = today.getDate();
    var curMonth = months[today.getMonth()];
    var curYear = today.getFullYear();
    var date = curWeekDay+", "+curDay+" "+curMonth+" "+curYear;
    $("#date").html(date);
	var time = setTimeout(function(){ startTime()}, 60000);
}
function checkTime(i){
    if (i < 10){i = "0" + i};
    return i;
}
function navigationFrame(mainFrame,nav)
{
	if($("#nav").text()==="Full Screen")
	{
		$("#mainFrame").css({
			"width":"90%",
			"height":"100%"
		});
		$("#nav").html("Normal");
		$("#nav").css({
			"position":"absolute",
		});
		$("#wishes").css({
			"position":"absolute",
		    "width":"200px"});
	}
	else{
		$("#mainFrame").css({
			"width":"80%",
			"height":"350px"
		});
		$("#nav").html("Full Screen");
		$("#nav").css({
			"position":"fixed",
		});
		$("#wishes").css({
			"position":"fixed"});
	}
}
function validateGender()
{
	if(!($('input[type=radio]').is(":checked")))
	checkOnSubmit=false;
}
function backToNormal()
{
	$(".success").hide(1000);
	$(".mainFrame").show();
	$("#back").hide();
	$("#btn").show();
}
function validForm()
{
	$(".mainFrame").hide(1000);
	$(".success").show();
	$("#overlayText").hide();
	$("#btn").hide();
	$("#back").show();
	checkOnSubmit=true;
	var validator = $("#regform").valid();
	checkOnSubmit=validator;
	validateGender();
	dobvalidate();
	if(checkOnSubmit===false)
	{
		console.log(validator);
		var val=validCaptcha();
		if(val===true)
		$("#success").html("<h1>Registration Incomplete!!!<h1>");
		else
			$("#success").html("<h1>Registration Incomplete!!!<h1> <h2>Captcha (Unsuccessful : Incorrect Answer)<h2>");
		return false;
	}
	else
	{
		var val=validCaptcha();
		if(val===true && checkOnSubmit===true)
		{
			alert("Successful Registration");
			$(".success").hide();
			$("#back").hide();
		}
		else if(val===true)
		{
			$("#success").html("<h1>Registration Incomplete!!!<h1> <h2>Captcha (Successful : Correct Answer)<h2>");
			val=false;
			return val;
		}
		else{
			$("#success").html("<h1>Registration Incomplete!!!<h1> <h2>Captcha (Unsuccessful : Incorrect Answer)<h2>");
		return val;}
		
	}
}