export function ajax(){
    const url = "http://localhost:3000/dataList";
    
    const $divSectionLista = document.getElementById("divSectionLista");
    
    fetch(url)
    .then(response=>response.json())
    .then(res=>{
        let html =""
        res.map(res=>{
            console.log(res.name)
            html+=`<table>
                <div class="divNombre">
                <div class="nombre">${res.name} </div>
                <div class="edit"><img id="edit" src="/public/pen-to-square-regular.svg" alt="editar"></div>
                </div>
                <tr>
                <td>pagó el: ${res.payment}</td>
                <td>expira en: ${res.expiration}</td>
                </tr>
            </table>`;
            $divSectionLista.innerHTML=html;

            const $edit= document.getElementById("edit");
            $edit.addEventListener("click", (e)=>{
                console.log(e)
            })
        })
        
        
        
       
    })
    .catch(err=>{
        $divSectionLista.innerHTML=`Error en base de datos`;
    })

    
    
    
    const $style = document.getElementById("style");
    $style.innerHTML+=`
    .divSectionLista{
        /* background-color: red; */
        width: 70vw;
        max-height: 50vh;
        scroll-behavior:auto;
        overflow-y: auto;
        margin: auto;
        }
        
        table{
            /* background-color: rgb(32, 87, 0); */
            width: 100%;
            margin-bottom: 15px;
            background-color: rgb(77, 77, 77);
        }
        .nombre{
            background-color: rgb(51, 51, 51);
            font-size: 18px;
            padding: 5px;
            width: 100%;
        }
        td{
            background-color: rgb(77, 77, 77);
            
        }
        .divNombre{
            background-color: rgb(51, 51, 51);
            display: flex;
            justify-content: center;
            align-items: center;
        }
         .edit img{
            width: 25px;
            margin-right: 10px;
            cursor:pointer;
        }
    `
        
    
    }




