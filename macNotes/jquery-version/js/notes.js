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
		
		newNote();

	});

	notes.forEach(function(note){
		add(note);
	});

	show(notes[0]);

	$(".note-list-item").click(function(event){
		var id =  $(this).attr('id');
		// get the corresponsing note
		var noteId = id.split("_")[1];
		show(notes[noteId]);
	});

	$("#editNote").click(function(event){
		// get id of active note
		var id = $(".active.note-list-item").attr('id');
		var noteId = id.split("_")[1];
		edit(notes[noteId]);
		
	});

	$("#closeEdit").click(function(){
		// get id of active note
		var id = $(".active.note-list-item").attr('id');
		var noteId = id.split("_")[1];
		closeEdit(notes[noteId]);
	});

	$("#saveNote").click(function(e){
		e.preventDefault();
		// get id of active note
		var id = $(".active.note-list-item").attr('id');
		var noteId = id.split("_")[1];
		var text = $("#textArea").val();
		saveNote(notes[noteId], text);
	});

	$("#deleteNote").click(function(e){
		// get id of active note
		var id = $(".active.note-list-item").attr('id');
		var noteId = id.split("_")[1];
		deleteNote(notes[noteId]);
		// find the next note to show
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

function newNote(){
	$(".active.note-list-item").removeClass('active');
	// last id
	var lastId = notes.length - 1;
	var newNote = {id: ++lastId, body: "New Note", timestamp: Date.now()}
	notes.push(newNote);
	add(newNote);
	show(newNote);
}

//display note
function show(note){
	$(".active.note-list-item").removeClass('active');
	$("#displayDate").html(formatTimestamp(note.timestamp));
	$("#noteText").html(note.body);
	// set note as active
	var noteId = '#note_'+note.id;
	$(noteId).addClass('active');
}

function edit(note){
	$("#noteText").hide();
	$("#editNoteForm").show();
	$("#textArea").html(note.body);
	$("#editNote").hide();
	$("#closeEdit").show();
}

function closeEdit(note){
	$("#editNoteForm").hide();
	$("#noteText").show();
	show(note);
	$("#closeEdit").hide();
	$("#editNote").show();
}

function saveNote(note, text){
	note.body = text;
	// the sidebar
	deleteNote(note);
	add(note);
	closeEdit(note);
}

function deleteNote(note){
	notes[note.id] = null;
	var noteId = '#note_'+note.id;
	$(noteId).remove();
	var x = notes[note.id + 1];
	var y = notes[note.id - 1];
	if (x !== undefined && x!=null){
		show(x);
	}
	else if(y !== undefined && y!= null){
		show(y);
	} else{
		$("#noteText").html("nothing to show");
	}
}


function formatTimestamp(timestamp){
	return new Date(timestamp).toUTCString();
}