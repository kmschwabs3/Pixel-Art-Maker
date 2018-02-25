// Select color input

// Select size input

//Select table

// When size is submitted by the user, call makeGrid()


function makeGrid() {
	var inputHeight = $('#inputHeight').val();
	var inputWidth = $('#inputWidth').val();
	var pixelCanvas = $('#pixelCanvas');
	for (var i = 1; i < inputHeight; i++){
		var tRow = document.createElement('tr');
		for (var j = 1; j < inputWidth; j++){
			var tData = document.createElement('td');
			tRow.append(tData)
		}
		pixelCanvas.append(tRow);
	}
}

$('body').on('click', 'td', function(){
	var colorInput = $('#colorPicker').val();
	$(this).css('background-color', colorInput);
})
