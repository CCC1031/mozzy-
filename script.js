const music = new Audio('audio/wonder.mp3'); 
// music.play();
// create Array

const songs = [
   { 
    id: '1',
    songName: `Clocks <br> 
    <div class="subtitle">Coldplay</div>`,
    poster: "img/cold2.png"
   },
   { 
    id: '2',
   songName: `Choosing You <br> 
   <div class="subtitle">BalloonPlanet</div>`,
   poster: "img/balloon.jpeg"
   },
   {
   id: '3',
   songName: `Radio Up <br> 
   <div class="subtitle">Paper Planes</div>`,
   poster: "img/Paper.jpeg"
   },
   {
    id: '4',
    songName: `Forgive <br> 
    <div class="subtitle">Sero</div>`,
    poster: "img/sero.jpeg"
    },
    {
    id: '5',
    songName: `Born Again <br> 
    <div class="subtitle">Michael Shynes</div>`,
    poster: "img/michael.jpeg"
    },
    {
    id: '6',
    songName: `Move You <br> 
    <div class="subtitle">Sero</div>`,
    poster: "img/sero1.jpeg"
    },
    {
    id: '7',
    songName: `Perfect <br> 
    <div class="subtitle">Ed Sheeran</div>`,
    poster: "img/ed.jpeg"
    },
    {
    id: '8',
    songName: `24 Karrot <br> 
    <div class="subtitle">Bruno Mars</div>`,
    poster: "img/bruno.jpeg"
    },
    {
    id: '9',
    songName: `Starry Eyed <br> 
    <div class="subtitle">Jane & The Boyr</div>`,
    poster: "img/jane.jpeg"
    },
    {
    id: '10',
    songName: `Secrects <br> 
    <div class="subtitle">Alicia Keys</div>`,
    poster: "img/keys.jpeg"
    },
    {
    id: '11',
    songName: `Rooftops <br> 
    <div class="subtitle">Wonderland</div>`,
    poster: "img/wonder.jpeg"
    },
    {
    id: '12',
    songName: `Sneakers <br> 
    <div class="subtitle">Aves</div>`,
    poster: "img/aves.jpeg"
    },
    {
    id: '13',
    songName: `Against All Odds <br> 
    <div class="subtitle">Kutiman</div>`,
    poster: "img/kut.jpeg"
    },
    {
    id: '14',
    songName: `Season Finale <br> 
    <div class="subtitle">Beò</div>`,
    poster: "img/beo.jpeg"
    },
    {
    id: '15',
    songName: `Continent  <br> 
    <div class="subtitle">Alan Walker</div>`,
    poster: "img/anbr.jpeg"
    }
]

Array.from(document.getElementsByClassName('songitem')) .forEach((element, i) => {
    element.getElementsByTagName('img')[0] .src = songs[i] .poster;
    element.getElementsByTagName('h5')[0] .innerHTML = songs[i].songName;
});

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

const makeallPlay = () => {
    Array.from(document.getElementsByClassName('playlistPlay')).forEach((element)=>{
           element.classList.add('bi-play-circle-fill');
           element.classList.remove('bi-pause-circle-fill');
    })
}

let index = 0; 
let song_image = document.getElementById('song_image');
let song_title = document.getElementById('song_title');

Array.from(document.getElementsByClassName('playlistPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
       index = e.target.id;
       makeallPlay();
       e.target.classList.remove('bi-play-circle-fill');
       e.target.classList.add('bi-pause-circle-fill');
       music.src = `audio/${index}.mp3`;
       music.play();
    })
})

