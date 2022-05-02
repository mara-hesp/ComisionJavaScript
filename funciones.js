function imprimirResultado(lampara, foco, cantidad) {

    let instrucciones = document.querySelector(".instrucciones");

    let containerProductos = document.querySelector(".productos");
    let titulo = document.querySelector("h1");
    titulo.innerText = "Resultado"
    instrucciones.innerHTML = "";
    containerProductos.innerHTML = "";

    let resultado = document.createElement("div");
    resultado.innerHTML = `<div class="resultado"><img src='./img/${lampara.sku}.jpg'>
                        <p>Has elegido ${cantidad} Lámpara(s) de ${lampara.tipo} con focos tipo ${foco.tipo}</p><br>
                        <p>Precio por unidad: $${lampara.precio}</p>
                        <p>Esta lámpara requiere: ${lampara.cantFocos} foco(s)</p>
                        <p>Precio por foco: $${foco.precio}</p><br>
                        <p><strong>Total a pagar: $${totalFinal(foco.precio, lampara.cantFocos, lampara.precio, cantidad)}</strong></p></div>`;
    instrucciones.appendChild(resultado)
    resultado.classList.add("contRes", "animate__animated", "animate__bounceIn", "animate__fast")
}




function imprimirFocos() {

    class FocoStorage {
        constructor(id, tipo, descripcion, sku, precio) {
            this.id = id;
            this.tipo = tipo;
            this.descripcion = descripcion;
            this.sku = sku;
            this.precio = parseInt(precio);
        }
    }

    const focos = [];

    focos.push(new FocoStorage(1, "Vintage", "Foco Edison Vintage Filamento Carbono 40w E27", "B9085-1", 150));
    focos.push(new FocoStorage(2, "LED", "Foco LED Plástico Aluminio A19 3000K de 5W", "B1014-1", 120));
    focos.push(new FocoStorage(3, "Smart", "Foco Led Smart Wifi Regulable A60 10w 2700-6500k", "22937-1", 220));

    let containerProductos = document.querySelector(".productos");
    let titulo = document.querySelector("h1");
    titulo.innerText = "Focos";
    let text = document.createElement("p");
    text.innerHTML = `Elige el tipo de foco que usarás:`;

    containerProductos.innerHTML = "";

    for (const producto of focos) {
        let cardProducto = document.createElement("div");
        cardProducto.innerHTML = `<img src='./img/${producto.sku}.jpg'>
                                <h2>$${producto.precio}.00</h2>
                                <p>${producto.descripcion}</p>
                                <button class="btn" id="btnFoco">Comprar</button>`;
        containerProductos.append(cardProducto);
        cardProducto.classList.add("card", "animate__animated", "animate__bounceIn", "animate__fast")
    }
}



const totalFinal = (precioFoco, cantFoco, precioLamp, cantLamp) => ((precioFoco * cantFoco) + precioLamp) * cantLamp