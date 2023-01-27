const songList = [
    'audio/all.mp3',
    'audio/anbr.mp3',
    'audio/cap.mp3'
  ];

  let currentSong = 0;
  
  const artistTitle = [
    {title: 'Can',
     artist: 'Gains',
     image: 'img/anbr.jpeg'
    },
    {title: 'anbr',
     artist: 'Leoo',
     image: 'img/bruno.jpeg'
    },
    {title: 'clocks',
     artist: 'Coldplay',
     image:'img/swift.jpeg'
    },
  ]

  const audioElement = new Audio();
  audioElement.src = songList[currentSong];
  audioElement.load();
  
  const songTitle = document.getElementById('song-title');
  const songArtist = document.getElementById('song-artist');
  const musicImage = document.getElementById('playing-image');


  function songInfo() {
    songTitle.textContent = artistTitle[currentSong].title; 
    songArtist.textContent = artistTitle[currentSong].artist;
    musicImage.src = artistTitle[currentSong].image; 
  }
 
  // function songImage() {
  //   musicImage.classList.add.artistImage[currentSong];
  // } 

  const playButton = document.getElementById('playButton');
  const skipButton = document.getElementById('skipButton');
  const mainPlayButton = document.getElementById('mainPlayButton');
  let wave = document.getElementsByClassName('wave')[0];

  
  playButton.addEventListener('click', function() {
    if (audioElement.paused) {
        audioElement.play();
        playButton.classList.remove('bi-play-fill');
        playButton.classList.add('bi-pause-fill');
        wave.classList.add('active');
    } else {
        audioElement.pause();
        playButton.classList.remove('bi-pause-fill');
        playButton.classList.add('bi-play-fill');
        wave.classList.remove('active');
    }
  });

  mainPlayButton.addEventListener('click', function() {
    if (audioElement.paused) {
        audioElement.play();
        mainPlayButton.textContent = 'PAUSE';
        playButton.classList.remove('bi-play-fill');
        playButton.classList.add('bi-pause-fill');
        wave.classList.add('active');
    } else {
        audioElement.pause();
        mainPlayButton.textContent = 'PLAY';
        playButton.classList.remove('bi-pause-fill');
        playButton.classList.add('bi-play-fill');
        wave.classList.remove('active');
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

bar.addEventListener('click', clickProgress);

document.querySelector("button");




