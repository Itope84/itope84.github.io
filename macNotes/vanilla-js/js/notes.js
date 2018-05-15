var notes = [
	{id: 0, body: "This is a demo note", timestamp: Date.now()},
	{id: 1, body: "This is another demo note", timestamp: Date.now()},
	{id: 2, body: "This is a third demo note", timestamp: Date.now()},
];


$(document).ready(function(){
	
	var height = document.getElementById("rightBody").offsetHeight + 50;
	document.getElementById("appBody").style.height = height+'px';

	// when we click the open sidebar button
	document.getElementById("openSidebar").addEventListener('click', openSidebar());

	$("#closeSidebar").click(function(){
		$("#noteSidebar").addClass('d-none');
		$("#noteSidebar").removeClass('notes-sidebar animated bounceInLeft');
	});

	$("#addNote").click(function(){
		
		addNote(notes[2]);

	});

	notes.forEach(function(note){
		addNote(note);
	});

	// document.getEleme(".note-list-item").click(function(event){
	// 	var id =  $(this).attr('id');
	// 	// get the corresponsing note
	// 	var noteId = id.split("_")[1];
	// 	show(notes[noteId]);
	// });

	show(notes[0]);

});


// let's create some functions shall we?
function addNote(note){
	document.getElementsByClassName("active note-list-item")[0].classList.remove('active');
	prepend('noteList', '<a href="#" class="list-group-item list-group-item-action active note-list-item border-bottom-0 border-top-0 pb-0" id="note_'+note.id+'">'
					        + '<p class="mb-1"><b>'+note.body+'</b></p>'
							 + formatTimestamp(note.timestamp) 
							+ '<hr class="ml-auto mr-auto mb-0">'
					    + '</a>');
}

function showNote(note){
	// remove the active class
	document.getElementsByClassName("active note-list-item")[0].classList.remove('active');
	//dislay date
	document.getElementById("displayDate").innerHtml = formatTimestamp(note.timestamp);
	// show selected note
	document.getElementById("noteText").innerHtml = note.body;
	// set note as active
	var noteId = 'note_'+note.id;
	document.getElementById(noteId).addClass('active');
}


function openSidebar(){
		
		// get offsetheight of navbar
		var navbarHeight = document.getElementById("navbar").offsetHeight;

		// set starting position of fixed sidebar
		var height = document.body.offsetHeight - navbarHeight;
		document.getElementById("noteSidebar").style.top = navbarHeight+'px';
		// set height of sidebar to window height
		document.getElementById("noteSidebar").style.height = height+'px';
		// show the sidebar
		document.getElementById("noteSidebar").classList.remove('d-none');
		// Oh, don't you wanna animate it
		document.getElementById("noteSidebar").classList.add('notes-sidebar');
		document.getElementById("noteSidebar").classList.add('animated');
		document.getElementById("noteSidebar").classList.add('bounceInLeft');
		 
		
	}

function formatTimestamp(timestamp){
	return new Date(timestamp).toUTCString();
}

function prepend(elementId, content){
	var el = document.getElementById(elementId), elChild = document.createElement('div');
	elChild.innerHtml = content;

	el.insertBefore(elChild, el.firstChild);
}