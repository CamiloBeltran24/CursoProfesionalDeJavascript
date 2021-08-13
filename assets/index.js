import MediaPlayer from "./MediaPlayer.js";
import AutoPlay from "./plugins/AutoPlay.js";

const video = document.querySelector("video");
const button = document.querySelector("button");
const muteButton = document.querySelector("#muteButton");

const player = new MediaPlayer({ el: video, plugins: [new AutoPlay()] }); // instanciando el objeto.
button.onclick = () => {
  // cada vez que se de clic al boton el reproductor ejecutara togglePlay()
  player.togglePlay();
};

muteButton.onclick = () => {
  player.toggleMute();
};
