console.log("Welcome to Spotify!");

//Initialize the variables
let songIndex = 0 ;
let audioElement = new Audio('songs/wontletgo.mp3');
let masterPlay = document.getElementById("masterPlay");
let previous = document.getElementById("previous");
let next =  document.getElementById("next");
let myProgressBar = document.getElementById("progressBar");
let gif=document.getElementById('gif');
let songNsinger = document.getElementById('songNsinger');

let songs =[
    {songName: "Perfect - Ed Sheeran", filePath: "songs/perfect.mp3", coverPath: "download.jpg"},
    {songName: "Saiyyan - Kailash Kher", filePath: "songs/saiyyan.mp3", coverPath: "saiyyan.jpg"},
    {songName: "Say You Won't Let Go - James Arthur", filePath: "songs/wontletgo.mp3", coverPath: "wontletgo.jpg"},
    {songName: "Levitating - Dua Lipa", filePath: "songs/levitating.mp3", coverPath: "levitating.jpg"},
    {songName: "Maa - Shankar Ehsaan Loy", filePath: "songs/maa.mp3", coverPath: "maa.jpg"},
    {songName: "Night Changes - One Direction", filePath: "songs/nightchanges.mp3", coverPath: "nightchanges.jpg"}
];

//audioElement.play();
//Handle play/pause clicks

masterPlay.addEventListener('click', ()=>{
if(audioElement.paused || audioElement.currentTime<=0){
    
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
    gif.style.opacity=1;
}
else{
    audioElement.pause();
    masterPlay.classList.remove('fa-circle-pause');
    masterPlay.classList.add('fa-circle-play');
    gif.style.opacity=0;
}
});
//Listen to events

//timeupdate to change time

audioElement.addEventListener('timeupdate', ()=>{
console.log('timeupdate');
//Update Seekbar
let progress = parseInt(((audioElement.currentTime)/(audioElement.duration))*100);
console.log(progress);
myProgressBar.value=progress;
});


myProgressBar.addEventListener('change', ()=>{
audioElement.currentTime = ((myProgressBar.value) * (audioElement.duration))/(100) ;
})
 

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-circle-play');
})
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        makeAllPlays();
        songIndex=parseInt(e.target.id);
        songNsinger.innerText=songs[songIndex].songName;
        

    e.target.classList.remove('fa-circle-play');
    e.target.classList.add('fa-pause-circle');
    audioElement.src='songs/'+songIndex+'.mp3';
    audioElement.currentTime=0;
    audioElement.play();
    gif.style.opacity=1;
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-pause-circle');
    })
})

next.addEventListener('click', ()=>{
    if(songIndex>=5){
       songIndex=0;
    }
    else{
        songIndex+=1;
}

audioElement.src='songs/'+songIndex+'.mp3';
songNsinger.innerText=songs[songIndex].songName;
audioElement.currentTime=0;
audioElement.play();
gif.style.opacity=1;
masterPlay.classList.remove('fa-circle-play');
masterPlay.classList.add('fa-pause-circle');
})

previous.addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex=5;
    }
    else{
        songIndex-= 1; 
}
audioElement.src='songs/'+songIndex+'.mp3';
songNsinger.innerText=songs[songIndex].songName;
audioElement.currentTime=0;
audioElement.play();
gif.style.opacity=1;
masterPlay.classList.remove('fa-circle-play');
masterPlay.classList.add('fa-pause-circle');
})





