let clapSound: HTMLAudioElement;
let kickSound: HTMLAudioElement;

const channel1: any[] = [];

appStart();
function appStart(): void {
document.addEventListener('keypress', onKeyDown);
const btnChannelPlay = document.querySelector('#channel1Play');
btnChannelPlay.addEventListener('click',onChannel1Play);
getAudioElements();

}
function onChannel1Play(): void {
    channel1.forEach(sound=> {
        setTimeout(()=> playSound(sound.key), sound.time)}
    })
}

function getAudioElements(){
    clapSound = document.querySelector('[data-sound="hihat"]');
    kickSound = document.querySelector('[data-sound="tom"]');
}

function onKeyDown(ev: KeyboardEvent): void {
 const key = ev.key ;
 const.time = ev.timeStamp;  
}





document.addEventListener('keypress', onKeyDown);
function onKeyDown(ev: KeyboardEvent); void {
    const key = ev.key;
    const time = ev.timeStamp;


    playSound()
    console.log(ev);
}


function playSound(key: string): VOID {
    const clapSound = document.querySelector('[data')
    clapSound.currentTime = 0
    clapSound.play();


}




