function showtime(){
    let h=document.getElementsByClassName("hr")[0];
    let m=document.getElementsByClassName("mn")[0];
    let s=document.getElementsByClassName("ss")[0];

    let time=new Date();
    let hours=time.getHours();
    let minutes=time.getMinutes();
    let seconds=time.getSeconds();

    h.style.transform=`rotate(${30*hours+minutes/2}deg)`;
    m.style.transform=`rotate(${6*minutes}deg)`;
    s.style.transform=`rotate(${6*seconds}deg)`;

    let sound=new Audio("./music/sound.mpeg");
    sound.play();
}
setInterval(showtime,1000);