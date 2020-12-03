$(document).ready(function(){
	$(".sidebar").hover(function(){
		$(".wrapper").toggleClass("open");
		$(".wrapper").toggleClass("wrapper-animated");
	})
	$("#instruction-icon").hover(function(){
		$("#instruction").toggleClass("d-none");
		
	})
	$("#experience-icon").hover(function(){
		$("#experience").toggleClass("d-none");
		
	})
	$("#languages-icon").hover(function(){
		$("#languages").toggleClass("d-none");
		
	})
})
