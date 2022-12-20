
async function obtenerDatos(){
   
        const resultado =  await fetch ("https://6398b453fe03352a94dbe15d.mockapi.io/api/empleados") 
        const datos=await resultado.json();
        console.log(datos);   
        datos.forEach(element => {
            document.getElementById("tabla").innerHTML+=`<tr>
                <td>${element.nombre} ${element.apellido}</td>
                <th> ${element.domicilio}</th>
                <td><button class="ver" id="${element.id}">Ver</button></td>
            </tr>`
        });

        let btn=document.querySelectorAll(".ver");
        btn.forEach(item=>{
            item.addEventListener("click",(e)=>{
                mostrarUno(e.target.id);
            });
        })
    
    }
  
async function mostrarUno(id){
    
        const resultado =await fetch ("https://6398b453fe03352a94dbe15d.mockapi.io/api/empleados/"+id) 
        const datos = await resultado.json();
        console.log(datos);  
      
        let colaborador =document.getElementById("colaboradores");        
        colaborador.innerHTML="";

        let nombre = document.createElement("th");
        nombre.innerHTML=datos.nombre + " "+ datos.apellido;

        let area = document.createElement("th");
        area.innerHTML=datos.area;

        let direccion = document.createElement("th");
        direccion.innerHTML=datos.domicilio;

        let imagen = document.createElement("th");
        imagen.innerHTML=`<img src="${datos.foto}"></img>`
        colaborador.appendChild(nombre);
        colaborador.appendChild(area);
        colaborador.appendChild(direccion);
        colaborador.appendChild(imagen);    
}

async function modificarDatos(){
    let datosEmanuel={
        "nombre":"Emanuel",
        "apellido":"Lucietti",
        "area":"RPA",
        "domicilio":"milton roberts 2948 Rio Grande,Tierra del Fuego",
        "foto":"https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Artificial_Intelligence_%26_AI_%26_Machine_Learning_-_30212411048.jpg/1200px-Artificial_Intelligence_%26_AI_%26_Machine_Learning_-_30212411048.jpg",
        "id":"9"
    }
    console.log(datosEmanuel);
    const res =  await fetch("https://6398b453fe03352a94dbe15d.mockapi.io/api/empleados/"+datosEmanuel.id,{
        method: "PUT",
        body:JSON.stringify(datosEmanuel),
        headers:{"Content-type":"application/json"}
    });
    const data = await res.json();
    console.log(data);
    datosEmanuel.innerHTML = data;
    console.log("Datos modificados");
}


obtenerDatos();
            