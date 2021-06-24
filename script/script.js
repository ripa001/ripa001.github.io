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
	function tabs(to_hide, to_hide_1, to_show, id_hide, id_hide1, id_show){
		$(to_hide).addClass("d-none");
		$(to_hide_1).addClass("d-none");
		$(to_show).removeClass("d-none");
		$(id_show).addClass("active-tab")
		$(id_hide).removeClass("active-tab")
		$(id_hide1).removeClass("active-tab")
	}
	$("#instruction").hover(tabs(".languages-li",".experience-li", ".instruction-li","#instruction","#languages","#experience"))
	$("#languages").hover(tabs(".experience-li",".instruction-li", ".languages-li","#languages","#instruction","#experience"))
	$("#experience").hover(tabs(".languages-li",".instruction-li", ".experience-li","#experience","#languages","#instruction"))

	
	function autoWriting(){
		var typed_strings = $(".typed").data('typed-items');
		typed_strings = typed_strings.split(',')
		new Typed('.typed', {
		  strings: typed_strings,
		  loop: true,
		  typeSpeed: 100,
		  backSpeed: 50,
		  backDelay: 2000
		})
	}
	function removeFirst(){
		$('.letter').addClass('d-none')
		$('.auto-typing').removeClass('d-none')

	}
	setTimeout(autoWriting, 2000)
	setTimeout(removeFirst, 4000)

	




})
