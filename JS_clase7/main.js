document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('formulario');
    var dia = form.dia;
    var mes = form.mes;
    var anio = form.anio;
    var meses = [
        "Enero",
        "Febrero",
        "Marzo",
        "Abril",
        "Mayo",
        "Junio",
        "Julio",
        "Agosto",
        "Septiembre",
        "Octubre",
        "Noviembre",
        "Diciembre"
    ];

    for (var i = 1; i <= 31; i++) {
        var optionDia = document.createElement('option');
        optionDia.value = i;
        optionDia.innerText = i;
        dia.appendChild(optionDia);
    }

    for (var i = 0; i < meses.length; i++) {
        var optionMes = document.createElement('option');
        optionMes.value = i;
        optionMes.innerText = meses[i];
        mes.appendChild(optionMes);
    }

    for(var i = 2018; i >= 1970; i--){
        var optionAnio = document.createElement('option');
        optionAnio.value = i;
        optionAnio.innerText = i;
        anio.appendChild(optionAnio);
    }
});