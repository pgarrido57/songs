var outputDiv = document.getElementById("output-Div");
var buttonEl = document.getElementById("button");
var html = "";


var myRequest = new XMLHttpRequest();
myRequest.addEventListener("load", loadMusic);
myRequest.open("GET", "songs.json");
myRequest.send();

function loadMusic(XHRloadEvent) {

  var data = JSON.parse(XHRloadEvent.target.responseText);

  var songList = data.music;
  console.log("Test XHRloadEvent", data);

  outputMusic(songList);

  outputDiv.innerHTML = html;

};


buttonEl.addEventListener("click", function() {
  var myRequest2 = new XMLHttpRequest();
  myRequest2.addEventListener("load", loadMoreSongs);
  myRequest2.open("GET", "songs2.json");
  myRequest2.send();
});


function loadMoreSongs(XHRloadEvent) {

  var data = JSON.parse(XHRloadEvent.target.responseText);
  var songList = data.music;
  for (var i = 0; i < songList.length; i++) {
    var currentMusic = songList[i];
    html += "<div>";
    html += "Song is: " + currentMusic.songName;
    html += " , Album is: " + currentMusic.album;
    html += " , Artist is: " + currentMusic.artist;
    html += "</div>";
  };
  outputDiv.innerHTML = html;
};

function outputMusic(list) {
  for (var i = 0; i < list.length; i++) {
    var currentMusic = list[i];
    html += "<div>";
    html += "Song is: " + currentMusic.songName;
    html += " , Album is: " + currentMusic.album;
    html += " , Artist is: " + currentMusic.artist;
    html += "</div>";
  };
};
