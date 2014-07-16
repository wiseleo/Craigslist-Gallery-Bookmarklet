(function () {
	console.log('Bookmarklet LOADED...');
	var linkNode = document.createElement('link');
	linkNode.rel = 'stylesheet';
	linkNode.href = 'https://raw.githubusercontent.com/wiseleo/Craigslist-Gallery-Bookmarklet/master/override-date-display-cl.css';
	document.getElementsByTagName('head')[0].appendChild(linkNode);
})();
