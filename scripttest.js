const songList = [
    'audio/all.mp3',
    'audio/anbr.mp3',
    'audio/cap.mp3'
  ];

//   'path/to/song2.mp3',
//   'path/to/song3.mp3'

  let currentSong = 0;
  
  const audioElement = new Audio();
  audioElement.src = songList[currentSong];
  audioElement.load();
  
  const playButton = document.getElementById('playButton');
  const skipButton = document.getElementById('skipButton');
  const prevButton = document.getElementById('prevButton');

  
  playButton.addEventListener('click', function() {
    if (audioElement.paused) {
        audioElement.play();
        playButton.classList.remove('bi-play-fill');
        playButton.classList.add('bi-pause-fill');
    } else {
        audioElement.pause();
        playButton.classList.remove('bi-pause-fill');
        playButton.classList.add('bi-play-fill');
    }
  });


  
//   wave.classList.add('active');
  
  skipButton.addEventListener('click', function() {
    currentSong++;
    if (currentSong >= songList.length) {
      currentSong = 0;
    }
    audioElement.src = songList[currentSong];
    playButton.classList.remove('bi-play-fill');
    playButton.classList.add('bi-pause-fill');
    audioElement.load();
    audioElement.play();
    
  });
  
  audioElement.addEventListener('ended', function() {
    playButton.textContent = 'Play';
  });
  

//   prevButton.addEventListener('click', function() {
//     currentSong++;
//     if (currentSong <= songList.length) {
//       currentSong = 0;
//     }
//     audioElement.src = songList[currentSong];
//     audioElement.load();
//     audioElement.play();
//   });
  
//   audioElement.addEventListener('ended', function() {
//     playButton.textContent = 'Play';
//   });