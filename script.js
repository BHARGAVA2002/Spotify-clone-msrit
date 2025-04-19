//Initialize variables
let songIndex=4;
let audioElement=new Audio("songs/4.mp3");
let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar');
let masterSongName=document.getElementById('masterSongName');
let gif=document.getElementById('gif');
let songItems=Array.from(document.getElementsByClassName('songItem'));

let songs=[
    {songName:"Bisilu Kudure", filePath:"songs/1.mp3",coverPath:"covers/1.jpg"},
    {songName:"Nenu Nuvvantu", filePath:"songs/2.mp3",coverPath:"covers/2.jpg"},
    {songName:"Lokiverse", filePath:"songs/3.mp3",coverPath:"covers/3.jpg"},
    {songName:"Hoyna Hoyna", filePath:"songs/4.mp3",coverPath:"covers/4.jpg"},
    {songName:"Ordinary Person", filePath:"songs/5.mp3",coverPath:"covers/5.jpg"},
    {songName:"I am Scared", filePath:"songs/6.mp3",coverPath:"covers/5.jpg"},
    {songName:"Rooba Rooba", filePath:"songs/7.mp3",coverPath:"covers/2.jpg"},
    {songName:"Suvvi Suvvi", filePath:"songs/8.mp3",coverPath:"covers/8.jpg"}
]

/*songItems.forEach((element,i)=>{
    console.log(element,i);
    element.getElementsByTagName('img')[0].src=songs[i].coverPath                           ;
    element.getElementsByClassName('songName')[0].innerHTML=songs[i].songName;
})*/

//Handle play pause
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused||audioElement.currentTime<=0){
        masterSongName.innerText=songs[songIndex-1].songName;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity=0;
    }
})

//Listen to events
audioElement.addEventListener('timeupdate',()=>{
    //Update seekbar
    var progress=parseFloat((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value=progress;
})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=(myProgressBar.value*audioElement.duration)/100;
})

const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        songIndex=parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src='songs/'+songIndex+'.mp3';
        masterSongName.innerText=songs[songIndex-1].songName;
        audioElement.currentTime=0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    })
})

document.getElementById('next').addEventListener('click',()=>{
    songIndex+=1
    if(songIndex==9){
        songIndex=1;
    }
    audioElement.src='songs/'+songIndex+'.mp3';
    masterSongName.innerText=songs[songIndex-1].songName;
        audioElement.currentTime=0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
})

document.getElementById('previous').addEventListener('click',()=>{
    songIndex-=1;
    if(songIndex==0){
        songIndex=8;
    }
    audioElement.src='songs/'+songIndex+'.mp3';
    masterSongName.innerText=songs[songIndex-1].songName;
        audioElement.currentTime=0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
})