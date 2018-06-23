var btn = document.getElementById('btn');
var input = document.getElementById('input');
var btn2 = document.getElementById('btn2');
var dblClick = document.getElementById('dblClick');
var label = document.getElementById('label');
var form = document.getElementById('form');
var resetForm = document.getElementById('reset');

// evento onBlur
btn.addEventListener('blur', function(){
    alert('Hola Mundo desde onBlur');
});

// evento onChange
input.addEventListener('change', function(){
    console.log(this.value);
});

// evento onClick
btn2.addEventListener('click', function(event){
    event.preventDefault();
    console.info(event);
    input.value = "";
});

resetForm.addEventListener('click', function(a){
    a.preventDefault();
    form.txt.value = "";
    form.texto.value = "";
    form.keyup.value = "";
});

// evento dblClick
dblClick.addEventListener('dblclick', function(){
    console.warn('Esto es un doble click!');
});


// evento onFocus
label.addEventListener('focus', function(){
    document.body.style.backgroundColor = "tomato";
})

// evento keyDown
form.txt.addEventListener('keydown', function(){
    console.log("suelta la tecla (keydown)");
})

// evento keyPress
form.texto.addEventListener('keypress', function(){
    console.log("suelta la tecla (keypress)");
})

// evento keyUp
form.keyup.addEventListener('keyup', function(){
    console.log("suelta la tecla (keyup)");
})