if(typeof document !== 'undefined'){

                                    let element = document.querySelector('.class-name')


let generator   =   document.getElementById('generate');
let squareZone  =   document.getElementById('squareZone');


generator.addEventListener('click',function(){

console.log('hola')

for (let square = 0; square < 9; square++) {
    let i   =   square + 1;
    let div  =   document.createElement('div');

   
    div.style.width  =  '7em';
    div.style.height =  '7em';
    div.style.margin =  '0px';
    div.classList.add('square'+i.toString())

    squareZone.appendChild(div)
}

    
}
)



}