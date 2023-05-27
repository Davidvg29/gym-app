import { login } from "./components/login.js";
import dataUserPass from "./components/dataUserPass.js";
import { validarLogin } from "./components/validarLogin.js";

const user = dataUserPass.user,
    password = dataUserPass.password;

export function app(){
    
    const $root = document.getElementById("root");
    $root.appendChild(login())
    
    let $buttonLogin = document.getElementById("buttonLogin");
    $buttonLogin.addEventListener("click", (e)=>{e.preventDefault(), validarLogin()})
    
    
}

