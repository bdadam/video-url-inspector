var hosters = [
	require('./hosters/youtube'),
	require('./hosters/vimeo'),
	require('./hosters/dailymotion')
];


module.exports = {
	inspectUrl: function(url) {

		for (var i = 0, l = hosters.length; i < l; i++) {
			var hoster = hosters[i];

			var data = hoster.tryGetVideoDetailsFromUrl(url);

			if (data) {
				return data;
			}
		}

		return null;

		/*


		return {
			hoster: 'youtube',
			remoteId: 'abcdefghijk',
			canonicalUrl: 'http://www.youtube.com/watch?v=abcdefghijk',
			embedUrl: 'http://www.youtube.com/embed/abcdefghijk',
			thumbnails: [
				{ url: 'http://img.youtube.com/vi/abcdefghijk/0.jpg', width: 480, height: 360 },
				{ url: 'http://img.youtube.com/vi/abcdefghijk/1.jpg', width: 120, height: 90 },
				{ url: 'http://img.youtube.com/vi/abcdefghijk/2.jpg', width: 120, height: 90 },
				{ url: 'http://img.youtube.com/vi/abcdefghijk/3.jpg', width: 120, height: 90 },
				{ url: 'http://img.youtube.com/vi/abcdefghijk/hqdefault.jpg', width: 480, height: 360 },
				{ url: 'http://img.youtube.com/vi/abcdefghijk/mqdefault.jpg', width: 320, height: 180 },
				{ url: 'http://img.youtube.com/vi/abcdefghijk/maxresdefault.jpg', hires: true }
			]
		};
		*/
	}
};