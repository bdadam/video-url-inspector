var vimeoRe = /https?:\/\/(?:www\.)?vimeo.com\/(?:channels\/(?:\w+\/)?|groups\/([^\/]*)\/videos\/|album\/(\d+)\/video\/|)(\d+)(?:$|\/|\?)/;

function tryGetRemoteIdFromUrl(url) {
	//http://stackoverflow.com/questions/13286785/get-video-id-from-vimeo-url

	var match = url.match(vimeoRe);
	if (match && match.length >= 4) {
		return match[3];
	}

	return null;
}

var Vimeo = {
	name: 'vimeo',
	tryGetVideoDetailsFromUrl: function(url) {
		if (!url) {
			return null;
		}

		var remoteId = tryGetRemoteIdFromUrl(url);

		if (!remoteId) {
			return null;
		}

		return {
			hoster: Vimeo.name,
			remoteId: remoteId,
			canonicalUrl: 'http://vimeo.com/' + remoteId,
			embedUrl: 'http://player.vimeo.com/video/' + remoteId
		};
	}
};

module.exports = Vimeo;