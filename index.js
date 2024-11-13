var jugador1 = prompt('jugador1: piedra, papel, tijera :)');
if (jugador1 !== "piedra" && jugador1 !== "papel" && jugador1 !== "tijera") {
  alert("¡Error!");
} else {
  var jugador2 = prompt('jugador2: piedra, papel, tijera');
  if (jugador2 !== "piedra" && jugador2 !== "papel" && jugador2 !== "tijera") {
    alert("¡Error!");
  } else {
    if (jugador1 === jugador2) {
      alert("Empate");
    } else if (
      (jugador1 === "piedra" && jugador2 === "tijera") || (
        jugador1 === "tijera" && jugador2 === "papel") || (
        jugador1 === "papel" && jugador2 === "piedra")
    ) { alert("jugador1 gana") }
    else {
      alert("jugador2 gana")
    }

  }
}


