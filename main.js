fetch('lamparas.json')
  .then((res) => res.json())
  .then((lamparas) => {
    let containerProductos = document.querySelector(".productos");

    for (const producto of lamparas) {
      let cardProducto = document.createElement("div");
      cardProducto.innerHTML = `<img src='./img/${producto.sku}.jpg'>
                         <h2>$${producto.precio}.00</h2>
                         <p>${producto.descripcion}</p>
                         <label for="cant">Cantidad: </label>
                             <select id="cant" name="cant">
                                 <option value="1">1</option>
                                 <option value="2">2</option>
                                 <option value="3">3</option>
                                 <option value="4">4</option>
                                 <option value="5">5</option>
                                 <option value="6">6</option>
                                 <option value="7">7</option>
                                 <option value="8">8</option>
                                 <option value="9">9</option>
                                 <option value="10">10</option>
                             </select>
                         <button class="btn">Comprar</button>`;
      containerProductos.append(cardProducto);
      cardProducto.classList.add("card", "animate__animated", "animate__bounceIn", "animate__fast")
    }
  })

fetch('lamparas.json')
  .then((res) => res.json())
  .then((lamparas) => {

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

    let instrucciones = document.querySelector(".instrucciones");
    let text = document.createElement("p");
    let botones = document.querySelectorAll(".btn");
    let botonFoco;
    let cantidad_lamparas;


    text.innerHTML = `Elige un producto:`;
    instrucciones.appendChild(text);


    for (let i = 0; i <= 7; i += 1) {

      botones[i].onclick = () => {

        let cantidad = (document.querySelectorAll("#cant"));
        localStorage.setItem("cantidadLamparas", cantidad[i].value);
        cantidad_lamparas = localStorage.getItem("cantidadLamparas");

        imprimirFocos();

        botonFoco = document.querySelectorAll("#btnFoco");

        botonFoco[0].onclick = () => {

          swal("¿Estás seguro de continuar?", {
              buttons: {
                back: "Mejor no",
                next: "Sí!",
              }
            })
            .then((value) => {
              switch (value) {

                case "back":
                  location.reload();
                  break;

                case "next":
                  imprimirResultado(lamparas[i], focos[0], cantidad_lamparas);
                  break;
              }
            });

        }

        botonFoco[1].onclick = () => {

          swal("¿Estás seguro de continuar?", {
              buttons: {
                back: "Mejor no",
                next: "Sí!",
              }
            })
            .then((value) => {
              switch (value) {

                case "back":
                  location.reload();
                  break;

                case "next":
                  imprimirResultado(lamparas[i], focos[1], cantidad_lamparas);
                  break;
              }
            });

        }

        botonFoco[2].onclick = () => {

          swal("¿Estás seguro de continuar?", {
              buttons: {
                back: "Mejor no",
                next: "Sí!",
              }
            })
            .then((value) => {
              switch (value) {

                case "back":
                  location.reload();
                  break;

                case "next":
                  imprimirResultado(lamparas[i], focos[2], cantidad_lamparas);
                  break;
              }
            });

        }

      }

    }
  })