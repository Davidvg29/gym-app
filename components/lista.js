import { ajax } from "../helpers/ajax.js";


export function lista(){
    
    const $root = document.getElementById("root");
    $root.innerHTML=`
    <h3 class="h3Lista">Lista de clientes</h3>
    <div class="divSectionLista" id="divSectionLista">
    </div>`
    
    ajax()

    



    const $style = document.getElementById("style");
    $style.innerHTML+=`
    .h3Lista{
        text-align: center;
    }
    .divSectionLista{
        text-align: center;
    }
    `
}