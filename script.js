const title = document.getElementById('title')
const artist = document.getElementById('artist')
const music = document.querySelector("audio")

const currentTimeEl = document.getElementById('current-time')
const durationEl = document.getElementById('duration')
const proggress = document.getElementById('progress')
const progressContainer = document.getElementById('progress-container')

//Cotrol icons
const prevBtn = document.getElementById('prev')
const playBtn = document.getElementById('play')
const nextbtn = document.getElementById('next')

//MUSIC OBJECT
const songs = [
    {
        name:'ibolipa-1',
        displayName:'Dom dom kursunu',
        artist:'Ibolipa'
    },
    {
        name:'israil-1',
        displayName:'Ay Cemo',
        artist:'Israil Memmedov'
    },
    {
        name:'maral-1',
        displayName:'Alehndro',
        artist:'Maral Tahirqizi'
    },
    {
        name:'uzeyir-1',
        displayName:'Mene gel',
        artist:'Uzeyir Mehdizade'
    }
]
// ?
let isPlaying = false

function playSong() {
    isPlaying = true
    playBtn.classList.replace('fa-play', 'fa-pause')
    playBtn.setAttribute('title', 'Pause')
    music.play()
}
function pauseSong() {
    isPlaying = false
    playBtn.classList.replace('fa-pause', 'fa-play')
    playBtn.setAttribute('title', 'Play')
    music.pause()
}

//CALLBACK
playBtn.addEventListener('click',() => (isPlaying ? pauseSong() : playSong()) )

//FAKE DB - parametrli funksiyalar
function loadSong(mahni) {
    title.textContent = mahni.displayName
    artist.textContent = mahni.artist
    music.src = `./music/${mahni.name}.mp3`
}

let songIndex = 0
function prevSong() {
    //DECREMENT--
    //INCREMENT--
    // songIndex = songIndex -1
    songIndex--
    if(songIndex < 0) {
        songIndex = songs.length - 1
    }
    loadSong(songs[songIndex])
    playSong()
}
function nextSong() {
    //DECREMENT--
    //INCREMENT--
    // songIndex = songIndex -1
    songIndex++
    if(songIndex > songs.length - 1) {
        songIndex = 0
    }
    loadSong(songs[songIndex])
    playSong()
}
prevBtn.addEventListener('click', prevSong)
nextbtn.addEventListener('click', nextSong)