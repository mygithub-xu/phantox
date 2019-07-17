 function displayDate(){
        	//截取字符
       document.getElementById("data").innerHTML=Date().split("(")[0];
}
        $(document).ready(function(){
    $("#connect_us").hover(
		function(){
		$("#fuwu_item2").show();
		 $("#connect_us").css("background-color","white")
		  $("#connect_us").css("color","aqua")
		},
		function(){
		$("#fuwu_item2").hide();
		 $("#connect_us").css("background-color","aqua")
		$("#connect_us").css("color","white")
		});
		
		$("#connect_weixin").hover(
		function(){
		$("#fuwu_item3").show();
		 $("#connect_weixin").css("background-color","white")
		 $("#connect_weixin").css("color","aqua")
		},
		function(){
		$("#fuwu_item3").hide();
		  $("#connect_weixin").css("background-color","aqua")
		 $("#connect_weixin").css("color","white")
		});
		
		$("#back_top").click(function(){
			window.scrollTo(0,0)
        });
        $("#hide_photo").click(function(){
			$("#fuwu").fadeOut("1000")
        });
});