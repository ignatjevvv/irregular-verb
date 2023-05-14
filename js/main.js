'use strict';

const audioLink = document.querySelectorAll('a');
const audio = new Audio();

audio.addEventListener('loadedmetadata', e => {
  let ms = audio.duration;
});

let totalLinkPlay;

audioLink.forEach(item => {
  item.addEventListener('click', e => {
    play(item.attributes[0].nodeValue, item);
    totalLinkPlay = item.attributes[0].nodeValue;
  });
});

function play(src, item) {

  if (totalLinkPlay === src) {
    audio.paused ? item.classList.add('paused') : item.classList.remove('paused');
    audio.paused ? audio.play() : audio.pause();
  } else {

    audioLink.forEach(item => {
      item.classList.remove('paused');
    });

    audio.src = src;
    audio.play();
    item.classList.add('paused');

    audio.addEventListener('ended', (e) => {
      item.classList.remove('paused');
    });
  }
}

// function repeadListWord(ms) {
//     // setTimeout(() => {play('audio/begin.mp3');}, 5000);
//     setTimeout(() => {alert(ms);}, 5000);
// }