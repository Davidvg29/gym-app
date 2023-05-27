export function formAgregar(){
    const $formAgregar = document.getElementById("formAgregar");
    $formAgregar.innerHTML=`
    
    <h3>Formulario para inscribir clientes</h3>
    <form id="formSubmit">
        <div class="divInput">
        <div><input type="text" placeholder="nombre" id="inputNombre"></div>
        <div><span>pago el <input type="date" id="inputFechaPago"></span></div>
        <div><span>vence el <input type="date" id="inputFechaExpira"></span></div>
        </div>
    <input type="submit" value="agregar" id="buttonAgregar">
    </form>
    <div class="errorAgregar" id="errorAgregar"></div>
    `;


    const $formSubmit = document.getElementById("formSubmit");
    $formSubmit.addEventListener("submit", (e)=>{e.preventDefault()
        const $buttonAgregar = document.getElementById("buttonAgregar");
        $buttonAgregar.addEventListener("click", (e)=>{
            e.preventDefault()
            
        
        obtenerData()
    
        
       
    })

    })
    
    





    const obtenerData = ()=>{
        const inputNombre = document.getElementById("inputNombre").value,
        inputFechaPago = document.getElementById("inputFechaPago").value,
        inputFechaExpira = document.getElementById("inputFechaExpira").value;

        
    const dataSend = {
        name:inputNombre,
        payment: inputFechaPago,
        expiration: inputFechaExpira
    }

        const $errorAgregar = document.getElementById("errorAgregar");
        inputNombre.length>5 && 
        inputFechaPago.length===10 &&
        inputFechaExpira.length===10 ? 
        fetch("http://localhost:3000/dataList",{
            method:"POST",
            body: JSON.stringify(dataSend),
            headers:{"Content-Type": "application/json"}})
            .then(a=>a.json())
            .then(a=>console.log("dato enviado")) : 
        $errorAgregar.innerHTML=`nombre o alguna fecha incorrecta`


    
        

        
         } 
    const $style = document.getElementById("style");
    $style.innerHTML=`
    #formAgregar{
        /* background-color: red; */
        text-align: center;
        margin: 15px;
    }
    form{
        /* background-color: green; */
        display: flex;
        justify-content: center;
        text-align: end;
        
        
        
    }
    .divInput{
        /* background-color: blue; */
    }
     #inputNombre{
        text-align: center;
        background-color: rgba(205, 92, 92, 0);
        border: none;
        border-bottom: 1px solid rgb(212, 212, 212);
        text-decoration: none;
        outline: none;
        margin-bottom: 15px;
        padding: 5px;
        color: rgb(212, 212, 212);
        border-radius: 0;
    }
    #inputFechaPago, #inputFechaExpira{
        background-color: rgba(205, 92, 92, 0);
        border: none;
        border-bottom: 1px solid rgb(212, 212, 212);
        color: rgb(212, 212, 212);
        text-decoration: none;
        outline: none;
        margin-bottom: 15px;
        text-align: center;
        border-radius: 0;
        we
    }
    #buttonAgregar{
        margin: 20px;
        background-color: rgb(212, 212, 212);
        border: none;
        border-radius: 5px;
        cursor: pointer;
    }
    .errorAgregar{
        color: rgb(255, 61, 61);
        margin: 10px;
    }
    `
}