if(typeof document !== 'undefined'){

                                    let element = document.querySelector('.class-name')


let generator   =   document.getElementById('generate');
let squareZone  =   document.getElementById('squareZone');
let reload      =   0;
let array = []
let pC  = []

let number  = function(n){
        
  return Math.ceil(Math.random()*n)
  }
    
  for (let k = 0; k < 90; k++) {
    array.push(number(10));
    
  }

generator.addEventListener('click',function(){
    reload++
    
for (let square = 0; square < 9; square++) {
    let i       =   square + 1;
    let div     =   document.createElement('div');
    let player        =   document.createElement('p');
    let computer    =   document.createElement('p');
    let valid
    
  
    
    


    pC  = array.filter((element, index) => array.indexOf(element) === index)
    computer.id = 'cCheck';
    div.id= 'unchecked'+pC[i];


   
    generator.innerText =   'Play again';


    computer.innerText  = 'O'
    computer.style.fontSize = '3em';
    computer.style.color  = 'blue';
    computer.style.width  = 'fit-content';
    computer.style.height  = 'fit-content';
    computer.style.alignSelf  = 'center' ;
    computer.style.placeSelf='center'; 

   
   
    div.style.width  =  '6em';
    div.style.height =  '6em';
    div.style.margin =  '0px';
    div.style.display = 'flex';
    div.style.alignItems  = 'center'
    div.style.justifyContent  = 'center'
    div.classList.add('square'+i.toString());
    squareZone.appendChild(div);
   
    
    div.addEventListener('click',function(){

setTimeout(function(){

  switch(valid){
    case 0:{
      if(document.getElementById('unchecked1') !== null){
        document.getElementById('unchecked1').appendChild(computer)
        document.getElementById('unchecked1').id='check'
        
      }else if(document.getElementById('unchecked1')=== null && document.getElementById('unchecked2') !== null){
        document.getElementById('unchecked2').appendChild(computer)
        document.getElementById('unchecked2').id='check'
    
      }else if(document.getElementById('unchecked2')=== null && document.getElementById('unchecked3') !==null){
        document.getElementById('unchecked3').appendChild(computer)
        document.getElementById('unchecked3').id='check'
    
      }else if(document.getElementById('unchecked3')=== null && document.getElementById('unchecked4') !==null){
        document.getElementById('unchecked4').appendChild(computer)
        document.getElementById('unchecked4').id='check'
    
      }else if(document.getElementById('unchecked4')=== null && document.getElementById('unchecked5') !==null){
        document.getElementById('unchecked5').appendChild(computer)
        document.getElementById('unchecked5').id='check'
    
      }else if(document.getElementById('unchecked5')=== null && document.getElementById('unchecked6') !==null){
        document.getElementById('unchecked6').appendChild(computer)
        document.getElementById('unchecked6').id='check'
    
      }else if(document.getElementById('unchecked6')=== null && document.getElementById('unchecked7') !==null){
        document.getElementById('unchecked7').appendChild(computer)
        document.getElementById('unchecked7').id='check'
    
      }else if(document.getElementById('unchecked7')=== null && document.getElementById('unchecked8') !==null){
        document.getElementById('unchecked8').appendChild(computer)
        document.getElementById('unchecked8').id='check'
    
      }else if(document.getElementById('unchecked8')=== null && document.getElementById('unchecked9') !==null){
        document.getElementById('unchecked9').appendChild(computer)
        document.getElementById('unchecked9').id='check'
    
      }else if(document.getElementById('unchecked9')=== null && document.getElementById('unchecked10') !==null){
        document.getElementById('unchecked10').appendChild(computer)
        document.getElementById('unchecked10').id='check'
    
      }
      break
    }
    case 1:
      {
        break
      }
  }
  
 

},100)
     
     



  })



    div.addEventListener('click',function(){

               if(div.id === 'check'){
            console.log('hola')
            valid = 1
      }   else if(div.id!==  'check'){
            div.id = 'check'+i;
            div.appendChild(player);
            valid = 0
           
      }
        
        
      
        player.innerText  = 'X';
        player.style.fontSize = '3em';
        player.style.color  = 'red';
        player.style.width  = 'fit-content';
        player.style.height  = 'fit-content';
        player.style.alignSelf  = 'center'; 
        player.style.placeSelf='center';
        
    })

   
}


  if(reload===  2){
    location.reload()
  }




}
)



}

