import dataUserPass from "./dataUserPass.js";
import { formAgregar } from "./formAgregar.js";
import { lista } from "./lista.js";



export function validarLogin(){
    const user = dataUserPass.user,
    password = dataUserPass.password;
    
    const userInput = document.getElementById("userInput").value,
        passwordInput = document.getElementById("passwordInput").value;
   
    let valorLogin = document.getElementById("valorLogin");

    if(userInput===user && passwordInput===password){
        console.log("correctos")
        formAgregar()
        
        lista()
        
    }else{
        console.log("incorrectos")
        valorLogin.innerHTML=`usuario o contraseña incorrecto`
    }

    return 
    
}