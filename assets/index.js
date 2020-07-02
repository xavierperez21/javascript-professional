import MediaPlayer from './MediaPlayer.js';
import AutoPlay from './plugins/AutoPlay.js';

const video = document.querySelector('video');  // querySelector takes as an argument a selector (it could be a label like 'video' or a class .video or an id #video)
const player = new MediaPlayer({ el: video, plugins: [new AutoPlay()] });

const buttonPlay = document.querySelector('.btnPlay');
const buttonMute = document.querySelector('.btnMute');

buttonPlay.onclick = () => player.togglePlay();
buttonMute.onclick = () => player.toggleMute();