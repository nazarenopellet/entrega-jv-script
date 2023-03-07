function convertir()  {
    var valore = parseInt(document.getElementById("valor").value)
    var resultado = 0
    var dolar = 369
    var euro = 210
    if (document.getElementById("uno").checked) {
        resultado = valore / dolar
        alert("el cambio de pesos es: $" + resultado.toFixed(2))
    }

    else if (document.getElementById("dos").checked) {
        resultado = valore / euro
        alert("el cambio de pesos a euro es: $" + resultado.toFixed(2))
    }
    else {
        alert("tienes q completar todos los requerimientos")
    }

}



