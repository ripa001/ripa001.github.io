$(document).ready(function(){
	$(".sidebar").hover(function(){
		$(".wrapper").toggleClass("open");
		$(".wrapper").toggleClass("wrapper-animated");
	})
	$("#instruction-col").hover(function(){
		$("#instruction").toggleClass("d-none");
		
	})
	$("#experience-col").hover(function(){
		$("#experience").toggleClass("d-none");
		
	})
	$(".scheme").hover(function(){
		$("#languages").toggleClass("d-none");
		
	})
	$("#languages-col").hover(function(){
		$("#languages").toggleClass("d-none");
		
	})
})
