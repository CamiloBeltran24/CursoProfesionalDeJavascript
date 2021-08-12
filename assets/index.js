import MediaPlayer from "./MediaPlayer.js";

const video = document.querySelector("video");
const button = document.querySelector("button");

const player = new MediaPlayer({ el: video }); // instanciando el objeto.
button.onclick = () => {
  // cada vez que se de clic al boton el reproductor ejecutara togglePlay()
  player.togglePlay();
};
