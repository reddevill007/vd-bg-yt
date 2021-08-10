const vid = document.getElementById('vid');
const icon = document.getElementById('icon');
const icon2 = document.getElementById('icon2');
const playbtn = document.getElementById('playbtn');
const sound = document.getElementById('sound');

playbtn.onclick = ()=>{
    if(vid.paused){
        vid.play();
        icon.src = "pause.png"
    }

    else{
        vid.pause();
        icon.src = "play.png"
    }
}

sound.onclick = ()=>{
    if(vid.muted == true){
        vid.muted = false;
        icon2.innerHTML = "<i class='fas fa-volume-up'></i>";
    }

    else{
        vid.muted = true;
        icon2.innerHTML = "<i class='fas fa-volume-mute'></i>";
    }
}