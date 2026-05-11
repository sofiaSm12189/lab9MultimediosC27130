import "./components/PosterCampaign.js";
import "./components/DirectionPoster.js";

const poster1 = document.querySelector("#poster1");

poster1.titulo1 = "¡LA SEDE";
poster1.titulo2 = "TE ACOMPAÑA!";
poster1.frase = "El respeto no se negocia";
poster1.accion = "¡Pará ya de acosar!";
poster1.imagen = "./assets/images/imagen1.png";

const poster2 = document.querySelector("#poster2");

poster2.ubicaciones = [
  "Aulas 5, 6, 7",
  "Apoyo Informático",
  "Servidores",
  "Laboratorio 1 y 2",
  "Coordinación Informática Empresarial",
];
