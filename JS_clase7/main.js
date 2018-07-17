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

function validacion(){
    var formulario = document.getElementById('formulario');

    // valida un campo de texto
    if(formulario.nombre == null || formulario.nombre.value.length == 0 || /^\s+$/.test(formulario.nombre.value)){
        alert("Completa el campo nombre con un formato valido");
        return false;
    }

    // valida un campo de numeros
    if(formulario.edad.value == null || formulario.edad.value.length == 0 || isNaN(formulario.edad.value)){
        alert("Completa el campo edad con un formato valido");
        return false;
    }

    // valida una dirección de correo
    if(formulario.email.value == null || !(/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(formulario.email.value))){
        alert("Completa el campo email con un formato valido");
        return false;
    }

    // valida los radio buttons
    var radios = formulario.querySelectorAll('input[type=radio]');
    var select = false;

    for(var i = 0; i < radios.length; i++){
        if(radios[i].checked){
            select = true;
            break;
        }
    }

    if(!select){
        alert("Selecciona al menos una opción de genero");
        return false;
    }

    //valida un numero de telefono
    if(formulario.telefono.value == null || !(/^\d{9}$/.test(formulario.telefono.value))){
        alert("Completa el campo telefono con un formato valido");
        return false;
    }

    //valida los select
    if(formulario.comuna.selectedIndex == null || formulario.comuna.selectedIndex == 0){
        alert("Debes seleccionar una comuna");
        return false;
    }

    //valida UN checkbox
    if(!formulario.terminos.checked){
        alert("Debes estar de acuerdo con los terminos si quieres enviar el formulario");
        return false;
    }

    //valida especificamente en este ejercicio tres selectores para la fecha
    var dia = formulario.dia.selectedIndex;
    var mes = formulario.mes.selectedIndex;
    var anio = formulario.anio.selectedIndex;

    if(dia == null || dia == 0 && mes == null || mes == 0 && anio == null || anio == 0){
        alert("Debes seleccionar una fecha valida");
        return false;
    } else {
        if(dia == null || dia == 0){
            alert("Debes seleccionar un día");
            return false;
        } else if(mes == null || mes == 0){
            alert("Debes seleccionar un mes");
            return false;
        } else if(anio == null || anio == 0){
            alert("Debes seleccionar un año");
            return false;
        }
    }

    // si ninguna de las condiciones se cumple, entonces se retorna 'true' y se envia el formulario
    alert("formulario enviado");
    return true;
}