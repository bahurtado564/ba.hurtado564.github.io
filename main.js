(function($) {

	var obGif = function() {
		var gif = [];
		$('img').each(function() {
			var data = $(this).data('alt');
			gif.push(data);
		});
		return gif;
	}

	var gif = obGif();

	
	var image = [];

	$.each(gif, function(index) {
		image[index]     = new Image();
		image[index].src = gif[index];
	});

	// Mover la rueda
	$('figure1').on('click', function() {

		var $this   = $('boris'),
				$index  = $this.index(),
				
				$img    = $this.children('img'),
				$imgSrc = $img.attr('src'),
				$imgAlt = $img.attr('data-alt'),
				$imgExt = $imgAlt.split('.');
				
		if($imgExt[1] === 'gif') {
			$img.attr('src', $img.data('alt')).attr('data-alt', $imgSrc);
		} 
        else{
            $("#jajaja").modal("show");
        }

		
		$this.toggleClass('play');

	});
    
    //Detener la rueda
    $('figure2').on('click', function() {

		var $this   = $('boris'),
				$index  = $this.index(),
				
				$img    = $this.children('img'),
				$imgSrc = $img.attr('src'),
				$imgAlt = $img.attr('data-alt'),
				$imgExt = $imgAlt.split('.');
				
		if($imgExt[1] != 'gif') {
			$img.attr('src', $imgAlt).attr('data-alt', $img.data('alt'));
		} 
        else{
            $("#jajaja2").modal("show");
        }

		
		$this.toggleClass('play');

	});

})(jQuery);