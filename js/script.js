let cards = document.querySelectorAll('.cardItem');

[...cards].forEach((card)=>{
  card.addEventListener( 'click', function() {
    card.classList.toggle('is-flipped');
  });
});

//DEBIDO AL CONCEPTO DEL SITIO (VIAJES FUTURISTAS EN EL UNIVERSO DE FUTURAMA " SERIE DE TELEVISION "), NO ENCONTRE UNA API REST QUE
//SEA VALIDA PARA EL CONCEPTO DEL SITIO. AUN ASI DEJO ACA LA LLAMADA A UNA API REST.
//API REST UTILIZADA " FAKESTOREAPI "

let products=[]
fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=> products.push(json))