var notes = [
	{id: 0, body: "This is a demo note", timestamp: Date.now()},
	{id: 1, body: "This is another demo note", timestamp: Date.now()},
	{id: 2, body: "This is a third demo note", timestamp: Date.now()},
];

	// the sidebar

	var height = document.getElementById("rightBody").clientHeight;
	document.getElementById("appBody").style.height = height+'px';
	document.getElementById("openSidebar").addEventListener("click", function(){
		var top = document.getElementById("navbar").clientHeight;
		var height = document.body.offsetHeight - top;
		document.getElementById("noteSidebar").style.top = top+'px';
		document.getElementById("noteSidebar").style.height = height+'px';

		document.getElementById("noteSidebar").classList.remove('d-none');
		addClasses('noteSidebar', 'notes-sidebar', 'animated', 'bounceInLeft');
		
	});

	document.getElementById("closeSidebar").addEventListener("click", function(){
		addClasses('noteSidebar', 'd-none');
		removeClasses('noteSidebar', 'notes-sidebar', 'anomated', 'bounceInLeft');
		
	});

	//insert notes 

	notes = sortNotes(notes);
	for (var i = 0; i < notes.length; i++) {
		//sort
		insertNote(notes[i]);
	}

	// show the latest note
	showNote(notes[notes.length-1]);
	addClickListeners();

	// when i click plus
	document.getElementById('addNote').addEventListener('click', function(){
		newNote();
	});

	// edit note
	document.getElementById('editNote').addEventListener('click', function(){
		editNote(document.getElementsByClassName("active note-list-item")[0].data);
	});

	// close the editor
	document.getElementById('closeEdit').addEventListener('click', function(){
		closeEdit();
	});

	// delete a note
	document.getElementById('deleteNote').addEventListener('click', function(){
		deleteNote(document.getElementsByClassName("active note-list-item")[0].data);
	});

	// save note
	document.getElementById('saveNote').addEventListener('click', function(){
		saveNote(document.getElementsByClassName("active note-list-item")[0].data, document.getElementById('textArea').value);
	});



	//show a note when i click on it.
	//to do this, always remember to add event listeners when a new item is generated
	function addClickListeners(){
		var sidebarItems = document.getElementsByClassName('note-list-item');

		for(var i=0; i<sidebarItems.length; i++){
			sidebarItems[i].addEventListener('click', function(){
				var note = this.data;
				showNote(note);
			});
		}
	}

	function editNote(note){
		document.getElementById("noteText").style.display = "none";
		document.getElementById("editNoteForm").style.display = "unset";
		document.getElementById("textArea").innerHTML = note.body;
		document.getElementById("editNote").style.display = 'none';
		document.getElementById("closeEdit").style.display = "unset";
	}

	function closeEdit(){
		document.getElementById("editNoteForm").style.display = 'none';
		document.getElementById("noteText").style.display = 'unset';
		document.getElementById("closeEdit").style.display = 'none';
		document.getElementById("editNote").style.display = 'unset';
	}

	function saveNote(note, text){
		note.body = text;
		// the sidebar
		deleteNote(note);
		insertNote(note);
		closeEdit();
		showNote(note);
		addClickListeners();
	}

	function deleteNote(note){
		notes[note.id] = null;
		var noteId = 'note_'+note.id;
		var sidebarNote = document.getElementById(noteId);
		var sidebarList = sidebarNote.parentNode;
		var x = sidebarNote.previousSibling;
		var y = sidebarNote.nextSibling;
		sidebarList.removeChild(sidebarNote);
		if (x !== undefined && x!== null){
			showNote(x.data);
		}
		else if(y !== undefined && y!== null){
			showNote(y.data);
		} else{
			$("#noteText").html("nothing to show");
		}
	}

	function newNote(){
		var lastId = notes.length - 1;
		var note = {id: ++lastId, body: "New Note", timestamp: Date.now()}
		notes.push(note);
		// add to sidebar
		insertNote(note);
		// show
		showNote(note);
		// add click listeners
		addClickListeners();
	}
	

	// to sort the notes
	function sortNotes(notes){
		return notes.slice().sort(function(a, b){
			return b.timestamp - a.timestamp;
		});
	}

	function showNote(note){
		var activeEl = document.getElementsByClassName("active note-list-item");
		for(var i = 0; i<activeEl.length; i++){
			removeClasses(activeEl[i].id, 'active');
		}
		document.getElementById("displayDate").innerHTML = formatTimestamp(note.timestamp);
		document.getElementById("noteText").innerHTML = note.body;
		// set note as active
		var noteId = 'note_'+note.id;
		document.getElementById(noteId).classList.add('active');
	}

	function insertNote(note){
		var activeEl = document.getElementsByClassName("active note-list-item");
		for(var i = 0; i<activeEl.length; i++){
			removeClasses(activeEl[i].id, 'active');
		}
		var sidebarNotes = document.getElementById("noteList");
		// prepare note
		var listItem = document.createElement('a');
		listItem.href = "#";
		var classes = ['list-group-item', 'list-group-item-action', 'active', 'note-list-item', 'border-bottom-0', 'border-top-0', 'pb-0']
		for (var i = 0; i < classes.length; i++) {
			listItem.classList.add(classes[i]);
		}
		listItem.id = 'note_'+note.id;
		// attach note data
		listItem.data = note;
		listItem.innerHTML = '<p class="mb-1"><b>'+note.body+'</b></p>'
								 + formatTimestamp(note.timestamp) 
								+ '<hr class="ml-auto mr-auto mb-0">';
								
		sidebarNotes.insertBefore(listItem, sidebarNotes.firstChild);
	}

	function formatTimestamp(timestamp){
		return new Date(timestamp).toUTCString();
	}
	
	function addClasses(elementId, ...classes){
		var element = document.getElementById(elementId);
		for(var i =0; i<classes.length; i++){
			element.classList.add(classes[i]);
		}
	}

	function removeClasses(elementId, ...classes){
		var element = document.getElementById(elementId);
		for (var i = classes.length - 1; i >= 0; i--) {
			element.classList.remove(classes[i]);
		}
	}