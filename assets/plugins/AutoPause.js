// Sirve para observar elementos y si cruzan un umbral que nosotros definimos nos lo va a notificar para tomar acción.
// El umbral se define por el porcentaje que tiene intersección con el viewport, con la parte visible de nuestra página.
// ===================         Intersection Observer
/* 
Para crear un intersercionObserver debemos instanciarlo  con "new IntersectionObserver", intersection observer recibe como parametros
un handler y un objeto config dentro de este objetyo config debemos especificar el umbral o threshold, threshold especifica es porcdentaje del elemeneto visible con respecto al contenedor
*/
class AutoPause {
  constructor() {
    this.threshold = 0.25;
    this.handlerIntersection = this.handlerIntersection.bind(this);
    this.handlerVisibilityChange = this.handlerVisibilityChange.bind(this);
  }
  run(player) {
    this.player = player;
    const observer = new IntersectionObserver(this.handlerIntersection, {
      //observer es una instancia de internsectionObserver
      threshold: this.threshold,
    }); //this.handlerIntersection hace alucion al metodo handlerIntersection de esta misma clase.
    observer.observe(this.player.media);

    document.addEventListener("visibilitychange", this.handlerVisibilityChange);
  }
  handlerIntersection(entries) {
    const entry = entries[0];

    const isVisible = entry.intersectionRatio >= this.threshold;
    if (isVisible) {
      this.player.play();
    } else {
      this.player.pause();
    }
  }
  handlerVisibilityChange() {
    const isVisible = document.visibilityState === "visible";
    if (isVisible) {
      this.player.play();
    } else {
      this.player.pause();
    }
  }
}

export default AutoPause;
