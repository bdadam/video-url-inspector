video-url-inspector
===================

Everything about video URLs (Youtube, Vimeo or Dailymotion - more are coming)

## Installation

`npm install --save video-url-inspector`

or

`bower install video-url-inspector`


## Usage with CommonJS modules (like ind NodeJS or Browserify)

```JavaScript
var inspect = require('video-url-inspector');

var video = inspect('https://www.youtube.com/watch?v=kl1LY8obJWs');

console.log(video);
/*
	Output:

	{
	    "hoster": "youtube",
	    "remoteId": "kl1LY8obJWs",
	    "canonicalUrl": "http://www.youtube.com/watch?v=kl1LY8obJWs",
	    "embedUrl": "http://www.youtube.com/embed/kl1LY8obJWs",
	    "thumbnails": [{
	        "url": "http://img.youtube.com/vi/kl1LY8obJWs/0.jpg",
	        "width": 480,
	        "height": 360
	    }, {
	        "url": "http://img.youtube.com/vi/kl1LY8obJWs/1.jpg",
	        "width": 120,
	        "height": 90
	    }, {
	        "url": "http://img.youtube.com/vi/kl1LY8obJWs/2.jpg",
	        "width": 120,
	        "height": 90
	    }, {
	        "url": "http://img.youtube.com/vi/kl1LY8obJWs/3.jpg",
	        "width": 120,
	        "height": 90
	    }, {
	        "url": "http://img.youtube.com/vi/kl1LY8obJWs/hqdefault.jpg",
	        "width": 480,
	        "height": 360
	    }, {
	        "url": "http://img.youtube.com/vi/kl1LY8obJWs/mqdefault.jpg",
	        "width": 320,
	        "height": 180
	    }, {
	        "url": "http://img.youtube.com/vi/kl1LY8obJWs/maxresdefault.jpg",
	        "hires": true
	    }]
	}

*/
```

## Usage with AMD (like RequireJS)

```JavaScript
require(['./videoUrlInspector'], function(inspect) {
	var video = inspect('https://www.youtube.com/watch?v=kl1LY8obJWs');
	console.log(video);

	/*
		Output:

		{
		    "hoster": "youtube",
		    "remoteId": "kl1LY8obJWs",
		    "canonicalUrl": "http://www.youtube.com/watch?v=kl1LY8obJWs",
		    "embedUrl": "http://www.youtube.com/embed/kl1LY8obJWs",
		    "thumbnails": [{
		        "url": "http://img.youtube.com/vi/kl1LY8obJWs/0.jpg",
		        "width": 480,
		        "height": 360
		    }, {
		        "url": "http://img.youtube.com/vi/kl1LY8obJWs/1.jpg",
		        "width": 120,
		        "height": 90
		    }, {
		        "url": "http://img.youtube.com/vi/kl1LY8obJWs/2.jpg",
		        "width": 120,
		        "height": 90
		    }, {
		        "url": "http://img.youtube.com/vi/kl1LY8obJWs/3.jpg",
		        "width": 120,
		        "height": 90
		    }, {
		        "url": "http://img.youtube.com/vi/kl1LY8obJWs/hqdefault.jpg",
		        "width": 480,
		        "height": 360
		    }, {
		        "url": "http://img.youtube.com/vi/kl1LY8obJWs/mqdefault.jpg",
		        "width": 320,
		        "height": 180
		    }, {
		        "url": "http://img.youtube.com/vi/kl1LY8obJWs/maxresdefault.jpg",
		        "hires": true
		    }]
		}
	*/
});

```