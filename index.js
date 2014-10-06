var hosters = [
	require('./src/youtube'),
	require('./src/vimeo'),
	require('./src/dailymotion')
];

function inspect(url) {
	for (var i = 0, l = hosters.length; i < l; i++) {
		var hoster = hosters[i];

		var data = hoster.tryGetVideoDetailsFromUrl(url);

		if (data) {
			return data;
		}
	}

	return null;	
}

module.exports = inspect;