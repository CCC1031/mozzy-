const songList = [
    'audio/all.mp3',
    'audio/anbr.mp3',
    'audio/cap.mp3'
  ];

  let currentSong = 0;
  
  const artistTitle = [
    {title: 'all',
     artist: 'Gains' ,
    },
    {title: 'anbr',
     artist: 'Leoo' ,
    },
    {title: 'clocks',
     artist: 'Coldplay',
    },
  ]

  const audioElement = new Audio();
  audioElement.src = songList[currentSong];
  audioElement.load();
  
  const songTitle = document.getElementById('song-title');
  const songArtist = document.getElementById('song-artist');

  function songInfo() {
    songTitle.textContent = artistTitle[currentSong].title; 
  }

  

  const playButton = document.getElementById('playButton');
  const skipButton = document.getElementById('skipButton');
  const mainPlayButton = document.getElementById('mainPlayButton');

  
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

  mainPlayButton.addEventListener('click', function() {
    if (audioElement.paused) {
        audioElement.play();
        mainPlayButton.textContent = 'PAUSE';
        // mainPlayButton.classList.remove('bi-play-fill');
        // mainPlayButton.classList.add('bi-pause-fill');
    } else {
        audioElement.pause();
        mainPlayButton.textContent = 'PLAY';

        // mainPlayButton.classList.remove('bi-pause-fill');
        // mainPlayButton.classList.add('bi-play-fill');
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
    songInfo(); 
    
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


const progressBar = document.getElementById('progressBar');
const bar = document.getElementById('bar');


audioElement.addEventListener('timeupdate', function() {
  const progress = audioElement.currentTime / audioElement.duration;
  progressBar.style.width = (progress * 100) + '%';
});

progressBar.addEventListener('click', function(event) {
    const progress = (event.clientX - this.offsetLeft) / this.offsetWidth;
    audioElement.currentTime = progress * audioElement.duration;
  });
  

  audioElement.addEventListener('durationchange', function() {
    const progressPercent = (currentTime / duration) * 100; 
    // progressBar.style.width = '0%';
    progressBar.style.width = `${progressPercent}%`;
  });


function clickProgress(e) {
  const width = bar.clientWidth;
  const clickX = e.offsetX; 
  const duration = audioElement.duration; 

audioElement.currentTime = (clickX / width) * duration; 

}


bar.addEventListener('click', clickProgress)