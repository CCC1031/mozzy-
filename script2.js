
// document.querySelector('.one').addEventListener('click', function() {
//     if (music.paused || music.currentTime <=0) {
//         music.play();
//     }
// })

// document.getElementById('audio1').play();
let music = new Audio('audio/wonder.mp3');
let play = document.getElementById('play'); 
let wave = document.getElementsByClassName('wave')[0];
// It is not playing and pausing 
play.addEventListener('click', ()=>{
     // if (condition) {
        if (music.paused || music.currentTime <=0) {
            music.play();
            play.classList.remove('bi-play-fill');
            play.classList.add('bi-pause-fill');
            wave.classList.add('active');
        } 
        else {
            music.pause();
            play.classList.add('bi-play-fill');
            play.classList.remove('bi-pause-fill');
            wave.classList.remove('active');
        }
})

