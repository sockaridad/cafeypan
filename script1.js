function showAlert(){
    alert('¡Hola, esta es una alerta desde JavaScript!');
};
const biton=document.getElementById("botono");
biton.addEventListener("click", function(){
    alert("¡Haz hecho clic en el boton");
});

const form=document.getElementById("myform");

function validateEmail(email){
    const regex= /^[^\s@]+@[^\s@]+\.[^\s@]{2,7}$/
    return regex.test(email)

};
function ValidateForm(){
    const input=document.getElementById("email")
    const inputValue=input.value
    if(!validateEmail(inputValue)){
        alert("Por favor ingrese un correo electronico valido.")
    }
    else{
        alert("Correo electronico enviado correctamente.")
    }
};

form.addEventListener("submit",function(event){
    event.preventDefault()
    ValidateForm();
});
let boton=document.getElementById("miboton");
boton.addEventListener("click", function(){
    alert("¡Haz hecho clic en el boton");
});

document.querySelector("button.button-menu-toggle").addEventListener("click",function(){
    document.querySelector(".nav-links").classList.toggle("nav-links-responsive")
});