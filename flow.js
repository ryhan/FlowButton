/* Flow.js*/

var FlowApp = FlowApp || {
	init: function(){

		var notEmpty = function(v){ 
			return (v != undefined && v!= null && v!=0);
		};

		FlowApp.body = document.body;
		var iframes = document.getElementsByTagName('iframe'),
			flowFrames = [];
		for( var i = 0; i< iframes.length; i++){
			var tmp = iframes[i];
			var taskName = tmp.getAttribute('flowTask');
			if (notEmpty(taskName)){

				var src = "iframe.html?";

				var title = encodeURIComponent(taskName);
				src += ("title="+title);

				var url = tmp.getAttribute('flowURL');
				if (notEmpty(url)){
					src += "&url="+encodeURIComponent(url);
				}

				var description = tmp.getAttribute('flowDescription');
				if (notEmpty(description)){
					src += "&description="+encodeURIComponent(description);
				}

				iframes[i].setAttribute('src',src);


				flowFrames.push(tmp);
			}
		}

	}
};

FlowApp.init();