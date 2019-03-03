var audioPlayer = document.getElementById('audio');

function stop(){
    audioPlayer.pause();
	audioPlayer.currentTime = 0;
}

function playPause(){
	if(audioPlayer.paused){
		audioPlayer.play();
	} else{
    	audioPlayer.pause();
	}
}
		
function volume(volume){
	var volumecontrol= document.getElementsByTagName("audio")[0];
	volumecontrol.volume = volume;
}