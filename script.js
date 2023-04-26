console.log("Welcome to Phoenix!");

let songIndex=0;
let audioElement=new Audio('1.mp3');
let iconPlay = document.getElementById('icon2');
let myProgressBar =document.getElementById('MyProgressBar');
let beats=document.getElementById('beats');
let songItems=Array.from(document.getElementsByClassName('songItem'));
let currsongname=document.getElementById('displayBottom');

let songs=[
    {songname:"Let me Love you",filepath:"1.mp3",coverpath:"https://i.scdn.co/image/ab67616d0000b273212d776c31027c511f0ee3bc"},
    {songname:"Teeth",filepath:"2.mp3",coverpath:"https://upload.wikimedia.org/wikipedia/en/d/da/5_Seconds_of_Summer_-_Teeth.png"},
    {songname:"Am I wrong",filepath:"3.mp3",coverpath:"https://a10.gaanacdn.com/images/albums/20/209920/crop_480x480_209920.jpg"},
    {songname:"I ain't worried",filepath:"4.mp3",coverpath:"https://upload.wikimedia.org/wikipedia/en/c/cf/I_Ain%27t_Worried_-_OneRepublic.jpg"},
    {songname:"YoungBlood",filepath:"5.mp3",coverpath:"https://i0.wp.com/about-the-noise.com/wp-content/uploads/2021/06/81r0JP4fFL._SL1500_.jpg?fit=1500%2C1488&ssl=1"},
    {songname:"Gone Gone Gone",filepath:"6.mp3",coverpath:"https://c.saavncdn.com/743/The-World-From-The-Side-Of-The-Moon-2012-500x500.jpg"},
    {songname:"Heat Waves",filepath:"7.mp3",coverpath:"https://i.scdn.co/image/ab67616d0000b2739e495fb707973f3390850eea"},
    {songname:"Happier",filepath:"8.mp3",coverpath:"https://upload.wikimedia.org/wikipedia/en/e/e5/Marshmello_and_Bastille_Happier.png"},
    {songname:"See You Again",filepath:"9.mp3",coverpath:"https://i.scdn.co/image/ab67616d0000b2734e5df11b17b2727da2b718d8"},
    {songname:"Treat You Better",filepath:"10.mp3",coverpath:"https://i.scdn.co/image/ab67616d0000b2731376b4b16f4bfcba02dc571b"},
    {songname:"Maps",filepath:"11.mp3",coverpath:"https://cdns-images.dzcdn.net/images/cover/f0a1d4442389bcd7919a7054f8c0b785/500x500.jpg"},
    {songname:"Stitches",filepath:"12.mp3",coverpath:"https://i.scdn.co/image/ab67616d0000b2731376b4b16f4bfcba02dc571b"},
    {songname:"As it was",filepath:"13.mp3",coverpath:"https://wallpaperaccess.com/full/5699201.jpg"},
    {songname:"House of Memories",filepath:"14.mp3",coverpath:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg7wSe__jKdPJKdMXNVIwRvZ6XZhD437S_NTFIt3Sp_Q&usqp=CAU&ec=48665701"},
    {songname:"Sing for the moment",filepath:"15.mp3",coverpath:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdl1niFFEKqS6tznHo6LT2PRPGoi0gD7yFpGnzHUWUgg&usqp=CAU&ec=48665701"},
    {songname:"Peaches",filepath:"16.mp3",coverpath:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYgAD262lQNGciogl806raiYA6y-OiU5L_yQabKcA6Lg&usqp=CAU&ec=48665701"},
    {songname:"Summer Feelings",filepath:"17.mp3",coverpath:"https://i.scdn.co/image/ab67616d0000b2738733aeff08abb0822948bbb0"},
    {songname:"Hymn for the Weekend",filepath:"18.mp3",coverpath:"https://upload.wikimedia.org/wikipedia/en/e/e5/Coldplay%2C_Hymn_for_the_Weekend%2C_Artwork.jpg"},
    {songname:"Girls like you",filepath:"19.mp3",coverpath:"https://i1.sndcdn.com/artworks-000356098176-bvyd7z-t500x500.jpg"},
    {songname:"There is nothing holding me back",filepath:"20.mp3",coverpath:"https://i.scdn.co/image/ab67616d0000b2731376b4b16f4bfcba02dc571b"}
    
]
songItems.forEach((element,i)=>{
    element.getElementsByTagName("img")[0].src= songs[i].coverpath;
    element.getElementsByClassName("songName")[0].innerText=songs[i].songname;

})

//audioElement.play();

//add pause and play
iconPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        console.log("play");
        audioElement.play();
        document.body.style.backgroundImage="url(https://media.tenor.com/b3pZMIW1I-UAAAAC/audio-beat.gif)";
        icon2.classList.remove('fa-circle-play');
        icon2.classList.add('fa-circle-pause');
        e=document.getElementById(songIndex);
        console.log("The e value when you press previous is shown below");
        console.log(e);
        makeAllplay();
        e.classList.remove('fa-circle-play');
        e.classList.add('fa-circle-pause');
        beats.style.opacity=1;
    }
    else{
        console.log("pause");
        audioElement.pause();
        e=document.getElementById(songIndex);
        console.log("The e value when you press previous is shown below");
        console.log(e);
        document.body.style.backgroundImage="url(https://images.pexels.com/photos/396547/pexels-photo-396547.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500)";
        makeAllplay();
        e.classList.remove('fa-circle-pause');
        e.classList.add('fa-circle-play');
        icon2.classList.remove('fa-circle-pause');
        icon2.classList.add('fa-circle-play');
        beats.style.opacity=0;
        
    } 
})

//Listen to songs
audioElement.addEventListener('timeupdate',()=>{
    //update seek bar
    if(audioElement.duration == audioElement.currentTime)
    {
        //change in code
        e=document.getElementById(songIndex);
        makeAllplay();
        e.classList.remove('fa-circle-pause');
        e.classList.add('fa-circle-play');
        icon2.classList.remove('fa-circle-pause');
        icon2.classList.add('fa-circle-play');
        if(songIndex==19){
            songIndex=0;
        }
        else{
            songIndex+=1;
        }
        e=document.getElementById(songIndex);
        makeAllplay();
        currsongname.innerText=songs[songIndex].songname;
        audioElement.src=(songIndex+1)+'.mp3';
        audioElement.play();
        e.classList.remove('fa-circle-play');
        e.classList.add('fa-circle-pause');
        icon2.classList.remove('fa-circle-play');
        icon2.classList.add('fa-circle-pause');

        //change in code end

        /*e=document.getElementById(songIndex);
        console.log("The e value when you press previous is shown below");
        console.log(e);
        makeAllplay();
        document.body.style.backgroundImage="url(https://images.pexels.com/photos/396547/pexels-photo-396547.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500)";
        e.classList.remove('fa-circle-pause');
        e.classList.add('fa-circle-play');
        icon2.classList.remove('fa-circle-pause');
        icon2.classList.add('fa-circle-play');*/
    }
    e=document.getElementById('starttime');
    f=document.getElementById('endtime');
    console.log("start time");
    //console.log(e.innertext);
    let x=audioElement.duration;
    let y=parseInt(x/60);
    let z=parseInt(x%60);
    if(z<10){
        f.innerHTML=y+':0'+z;
    }
    else{
        f.innerHTML=y+':'+z;
    }
    let a=audioElement.currentTime;
    let b=parseInt(a/60);
    let c=parseInt(a%60);
    if(c<10){
        e.innerHTML= b+':0'+c;
    }
    else{
        e.innerHTML=b+':'+c;
    }
    console.log("show innertext");
    console.log(e.innerText);
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100)//calculating the percentage of time done
    myProgressBar.value=progress;
})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=myProgressBar.value * audioElement.duration/100;
})

const makeAllplay = () => {
    const elements = document.getElementsByClassName('songItemPlay');
    if (elements.length > 0) {
      Array.from(elements).forEach((element) => {
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
      })
    }
  }
  
  
  
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        if(audioElement.paused)
        {
            console.log("This is to play anything if the music is paused");
            makeAllplay();
            songIndex=parseInt(e.target.id);
            console.log(songIndex);
            e.target.classList.remove('fa-circle-play');
            e.target.classList.add('fa-circle-pause');
            audioElement.currentTime=0;
            audioElement.src=(songIndex+1)+'.mp3';
            console.log(audioElement.src);
            currsongname.innerText=songs[songIndex].songname;
            audioElement.play();
            document.body.style.backgroundImage = "url(https://media.tenor.com/b3pZMIW1I-UAAAAC/audio-beat.gif)";
            icon2.classList.remove('fa-circle-play');
            icon2.classList.add('fa-circle-pause');
            beats.style.opacity=1;
        }
        else if(audioElement.play && e.target.getAttribute("class") === 'fa-regular songItemPlay fa-circle-pause')
        {
            console.log("This is to pause the particular song you have clicked ");
            makeAllplay();
            console.log(songIndex);
            e.target.classList.remove('fa-circle-pause');
            e.target.classList.add('fa-circle-play')
            icon2.classList.remove('fa-circle-pause');
            icon2.classList.add('fa-circle-play');
            audioElement.pause();
            document.body.style.backgroundImage="url(https://images.pexels.com/photos/396547/pexels-photo-396547.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500)";
            beats.style.opacity=0;
        }
        else if(audioElement.play && e.target.getAttribute("class") === 'fa-regular songItemPlay fa-circle-play')
        {
            console.log("This is to play another song ");
            makeAllplay();
            songIndex=parseInt(e.target.id);
            console.log(songIndex);
            e.target.classList.remove('fa-circle-play')
            e.target.classList.add('fa-circle-pause');
            icon2.classList.remove('fa-circle-play');
            icon2.classList.add('fa-circle-pause');
            audioElement.currentTime=0;
            audioElement.src=(songIndex+1)+".mp3";
            currsongname.innerText=songs[songIndex].songname;
            audioElement.play();
            document.body.style.backgroundImage = "url(https://media.tenor.com/b3pZMIW1I-UAAAAC/audio-beat.gif)";
            beats.style.opacity=1;
            

        }
            

    })
})

document.getElementById('icon1').addEventListener('click',(e)=>{
    songIndex=songIndex-1;
    if(songIndex== -1)
    {
        songIndex=19;
    }
    console.log("Inside previous button block");
    e=document.getElementById(songIndex);
    console.log("The e value when you press previous is shown below");
    console.log(e);
    makeAllplay();
    e.classList.remove('fa-circle-play');
    e.classList.add('fa-circle-pause');
    icon2.classList.remove('fa-circle-play');
    icon2.classList.add('fa-circle-pause');
    currsongname.innerText=songs[songIndex].songname;
    beats.style.opacity=1;
    audioElement.currentTime=0;
    audioElement.src=(songIndex+1)+'.mp3';
    audioElement.play();
    document.body.style.backgroundImage = "url(https://media.tenor.com/b3pZMIW1I-UAAAAC/audio-beat.gif)";
})

document.getElementById('icon3').addEventListener('click',(e)=>{
    songIndex=songIndex+1;
    if(songIndex== 20)
    {
        songIndex=0;
    }

    e=document.getElementById(songIndex);
    console.log("The e value when you press previous is shown below");
    console.log(e);
    makeAllplay();
    e.classList.remove('fa-circle-play');
    e.classList.add('fa-circle-pause');
    icon2.classList.remove('fa-circle-play');
    icon2.classList.add('fa-circle-pause');
   
    currsongname.innerText=songs[songIndex].songname;
    audioElement.currentTime=0;
    audioElement.src=(songIndex+1)+'.mp3';
    audioElement.play();
    document.body.style.backgroundImage = "url(https://media.tenor.com/b3pZMIW1I-UAAAAC/audio-beat.gif)";
})