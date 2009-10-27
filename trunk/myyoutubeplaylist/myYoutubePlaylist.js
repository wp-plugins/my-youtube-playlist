//a function to choose another youtube-video without reloading the page
function myYoutubePlaylist_cy(ytSrc,containerId,type) {
	if (type == null || type == '') {
		type = 'v';
	}
	document.getElementById(containerId).innerHTML = eval("myYoutubePlaylist_cf('',ytSrc,500,307,type)");
}
//a function to load flashmovies. it also prevents ie from adding the ugly border
function myYoutubePlaylist_cf(FlashVars,movie,width,height,type) {
	myYoutubePlaylist_cfStr = '<obj' + 'ect classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=8,0,0,0" width="' + width + '" height="' + height + '">';
	myYoutubePlaylist_cfStr += '<param name="movie" value="http://www.youtube.com/'+type+'/'+ movie +'&hl=sv&fs=1&" />';
	myYoutubePlaylist_cfStr += '<param name="quality" value="high" />';
	myYoutubePlaylist_cfStr += '<param name="menu" value="false" />';
	myYoutubePlaylist_cfStr += '<param name="FlashVars" value="'+ FlashVars +'">';
	myYoutubePlaylist_cfStr += '<param name="wmode" value="transparent">';
	myYoutubePlaylist_cfStr += '<embed src="http://www.youtube.com/'+type+'/'+ movie +'&hl=sv&fs=1&" wmode="transparent" quality="high" menu="false" flashvars="'+ FlashVars +'" pluginspage="http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash" width="' + width + '" height="' + height + '" />';
	myYoutubePlaylist_cfStr += '<' + '/object>';
	return myYoutubePlaylist_cfStr;
}
//a function to load all movies with thumbs to a list
function myYoutubePlaylist_dl(allVideos,containerId,targetContainerId) {
	allVideosArr = allVideos.split(', ');
	allVideosLi = '';
	for (var i=0; i < allVideosArr.length; i++) {
		thisLink = 'javascript:myYoutubePlaylist_cy(\''+allVideosArr[i]+'\',\''+targetContainerId+'\');'
		allVideosLi += '<li>' + '<a href="'+thisLink+'">' + '<img class="myYoutubePlaylist_Img"  alt="" src="http://i3.ytimg.com/vi/'+allVideosArr[i]+'/default.jpg"/>' + '</'+'a></'+'li>';
	}
	document.getElementById(containerId).innerHTML = allVideosLi;
}