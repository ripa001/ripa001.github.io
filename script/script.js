$(document).ready(function(){
	$(".sidebar").hover(function(){
		$(".wrapper").toggleClass("open");
		$(".wrapper").toggleClass("wrapper-animated");
	})
	$("#instruction").hover(function(){
		$("#languages-content").addClass("d-none");
		$("#experience-content").addClass("d-none");
		$("#instruction-content").removeClass("d-none");
		
	})
	$("#languages").hover(function(){
		$("#experience-content").addClass("d-none");
		$("#instruction-content").addClass("d-none");
		$("#languages-content").removeClass("d-none");
		
	})
	$("#experience").hover(function(){
		$("#languages-content").addClass("d-none");
		$("#instruction-content").addClass("d-none");
		$("#experience-content").removeClass("d-none");
		
	})




})
