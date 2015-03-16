//1. Hide Spoiler
$(".detail1 span").hide();
//2. Add a button
$(".detail1").append("<button> I'm a consumer! </button>");
//3. when button pressed 
$("button").click(function(){
//3.1 show spoiler
$(this).prev().show();                  
//3.2 get rid of button  
$(this).remove();
});
//1. Hide Spoiler
$(".detail2 span").hide();
//2. Add a button
$(".detail2").append("<button> I'm a distributor! </button>");
//3. when button pressed 
$("button").click(function(){
//3.1 show spoiler
$(this).prev().show();                  
//3.2 get rid of button  
$(this).remove();
});
//1. Hide Spoiler
$(".detail3 span").hide();
//2. Add a button
$(".detail3").append("<button> I'm a fisherman! </button>");
//3. when button pressed 
$("button").click(function(){
//3.1 show spoiler
$(this).prev().show();                  
//3.2 get rid of button  
$(this).remove();
});