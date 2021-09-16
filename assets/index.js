import MediaPlayer from "./MediaPlayer.js";
import AutoPause from "./plugins/AutoPause.js";
import AutoPlay from "./plugins/AutoPlay.js";

const video = document.querySelector("video");
const button = document.querySelector("button");
const muteButton = document.querySelector("#muteButton");

const player = new MediaPlayer({
  el: video,
  plugins: [new AutoPlay(), new AutoPause()],
}); // instanciando el objeto.
button.onclick = () => {
  // cada vez que se de clic al boton el reproductor ejecutara togglePlay()
  player.togglePlay();
};

muteButton.onclick = () => {
  player.toggleMute();
};

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/sw.js").catch((error) => {
    console.log(error.message);
  });
}
