// Download Current Song - vk.com
// by Ken Lauguico
// 10/02/13

javascript:var playnew = document.getElementsByClassName('play_new'); var mp3s = document.querySelectorAll("input[id^='audio_info']"); for(var i=0;i<playnew.length;i++) if (hasClass(playnew[i],'playing')) break; window.open(mp3s[i].value.split(",")[0],'_blank');

// Minified Version
javascript:for(var a=document.getElementsByClassName("play_new"),b=document.querySelectorAll("input[id^='audio_info']"),c=0;c<a.length&&!hasClass(a[c],"playing");c++);window.open(b[c].value.split(",")[0],"_blank");