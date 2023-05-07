const repositorio_thead = document.querySelector(".repositorio-thead");
const repositorio_tbody = document.querySelector(".repositorio-tbody");

function aplicarFiltro() {
    console.log(document.getElementById("filtro").value)

    let filtro = document.getElementById("filtro").value;

    fetch("../json/catalogo.json")
    .then(function(response) {
        return response.json();
    })
    
    .then(function(datos) {
        let out_thead = "";
        let out_tbody = "";
        
        if (filtro == "todo") {
            out_thead += `
            <tr>
            <th>Centro</th>
            <th>Grado</th>
            <th>Sexo</th>
            <th>Edad</th>
            <th>¿Qué tan segura crees que es tu contraseña actual?</th>
            <th>¿Cuántas veces al año cambias tu contraseña?</th>
            <th>¿Qué medidas de seguridad utilizas para proteger tu información personal en línea?</th>
            <th>¿Crees que las empresas deberían ser más transparentes en cuanto al manejo de datos de sus usuarios?</th>
            <th>¿Qué tan preocupado estás por el robo de identidad en línea?</th>
            <th>¿Qué tan importante es para ti la privacidad en línea?</th>
            <th>¿Crees que las redes sociales deberían ser más responsables en cuanto a la seguridad de la información de sus usuarios?</th>
            <th>¿Has sido víctima de algún ataque informático en línea en los últimos 12 meses?</th>
            </tr>              
            `;

            for (let dato of datos) {
                out_tbody += `
                    <tr>
                        <td>${dato.Centro}</td>
                        <td>${dato.Grado}</td>
                        <td>${dato.Sexo}</td>
                        <td>${dato.Edad}</td>
                        <td>${dato.contraseña_actual}</td>
                        <td>${dato.cambio_contraseña}</td>
                        <td>${dato.medidas_de_seguridad}</td>
                        <td>${dato.empresas_transparentes}</td>
                        <td>${dato.preocupacion_robo}</td>
                        <td>${dato.privacidad_en_linea}</td>
                        <td>${dato.seguridad_redes_sociales}</td>
                        <td>${dato.victima_ataque_informatico}</td>
                    </tr>
                `;
            }
        } else if (filtro == "personal") {
            out_thead += `
                <tr>
                    <th>Centro</th>
                    <th>Grado</th>
                    <th>Sexo</th>
                    <th>Edad</th>
                </tr>                
            `;

            for (let dato of datos) {
                out_tbody += `
                    <tr>
                        <td>${dato.Centro}</td>
                        <td>${dato.Grado}</td>
                        <td>${dato.Sexo}</td>
                        <td>${dato.Edad}</td>
                    </tr>
                `;
            }            
        } else {
            out_thead += `
                <tr>
                    <th>¿Qué tan segura crees que es tu contraseña actual?</th>
                    <th>¿Cuántas veces al año cambias tu contraseña?</th>
                    <th>¿Qué medidas de seguridad utilizas para proteger tu información personal en línea?</th>
                    <th>¿Crees que las empresas deberían ser más transparentes en cuanto al manejo de datos de sus usuarios?</th>
                    <th>¿Qué tan preocupado estás por el robo de identidad en línea?</th>
                    <th>¿Qué tan importante es para ti la privacidad en línea?</th>
                    <th>¿Crees que las redes sociales deberían ser más responsables en cuanto a la seguridad de la información de sus usuarios?</th>
                    <th>¿Has sido víctima de algún ataque informático en línea en los últimos 12 meses?</th>
                </tr>                
            `;

            for (let dato of datos) {
                out_tbody += `
                    <tr>
                        <td>${dato.contraseña_actual}</td>
                        <td>${dato.cambio_contraseña}</td>
                        <td>${dato.medidas_de_seguridad}</td>
                        <td>${dato.empresas_transparentes}</td>
                        <td>${dato.preocupacion_robo}</td>
                        <td>${dato.privacidad_en_linea}</td>
                        <td>${dato.seguridad_redes_sociales}</td>
                        <td>${dato.victima_ataque_informatico}</td>
                    </tr>
                `;
            }
        }
        repositorio_thead.innerHTML = out_thead;
        repositorio_tbody.innerHTML = out_tbody;
    })
}

aplicarFiltro()