var dailymotionRe = /^.+dailymotion.com\/((video|hub)\/([^_]+))?[^#]*(#video=([^_&]+))?/;

function tryGetRemoteIdFromUrl(url) {
	var m = url.match(dailymotionRe);
    return m ? m[5] || m[3] : null;
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
		};
	}
};

module.exports = Dailymotion;