import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframeRef = document.querySelector('iframe');
const player = new Player(iframeRef);
const LOCALSTORAGE_KEY = 'videoplayer-current-time';

getCurrentTime();

player
  .setCurrentTime(getCurrentTime())
  .then(function (seconds) {
    // seconds = the actual time that the player seeked to
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        // the time was less than 0 or greater than the video’s duration
        break;
      default:
        // some other error occurred
        break;
    }
  });

player.on('timeupdate', throttle(updateCurrentTime, 1000));

function getCurrentTime() {
  return Number(localStorage.getItem(LOCALSTORAGE_KEY)) || 0;
}

function updateCurrentTime(event) {
  localStorage.setItem(LOCALSTORAGE_KEY, event.seconds);
}
