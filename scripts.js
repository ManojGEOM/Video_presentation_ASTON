var video = document.querySelector("#myvid");
var myvideo = document.getElementById("myvid");
var videoStartTime = 0.0;
document.getElementById("input").addEventListener("change", function() {
  var media = URL.createObjectURL(this.files[0]);
  var video = document.getElementById("myvid");
  video.src = media;
  video.style.display = "block";
  video.play();
});
document.getElementById("input").addEventListener("keypress", function() {
    if (event.keyCode === 74 || event.keyCode === 106) {
        video.paused ? video.play() : video.pause();
    }
});

//CSV download when video end

video.onended = () => {
	
	const rows = [
		["Video Start Time", videoStartTime],
		["Video End Time", video.currentTime],
    ];
	
    let csvContent = 'data:text/csv;charset=utf-8,';
	
    rows.forEach(function (rowArray) {
      let row = rowArray.join(',');
      csvContent += row + '\r\n';
    });
	
    var encodedUri = encodeURI(csvContent);
    var link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "whenvideoend.csv");
	// This will download the data file named "whenvideoend.csv".
    document.body.appendChild(link); // Required for FF
    
    link.click();
	
};
video.onplay = () => {

			
};

//CSV download on keypress
/*window.addEventListener("keypress", function (e) {
	console.log(video.currentTime);
	console.log(video.duration);
	video.play();
	video.pause();

	const rows = [
		["Video Duration", video.duration],
		["Watched Duration", video.currentTime],
    ];
	
    let csvContent = 'data:text/csv;charset=utf-8,';
	
    rows.forEach(function (rowArray) {
      let row = rowArray.join(',');
      csvContent += row + '\r\n';
    });
	
    var encodedUri = encodeURI(csvContent);
    var link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "whenkeypress.csv");
    document.body.appendChild(link); 
    
    link.click(); // This will download the data file named "whenkeypress.csv".
});
*/
 