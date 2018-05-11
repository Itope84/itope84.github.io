$(document).ready(function(){
	var height = $("#rightBody").height();
	$("#appBody").css('height', height);
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

	$("#addNote").click(function(){
		$(".active.note-list-item").removeClass('active');
		add("Latest Note", '3.30 PM');

	});
});


// let's create some functions shall we?
function add(note, timestamp){
	$("#noteList").prepend('<a href="#" class="list-group-item list-group-item-action active note-list-item border-bottom-0 border-top-0 pb-0">'
					        + '<p class="mb-1"><b>'+note+'</b></p>'
							 + timestamp 
							+ '<hr class="ml-auto mr-auto mb-0">'
					    + '</a>');
}