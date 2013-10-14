// Download Current Song - vk.com
// by Ken Lauguico
// 10/02/13

javascript:var playnew = document.getElementsByClassName('play_new'); var mp3s = document.querySelectorAll("input[id^='audio_info']"); for(var i=0;i<playnew.length;i++) if (hasClass(playnew[i],'playing')) break; window.open(mp3s[i].value.split(",")[0],'_blank');

// Minified - http://javascript-minifier.com/
javascript:for(var playnew=document.getElementsByClassName("play_new"),mp3s=document.querySelectorAll("input[id^='audio_info']"),i=0;i<playnew.length&&!hasClass(playnew[i],"playing");i++);window.open(mp3s[i].value.split(",")[0],"_blank");