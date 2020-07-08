import MediaPlayer from './MediaPlayer.js';
import AutoPlay from './plugins/AutoPlay.js';
import AutoPause from './plugins/AutoPause.js';

const video = document.querySelector('video');  // querySelector takes as an argument a selector (it could be a label like 'video' or a class .video or an id #video)
const player = new MediaPlayer({ 
    el: video, 
    plugins: [
        new AutoPlay(),
        new AutoPause()
    ]
});

const buttonPlay = document.querySelector('.btnPlay');
const buttonMute = document.querySelector('.btnMute');

buttonPlay.onclick = () => player.togglePlay();
buttonMute.onclick = () => player.toggleMute();

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').catch (error => {
        console.log(error.message);
    })
}