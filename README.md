## VKMusicDL
Download currently playing song on vk.com

* Add the .js script to a bookmarklet on your bookmarks bar.
* While a song is playing, simply click the bookmarklet to start the mp3 download.

Copy and paste the following code into your bookmarks bar

     javascript:for(var a=document.getElementsByClassName("play_new"),b=document.querySelectorAll("input[id^='audio_info']"),c=0;c<a.length&&!hasClass(a[c],"playing");c++);window.open(b[c].value.split(",")[0],"_blank");
