//http://stackoverflow.com/a/14701040
var youtubeRe = /^.*(?:youtu.be\/|v\/|e\/|u\/\w+\/|embed\/|v=)([^#\&\?]*).*/;
var isYoutubeDomain = /https?\:\/\/(?:youtu\.be|www.youtube.|youtube.)/;

function tryGetRemoteIdFromUrl(url) {

	if (!isYoutubeDomain.test(url)) {
		return null;
	}

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
			canonicalUrl: 'https://www.youtube.com/watch?v=' + remoteId,
			embedUrl: 'https://www.youtube.com/embed/' + remoteId,
			thumbnails: [
				{ url: 'https://img.youtube.com/vi/' + remoteId + '/0.jpg', width: 480, height: 360 },
				{ url: 'https://img.youtube.com/vi/' + remoteId + '/1.jpg', width: 120, height: 90 },
				{ url: 'https://img.youtube.com/vi/' + remoteId + '/2.jpg', width: 120, height: 90 },
				{ url: 'https://img.youtube.com/vi/' + remoteId + '/3.jpg', width: 120, height: 90 },
				{ url: 'https://img.youtube.com/vi/' + remoteId + '/hqdefault.jpg', width: 480, height: 360 },
				{ url: 'https://img.youtube.com/vi/' + remoteId + '/mqdefault.jpg', width: 320, height: 180 },
				{ url: 'https://img.youtube.com/vi/' + remoteId + '/maxresdefault.jpg', hires: true }
			]
		};
	}
};

module.exports = Youtube;