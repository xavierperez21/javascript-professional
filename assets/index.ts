import MediaPlayer from './MediaPlayer';
import AutoPlay from './plugins/AutoPlay';
import AutoPause from './plugins/AutoPause';
import Ads from './plugins/Ads';

const video = document.querySelector('video');  // querySelector takes as an argument a selector (it could be a label like 'video' or a class .video or an id #video)
const player = new MediaPlayer({ 
    el: video, 
    plugins: [
        new AutoPlay(),
        new AutoPause(),
        new Ads(),
    ]
});

const buttonPlay: HTMLElement = document.querySelector('.btnPlay');
const buttonMute: HTMLElement = document.querySelector('.btnMute');

buttonPlay.onclick = () => player.togglePlay();
buttonMute.onclick = () => player.toggleMute();

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').catch (error => {
        console.log(error.message);
    })
}