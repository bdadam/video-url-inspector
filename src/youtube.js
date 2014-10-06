//http://stackoverflow.com/a/14701040
var youtubeRe = /^.*(?:youtu.be\/|v\/|e\/|u\/\w+\/|embed\/|v=)([^#\&\?]*).*/;

function tryGetRemoteIdFromUrl(url) {
    var matches = url.match(youtubeRe);
    if (matches && matches.length === 2 && matches[1].length === 11) {
        return matches[1];
    }

	return null;
}

var Youtube = {
	name: 'youtube',
	tryGetVideoDetailsFromUrl: function(url) {
		if (!url) {
			return null;
		}

		var remoteId = tryGetRemoteIdFromUrl(url);

		if (!remoteId) {
			return null;
		}

		return {
			hoster: Youtube.name,
			remoteId: remoteId,
			canonicalUrl: 'http://www.youtube.com/watch?v=' + remoteId,
			embedUrl: 'http://www.youtube.com/embed/' + remoteId,
			thumbnails: [
				{ url: 'http://img.youtube.com/vi/' + remoteId + '/0.jpg', width: 480, height: 360 },
				{ url: 'http://img.youtube.com/vi/' + remoteId + '/1.jpg', width: 120, height: 90 },
				{ url: 'http://img.youtube.com/vi/' + remoteId + '/2.jpg', width: 120, height: 90 },
				{ url: 'http://img.youtube.com/vi/' + remoteId + '/3.jpg', width: 120, height: 90 },
				{ url: 'http://img.youtube.com/vi/' + remoteId + '/hqdefault.jpg', width: 480, height: 360 },
				{ url: 'http://img.youtube.com/vi/' + remoteId + '/mqdefault.jpg', width: 320, height: 180 },
				{ url: 'http://img.youtube.com/vi/' + remoteId + '/maxresdefault.jpg', hires: true }
			]
		};
	}
};

module.exports = Youtube;