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
			canonicalUrl: 'http://vimeo.com/' + remoteId,
			embedUrl: 'http://player.vimeo.com/video/' + remoteId
		};
	}
};

module.exports = Dailymotion;