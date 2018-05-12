var notes = [
	{id: 0, body: "This is a demo note", timestamp: Date.now()},
	{id: 1, body: "This is another demo note", timestamp: Date.now()},
	{id: 2, body: "This is a third demo note", timestamp: Date.now()},
];


$(document).ready(function(){
	var height = $("#rightBody").height() + 50;
	$("#appBody").css('height', height+'px');
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
		
		add(notes[2]);

	});

	notes.forEach(function(note){
		add(note);
	});

	$(".note-list-item").click(function(event){
		var id =  $(this).attr('id');
		// get the corresponsing note
		var noteId = id.split("_")[1];
		show(notes[noteId]);
	})

});


// let's create some functions shall we?
function add(note){
	$(".active.note-list-item").removeClass('active');
	$("#noteList").prepend('<a href="#" class="list-group-item list-group-item-action active note-list-item border-bottom-0 border-top-0 pb-0" id="note_'+note.id+'">'
					        + '<p class="mb-1"><b>'+note.body+'</b></p>'
							 + formatTimestamp(note.timestamp) 
							+ '<hr class="ml-auto mr-auto mb-0">'
					    + '</a>');
}

//display note
function show(note){
	$("#displayDate").html(formatTimestamp(note.timestamp));
	$("#noteText").html(note.body);
}


function formatTimestamp(timestamp){
	return new Date(timestamp).toUTCString();
}