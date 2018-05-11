$(document).ready(function(){
	$("#openSidebar").click(function(){
		var top = $("#navbar").height() + 10;
		var height = $(window).height() - top;
		$("#noteSidebar").css({'top': top+'px', 'height': height+'px'});

		$("#noteSidebar").removeClass('d-none');
		$("#noteSidebar").addClass('notes-sidebar animated bounceInLeft');
		
	});

	$("#closeSidebar").click(function(){
		$("#noteSidebar").addClass('d-none');
		$("#noteSidebar").removeClass('notes-sidebar animated bounceInLeft');
	});
});
