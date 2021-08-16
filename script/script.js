const linksimags = ['img1.jpeg', 'img2.jpeg', 'img3.jpeg', 'img4.jpeg', 'img5.jpg', 'img6.jpg', 'img7.jpg', 'img8.jpg',]

let contador = 0

function btndibujo(){

    if (contador<linksimags.length){
        const dibujo = document.createElement('img');
        dibujo.setAttribute('class', 'compacto')
        dibujo.setAttribute('src', linksimags[contador]);
        contendor.appendChild(dibujo);
        contador = contador + 1
    }else{
        alert('Ya alcanzaste el máximo de imágenes :)')
    }        
    };

let boton = document.getElementById('btn').addEventListener('click', btndibujo);

let contendor = document.getElementById('container');