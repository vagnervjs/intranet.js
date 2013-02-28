var counter = 0,
	timeOut = 2;

function intranet(ip, file, urlPublic){
	var intranetIp = ip,
		publicURL = urlPublic,
		img = ip + file + '?' + (new Date()).getTime(),
		imgElem = document.createElement('img'),
		imgElem.src = img;

	    counter = counter + 1;
	    if (imgElem.complete) {
	        if (imgElem.width > 0 && imgElem.height > 0) { // image ok
	        	// found
	            window.location = intranetIp;
	        } else {
	        	// not detect found
	            console.log("Error");
	        }
	    } else { // file not found
	        if (counter < timeOut) { //try again
	            setTimeout("intranet()", 2);
	        } else {
	        	// Error: file not found
	        	console.log("Error");
	        }
	    }
	}
}