
async function obtenerPrecios() {
    
    const resp = await fetch("https://api.mercadolibre.com/sites/MLA/search?q=almendras")
    const respData = await resp.json();
    
    let precio = respData.results[0].price;
    let imagen = respData.results[0].thumbnail;
    let titulo = respData.results[0].title;

    let img = document.createElement("img");
    img.setAttribute("src", imagen);
    let division = document.getElementById("api_imagen").appendChild(img);
      
    document.getElementById("api_title").innerHTML = ` ${titulo}`;
    document.getElementById("api_precio").innerHTML = `$ ${precio}`;


}

obtenerPrecios();
