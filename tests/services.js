var expect = require('chai').expect

var youtube = require('../src/services/youtube');
var vimeo = require('../src/services/vimeo');
var dailymotion = require('../src/services/dailymotion');

describe('Youtube', function() {

	var invalidUrls = [
		undefined,
		null,
		'something-bad',
		'http://www.youtube.com/watch?v=dQw4w9WgXc' // too short, only 10 chars
	];

	describe('should not parse incorrect urls', function() {
		invalidUrls.forEach(function(url) {
			it(url, function() {
				expect(youtube.tryGetVideoDetailsFromUrl(url)).to.equal(null);
			});
		});
	});

	var validUrlsWithSameId = [
		'http://www.youtube.com/v/dQw4w9WgXcQ?fs=1&hl=en_US&rel=0',
		'http://www.youtube.com/embed/dQw4w9WgXcQ?rel=0',
		'http://www.youtube.com/watch?v=dQw4w9WgXcQ&feature=feedrec_grec_index',
		'http://www.youtube.com/watch?v=dQw4w9WgXcQ',
		'http://youtu.be/dQw4w9WgXcQ',
		'http://www.youtube.com/watch?v=dQw4w9WgXcQ#t=0m10s',
		'http://www.youtube.com/user/IngridMichaelsonVEVO#p/a/u/1/dQw4w9WgXcQ',
		'http://youtu.be/dQw4w9WgXcQ',
		'http://www.youtube.com/embed/dQw4w9WgXcQ',
		'http://www.youtube.com/v/dQw4w9WgXcQ',
		'http://www.youtube.com/e/dQw4w9WgXcQ',
		'http://www.youtube.com/watch?v=dQw4w9WgXcQ',
		'http://www.youtube.com/?v=dQw4w9WgXcQ',
		'http://www.youtube.com/watch?feature=player_embedded&v=dQw4w9WgXcQ',
		'http://www.youtube.com/?feature=player_embedded&v=dQw4w9WgXcQ',
		'http://www.youtube.com/user/IngridMichaelsonVEVO#p/u/11/dQw4w9WgXcQ',
		'http://www.youtube-nocookie.com/v/dQw4w9WgXcQ?version=3&hl=en_US&rel=0'
	];

	describe('should parse every valid url:', function() {
		validUrlsWithSameId.forEach(function(url) {
			it(url, function() {
				var result = youtube.tryGetVideoDetailsFromUrl(url);

				expect(result).to.be.ok;
				expect(result.hoster).to.equal('youtube');
				expect(result.remoteId).to.equal('dQw4w9WgXcQ');
			});
		});
	});
});

describe('Vimeo', function() {
	var invalidUrls = [
		undefined,
		null,
		'something-bad',
		"https://vimeo.com/11111asa111"
	];
	
	var validUrls = [
		"https://vimeo.com/11111111",
		"http://vimeo.com/11111111",
		"https://www.vimeo.com/11111111",
		"http://www.vimeo.com/11111111",
		"https://vimeo.com/channels/11111111",
		"http://vimeo.com/channels/11111111",
		"https://vimeo.com/channels/mychannel/11111111",
		"http://vimeo.com/channels/yourchannel/11111111",
		"https://vimeo.com/groups/name/videos/11111111",
		"http://vimeo.com/groups/name/videos/11111111",
		"https://vimeo.com/album/2222222/video/11111111",
		"http://vimeo.com/album/2222222/video/11111111",
		"https://vimeo.com/11111111?param=test",
		"http://vimeo.com/11111111?param=test"
	];

	describe('should not parse incorrect urls', function() {
		invalidUrls.forEach(function(url) {
			it(url, function() {
				expect(vimeo.tryGetVideoDetailsFromUrl(url)).to.equal(null);
			});
		});
	});

	describe('should parse every valid url:', function() {
		validUrls.forEach(function(url) {
			it(url, function() {
				var result = vimeo.tryGetVideoDetailsFromUrl(url);

				expect(result).to.be.ok;
				expect(result.hoster).to.equal('vimeo');
				expect(result.remoteId).to.equal('11111111');
			});
		});
	});
});

describe('Dailymotion', function() {
	var invalidUrls = [
		undefined,
		null,
		'something-bad'
	];

	var validUrls = [
		"http://www.dailymotion.com/video/x44lvd_rates-of-exchange-like-a-renegade_music",
		"http://www.dailymotion.com/video/x44lvd",
		"http://www.dailymotion.com/hub/x44lvd_Galatasaray",
		"http://www.dailymotion.com/hub/xq9_Galatasaray#video=x44lvd",
		"http://www.dailymotion.com/video/x44lvd_hakan-yukur-klip_sport",
		"http://www.dailymotion.com/fr/relevance/search/gangnam+style/1#video=x44lvd"
	];

	describe('should not parse incorrect urls', function() {
		invalidUrls.forEach(function(url) {
			it(url, function() {
				expect(dailymotion.tryGetVideoDetailsFromUrl(url)).to.equal(null);
			});
		});
	});

	describe('should parse every valid url:', function() {
		validUrls.forEach(function(url) {
			it(url, function() {
				var result = dailymotion.tryGetVideoDetailsFromUrl(url);

				expect(result).to.be.ok;
				expect(result.hoster).to.equal('dailymotion');
				expect(result.remoteId).to.equal('x44lvd');
			});
		});
	});
});
