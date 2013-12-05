// Download Current Song - vk.com
// by Ken Lauguico
// 10/02/13

javascript:

// Collect array of all Playable Content
var playnew = document.getElementsByClassName('play_new');

// Collect array of all mp3 URLs reflecting the Playable Content
var mp3s = document.querySelectorAll("input[id^='audio_info']");

// Iterate through each Playable Content to see which is playing
for (var i=0;i<playnew.length;i++)
  if (hasClass(playnew[i],'playing')) break;

// Get the value that matched which is playing and open that URL
window.open(mp3s[i].value.split(",")[0],'_blank');


// Minified Version
javascript:for(var a=document.getElementsByClassName("play_new"),b=document.querySelectorAll("input[id^='audio_info']"),c=0;c<a.length&&!hasClass(a[c],"playing");c++);window.open(b[c].value.split(",")[0],"_blank");