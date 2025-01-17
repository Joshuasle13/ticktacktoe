if(typeof document !== 'undefined'){

                                    let element = document.querySelector('.class-name')


let generator   =   document.getElementById('generate');
let squareZone  =   document.getElementById('squareZone');
let reload      =   0;

let number  = function(n){
        
  return Math.ceil(Math.random()*n)
  }
    


generator.addEventListener('click',function(){
    reload++
    
for (let square = 0; square < 9; square++) {
    let i       =   square + 1;
    let div     =   document.createElement('div');
    let player        =   document.createElement('p');
    let computer    =   document.createElement('p');


    

    computer.id = 'cCheck'+i
    div.id= 'unchecked' + i ;

    


    generator.innerText =   'Play again';

   
   
    div.style.width  =  '6em';
    div.style.height =  '6em';
    div.style.margin =  '0px';
    div.style.display = 'flex';
    div.style.alignItems  = 'center'
    div.style.justifyContent  = 'center'
    div.classList.add('square'+i.toString());
    div.appendChild(computer)
    squareZone.appendChild(div);
    


  

    div.addEventListener('click',function(){
      
      switch(number(9)){
        case  1:{ 
          
          document.getElementById('cCheck1').innerText  = 'O'
          document.getElementById('cCheck1').style.fontSize = '3em';
          document.getElementById('cCheck1').style.color  = 'blue';
          document.getElementById('cCheck1').style.width  = 'fit-content';
          document.getElementById('cCheck1').style.height  = 'fit-content';
          document.getElementById('cCheck1').style.alignSelf  = 'center' ;
          document.getElementById('cCheck1').style.placeSelf='center'; 
          console.log(1)
          
          break
        }
        case  2:{ 
          document.getElementById('cCheck2').innerText  = 'O'
          document.getElementById('cCheck2').style.fontSize = '3em';
          document.getElementById('cCheck2').style.color  = 'blue';
          document.getElementById('cCheck2').style.width  = 'fit-content';
          document.getElementById('cCheck2').style.height  = 'fit-content';
          document.getElementById('cCheck2').style.alignSelf  = 'center' ;
          document.getElementById('cCheck2').style.placeSelf='center'; 
          console.log(2)
          
          break
        }
        case  3:{ 
          document.getElementById('cCheck3').innerText  = 'O'
          document.getElementById('cCheck3').style.fontSize = '3em';
          document.getElementById('cCheck3').style.color  = 'blue';
          document.getElementById('cCheck3').style.width  = 'fit-content';
          document.getElementById('cCheck3').style.height  = 'fit-content';
          document.getElementById('cCheck3').style.alignSelf  = 'center' ;
          document.getElementById('cCheck3').style.placeSelf='center'; 
          console.log(3)
          
          break
        }
        case  4:{ 
          document.getElementById('cCheck4').innerText  = 'O'
          document.getElementById('cCheck4').style.fontSize = '3em';
          document.getElementById('cCheck4').style.color  = 'blue';
          document.getElementById('cCheck4').style.width  = 'fit-content';
          document.getElementById('cCheck4').style.height  = 'fit-content';
          document.getElementById('cCheck4').style.alignSelf  = 'center' ;
          document.getElementById('cCheck4').style.placeSelf='center'; 
          console.log(4)
          
          break
        }
        case  5:{ 
          document.getElementById('cCheck5').innerText  = 'O'
          document.getElementById('cCheck5').style.fontSize = '3em';
          document.getElementById('cCheck5').style.color  = 'blue';
          document.getElementById('cCheck5').style.width  = 'fit-content';
          document.getElementById('cCheck5').style.height  = 'fit-content';
          document.getElementById('cCheck5').style.alignSelf  = 'center' ;
          document.getElementById('cCheck5').style.placeSelf='center'; 
          console.log(5)
          
          break
        }
        case  6:{ 
          document.getElementById('cCheck6').innerText  = 'O'
          document.getElementById('cCheck6').style.fontSize = '3em';
          document.getElementById('cCheck6').style.color  = 'blue';
          document.getElementById('cCheck6').style.width  = 'fit-content';
          document.getElementById('cCheck6').style.height  = 'fit-content';
          document.getElementById('cCheck6').style.alignSelf  = 'center' ;
          document.getElementById('cCheck6').style.placeSelf='center'; 
          console.log(6)
          
          break
        }
        case  7:{ 
          document.getElementById('cCheck7').innerText  = 'O'
          document.getElementById('cCheck7').style.fontSize = '3em';
          document.getElementById('cCheck7').style.color  = 'blue';
          document.getElementById('cCheck7').style.width  = 'fit-content';
          document.getElementById('cCheck7').style.height  = 'fit-content';
          document.getElementById('cCheck7').style.alignSelf  = 'center' ;
          document.getElementById('cCheck7').style.placeSelf='center'; 
          console.log(7)

          break
        }
        case  8:{ 
          document.getElementById('cCheck8').innerText  = 'O'
          document.getElementById('cCheck8').style.fontSize = '3em';
          document.getElementById('cCheck8').style.color  = 'blue';
          document.getElementById('cCheck8').style.width  = 'fit-content';
          document.getElementById('cCheck8').style.height  = 'fit-content';
          document.getElementById('cCheck8').style.alignSelf  = 'center' ;
          document.getElementById('cCheck8').style.placeSelf='center'; 
          console.log(8)
          
          break
        }
        case  9:{ 
          document.getElementById('cCheck9').innerText  = 'O'
          document.getElementById('cCheck9').style.fontSize = '3em';
          document.getElementById('cCheck9').style.color  = 'blue';
          document.getElementById('cCheck9').style.width  = 'fit-content';
          document.getElementById('cCheck9').style.height  = 'fit-content';
          document.getElementById('cCheck9').style.alignSelf  = 'center' ;
          document.getElementById('cCheck9').style.placeSelf='center'; 
          console.log(9)
          
          break
        }
      }

      
  })



    div.addEventListener('click',function(){

          
        div.id= 'check'+i;
        document.getElementById('check'+i).removeChild(computer)
      
  
        player.innerText  = 'X';
        player.style.fontSize = '3em';
        player.style.color  = 'red';
        player.style.width  = 'fit-content';
        player.style.height  = 'fit-content';
        player.style.alignSelf  = 'center'; 
        player.style.placeSelf='center';
        div.appendChild(player);

    })

   
}

  if(reload===  2){
    location.reload()
  }




}
)



}

