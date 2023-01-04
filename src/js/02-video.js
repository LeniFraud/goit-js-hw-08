import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframeRef = document.querySelector('iframe');
const player = new Player(iframeRef);
const LOCALSTORAGE_KEY = 'videoplayer-current-time';

player.setCurrentTime(localStorage.getItem(LOCALSTORAGE_KEY) || 0);

player.on('timeupdate', throttle(updateCurrentTime, 1000));

function updateCurrentTime(event) {
  localStorage.setItem(LOCALSTORAGE_KEY, event.seconds);
}
