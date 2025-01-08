if(typeof document !== 'undefined'){

                                    let element = document.querySelector('.class-name')


let generator   =   document.getElementById('generate');
let squareZone  =   document.getElementById('squareZone');
let reload      =   0;

let computer    =   document.createElement('p');


generator.addEventListener('click',function(){
    reload++
    console.log('hola', reload)
    

for (let square = 0; square < 9; square++) {
    let i       =   square + 1;
    let div     =   document.createElement('div');
    

    generator.innerText =   'Play again'
    
   
   
    div.style.width  =  '6em';
    div.style.height =  '6em';
    div.style.margin =  '0px';
    div.classList.add('square'+i.toString());
    squareZone.appendChild(div);


    let player        =   document.createElement('p');

    div.addEventListener('click',function(){

     

      player.innerText  = 'X';
      player.style.fontSize = '3em'
      player.style.color  = 'red'
      div.appendChild(player);


      div.style.display = 'flex';
      div.style.alignItems  = 'center'
      div.style.justifyContent  = 'center'

    




    })
}
  

  if(reload===  2){
    location.reload()
  }  
}
)



//crear una funcion que itere sobre los divs y marque el lugar donde se hizo click//
 //creo un event que marque  el div en el que estoy//







}