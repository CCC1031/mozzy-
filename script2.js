const prevBtn = document.getElementById('prev');
// const play = document.getElementById('play');
const wave = document.getElementById('wave');
const cover = document.getElementById('playing_image');
const title = document.getElementById('song-title');
const audio  = document.getElementById('audio');
// const music = play(`audio/${audio}`); 
const music = new Audio('audio/clocks.mp3'); 


// let play = document.getElementById('play'); 



//Song titles
const songs = ['all', 'anbr', 'cap', 'clocks'];

//Track of song
let songIndex = 0; 

//Initially load song detail in DOM
loadSong(songs[songIndex]);

// play song


// let wave = document.getElementsByClassName('wave')[0];


play.addEventListener('click', ()=> {
    if(music.paused) {
        music.play(); 
        play.classList.remove('bi-play-fill');
        play.classList.add('bi-pause-fill');
        wave.classList.add('active');
    }
    else {
        music.pause(); 
        play.classList.remove('bi-pause-fill');
        play.classList.add('bi-play-fill');
        wave.classList.remove('active');
    }

})

prevBtn.addEventListener('click', ()=> {

    if(songIndex < 0){
        songIndex = songs.length - 1;
    }

    loadSong(songs[songIndex]); 

    music.play(); 
})


// function prevSong() {
//     songIndex--; 


//update song details  last line (cover.src = `images/${song}.jpg)
function loadSong(song) {
    title.innerText = song; 
    audio.src = `auido/${song}}.mp3`;
}

// playBtn.addEventListener("click", () => {
//     const playing = wave.classList.contains('active');

//     if(playing) {
//         pauseSong();
//     } else {
//         playSong();
//     }
// })




// const music = new Audio('audio/clocks.mp3'); 












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

// let audio = document.getElementById('audio');
// let play = document.getElementById('play');
// let count = 0; 

// function playPause() {
//     if(count == 0) {
//         count = 1; 
//         audio.play(); 
//         play.className = "bi bi-pause-fill";
//     } else {
//         count = 0; 
//         audio.pause();
//         play.className = "bi bi-play-fill";

//     }
// }

// let audio2 = document.getElementById('audio2');
// let next = document.getElementById('next');

// function next() {
//     if(count == 0) {
//         count = 1; 
//         audio2.play(); 
//     }
// }






// document.querySelector('.one').addEventListener('click', function() {
//     if (music.paused || music.currentTime <=0) {
//         music.play();
//     }
//     else {
//         music.pause();
//     }
// })

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

