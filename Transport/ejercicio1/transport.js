var distancia = prompt("Entra la distanica por favor");



    if (distancia <= 1000){
        alert('La distancia es ' + distancia + '. Vete a pie.');
    }
    else if (distancia > 1000 && distancia <= 10000){
        alert('La distancia es ' + distancia + '. Vete a bicicleta.');
    }
    else if (distancia > 10000 && distancia <= 30000){
        alert('La distancia es ' + distancia + '. Toma el colectivo');
    }
    else if (distancia > 30000 && distancia <= 100000){
        alert('La distancia es ' + distancia + '. Enciende tu auto personal.');
    }
    else{
        alert('La distancia es ' + distancia + '. Comprate un billete de avión.');
    }
