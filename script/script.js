$(document).ready(function(){
	$(document).on('scroll', '#about', function() {
		$(".experience-li").addClass("d-none");
		$(".instruction-li").addClass("d-none");
		$(".languages-li").removeClass("d-none");
		$("#languages").addClass("active-tab")
		$("#instruction").removeClass("active-tab")
		$("#experience").removeClass("active-tab")
	})
	$(".sidebar").hover(function(){
		$(".wrapper").toggleClass("open");
		$(".wrapper").toggleClass("wrapper-animated");
	})
	$("#instruction").hover(function(){
		$(".languages-li").addClass("d-none");
		$(".experience-li").addClass("d-none");
		$(".instruction-li").removeClass("d-none");
		$("#instruction").addClass("active-tab")
		$("#languages").removeClass("active-tab")
		$("#experience").removeClass("active-tab")
		
	})
	$("#languages").hover(function(){
		$(".experience-li").addClass("d-none");
		$(".instruction-li").addClass("d-none");
		$(".languages-li").removeClass("d-none");
		$("#languages").addClass("active-tab")
		$("#instruction").removeClass("active-tab")
		$("#experience").removeClass("active-tab")
		
	})
	$("#experience").hover(function(){
		$(".languages-li").addClass("d-none");
		$(".instruction-li").addClass("d-none");
		$(".experience-li").removeClass("d-none");
		$("#experience").addClass("active-tab")
		$("#languages").removeClass("active-tab")
		$("#instruction").removeClass("active-tab")
		
	})




})
