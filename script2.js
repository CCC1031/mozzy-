
// document.querySelector('.one').addEventListener('click', function() {
//     if (music.paused || music.currentTime <=0) {
//         music.play();
//     }
//     else {
//         music.pause();
//     }
// })

// const song = new Audio('audio/clocks.mp3');
// // document.getElementById('one').play();

// let play = document.getElementById('one'); 

// let wave = document.getElementsByClassName('wave')[0];
// It is not playing and pausing 
// play.addEventListener('click', ()=>{
//     //  if (condition) {
//         if (song.paused || song.currentTime <=0) {
//             song.play();
//             play.classList.remove('bi-play-fill');
//             play.classList.add('bi-pause-fill');
//             wave.classList.add('active');
//         } 
//         else {
//             song.pause();
//             play.classList.add('bi-play-fill');
//             play.classList.remove('bi-pause-fill');
//             wave.classList.remove('active');
//         }
// })
// const playBtn = document.querySelector('one')
// const audio = document.querySelector('audio')
// const musicContainer = document.querySelector('img-play')

// function playSong() {
//     musicContainer.classList.add('play');
//     playBtn.querySelector('bi').classList.remove('bi-play-fill');
//     playBtn.querySelector('bi').classList.add('bi-pause-fill');  
    
//     audio.play();
// }

// //Event Listeners
// playBtn.addEventListener('click', () => {
//     const isPlaying = musicContainer.classList.contains('play');

//     if(isPlaying){
//         pausSong()
//     } 
//     else {
//         playSong()
//     }
// })



// const music = new Audio('audio/all.mp3'); 

// let plays = document.getElementById('play'); 

// play.addEventListener('click', ()=>{
//         if (music.paused || music.currentTime <=0) {
//             music.play();
//             plays.classList.remove('bi-play-fill');
//             plays.classList.add('bi-pause-fill');
//             wave.classList.add('active');
//         } 
//         else {
//             music.pause();
//             plays.classList.add('bi-play-fill');
//             plays.classList.remove('bi-pause-fill');
//             wave.classList.remove('active');
//         }
// });


// const song = new Audio('audio/clocks.mp3'); 

// let play = document.getElementById('one'); 
// let wave = document.getElementsByClassName('wave')[0];

// play.addEventListener('click', ()=>{
//         if (song.paused || song.currentTime <=0) {
//             song.play();
//             play.classList.remove('bi-play-circle-fill');
//             play.classList.add('bi-pause-circle-fill');
//             wave.classList.add('active');
//         } 
//         else {
//             song.pause();
//             play.classList.add('bi-play-circle-fill');
//             play.classList.remove('bi-pause-circle-fill');
//             wave.classList.remove('active');
//         }
// });

// const prevBtn = document.getElementById('prev');
// const playBtn = document.getElementById('play');


//Song titles
// const songs = ['all', 'anbr', 'Cap', 'clocks'];

//Track of song
// let songIndex = 2; 

//Initially load song detail in DOM
// loadSong(songs[songIndex]);

//update song details  last line (cover.src = `images/${song}.jpg)
// function loadSong(song) {
//     title.innerText = song; 
//     Audio.src = `auido/${song}.mp3`;
// }

// play song
// function playSong() {
//     audio.play();
// }



// playBtn.addEventListener('click', ()=>{
//             if ('') {
//                 pauseSong();
//             } 
//             else {
//                 playSong();
//             }
//     });




//Previous Song 
// function prevSong() {
//     songIndex--;

//     if(songIndex < 0) {
//         songIndex = songs.length - 1;
//     }
//     loadSong(songs[songIndex]);

//     playSong();

// }

//change song 
// prevBtn.addEventListener('click', prevSong);
// nextBtn.addEventListener('click', nextSong);

let audio = document.getElementById('audio');
let play = document.getElementById('play');
let count = 0; 

function playPause() {
    if(count == 0) {
        count = 1; 
        audio.play(); 
        play.className = "bi bi-pause-fill";
    } else {
        count = 0; 
        audio.pause();
        play.className = "bi bi-play-fill";

    }
}