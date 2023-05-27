
export function login(){
    
    const $form = document.createElement("form")
    $form.innerHTML=`
    <img src="/public/logoGym.jpg" alt="Old School GYM">
    <h2 class="h2">iniciar sesion para ingresar al sistema</h2>
    <div class="divInput">
    <input id="userInput" type="text" placeholder="usuario">
    <input id="passwordInput" type="password" placeholder="contraseña">
    </div>
    <button id="buttonLogin">ingresar</button>
    <h4 id="valorLogin"></h4>`;

    const $style = document.getElementById("style");
    $style.innerHTML=`
    #root{
        width: 100vw;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
    form{
        text-align: center; 
    }
    .divInput{
        width: 90%;
        margin: auto;
        
    }
    input{
        text-align: center;
        border: none;
        border-radius: none;
        background-color: rgba(255, 0, 0, 0);
        border-bottom: 1px rgb(212, 212, 212) solid;
        color: rgb(212, 212, 212);
        text-decoration: none;
        outline: none;
    }
    #userInput, #passwordInput{
        margin-bottom: 15px;
        font-size: 20px;
    }
    button{
        padding: 10px;
        border-radius: 10px;
        cursor: pointer;
    }
    #buttonLogin{
        margin-top:15px ;
        font-size: 20px;
    }
    h3, #valorLogin{
        color: rgb(255, 61, 61);
    }
    
    
    
    `

    return $form
}

