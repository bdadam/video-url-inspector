var dailymotionRe = /^.+(?:dailymotion\.com|dai\.ly)\/(?:(?:(?:video|hub)\/)?([^_\?#]+))?[^#]*(?:#video=([^_&\?]+))?/;

function tryGetRemoteIdFromUrl(url) {
	var m = url.match(dailymotionRe);
    return m ? m[2] || m[1] : null;
}

var Dailymotion = {
	name: 'dailymotion',
	tryGetVideoDetailsFromUrl: function(url) {
		if (!url) {
			return null;
		}

		var remoteId = tryGetRemoteIdFromUrl(url);

		if (!remoteId) {
			return null;
		}

		return {
			hoster: Dailymotion.name,
			remoteId: remoteId,
			canonicalUrl: 'https://www.dailymotion.com/video/' + remoteId,
			embedUrl: 'https://www.dailymotion.com/embed/video/' + remoteId,
			thumbnails: [
				{ url: 'https://www.dailymotion.com/thumbnail/video/' + remoteId }
			]
		};
	}
};

module.exports = Dailymotion;
