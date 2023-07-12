function calcularPromedio() {
    var nota1 = parseInt(document.getElementById("nota1").value);
    var nota2 = parseInt(document.getElementById("nota2").value);
    var nota3 = parseInt(document.getElementById("nota3").value);
    var resultado = document.getElementById("resultado");

    if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
        resultado.innerText = "Ingresa notas válidas.";
        return;
    }

    var promedio = (nota1 + nota2 + nota3) / 3;

    switch (true) {
        case (promedio >= 90 && promedio <= 100):
            resultado.innerText = "Promedio: " + promedio.toFixed(2) + " - Aprobado (Excelente)";
            break;
        case (promedio >= 80 && promedio < 90):
            resultado.innerText = "Promedio: " + promedio.toFixed(2) + " - Aprobado (Muy Bueno)";
            break;
        case (promedio >= 70 && promedio < 80):
            resultado.innerText = "Promedio: " + promedio.toFixed(2) + " - Aprobado (Bueno)";
            break;
        case (promedio >= 60 && promedio < 70):
            resultado.innerText = "Promedio: " + promedio.toFixed(2) + " - Aprobado (Regular)";
            break;
        default:
            resultado.innerText = "Promedio: " + promedio.toFixed(2) + " - Reprobado";
        break;
}
}