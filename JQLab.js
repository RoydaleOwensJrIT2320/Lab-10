$(function()
{
    $("#btn1").on("click",function(){
        $("#1").hide();
    });

    $("#btn1").on("click",function(){
        $("#2").hide();
    });

    $("#btn1").on("click",function(){
        $("#3").hide();
    });

    $("#btn1").on("click",function(){
        $("#4").hide();
    });

    $("#btn2").on("click",function(){
        $("#1").show();
    });

    $("#btn2").on("click",function(){
        $("#2").show();
    });

    $("#btn2").on("click",function(){
        $("#3").show();
    });

    $("#btn2").on("click",function(){
        $("#4").show();
    });
    $("#btn3").click(function(){
        $("#1").text("One");
    });

    $("#btn3").click(function(){
        $("#2").text("Two");
    });

    $("#btn3").click(function(){
        $("#3").text("Three");
    });

    $("#btn3").click(function(){
        $("#4").text("Four");
    });

    $("#btn3").click(function(){
        $("#1, #3").addClass("black");
        $("#1, #3").addClass("font1");
    });

    $("#btn3").click(function(){
        $("#2, #4").addClass("white");
        $("#2, #4").addClass("font2");
    });

    $("#1").mouseover(function(){
        $("#1").css("background-color", "yellow");
        
    });
    
    $("#1").mouseout(function(){
        $("#1").css("background-color", "lightgrey");
        
    });

    $("#2").mouseover(function(){
        $("#2").css("background-color", "yellow");
        
    });
    
    $("#2").mouseout(function(){
        $("#2").css("background-color", "lightgrey");
        
    });

    $("#3").mouseover(function(){
        $("#3").css("background-color", "yellow");
        
    });
    
    $("#3").mouseout(function(){
        $("#3").css("background-color", "lightgrey");
        
    });

    $("#4").mouseover(function(){
        $("#4").css("background-color", "yellow");
        
    });
    
    $("#4").mouseout(function(){
        $("#4").css("background-color", "lightgrey");
        
    });




    //all of jquery your code goes here


});
