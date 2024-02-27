const bgImg = document.querySelectorAll('.bg-img img'),
changeBtn = document.querySelectorAll('.next-back i');
let bgCount = 0;

function BackBg(){

    let activeBg = document.querySelector('.active-bg');
    for(i=0;i<bgImg.length;i++){

        if(activeBg==bgImg[i]){

            if(activeBg==bgImg[0]){

                activeBg.classList.remove('active-bg');
                bgImg[3].classList.add('active-bg');

            }
            else{

                 activeBg.classList.remove('active-bg');
                 bgImg[i-1].classList.add('active-bg');
                

            }
        }
    }

}
function nextBg(){

    let activeBg = document.querySelector('.active-bg');
    for(i=0;i<bgImg.length;i++){

        if(activeBg==bgImg[i]){

            if(activeBg==bgImg[3]){

                activeBg.classList.remove('active-bg');
                bgImg[0].classList.add('active-bg');

            }
            else{

                 activeBg.classList.remove('active-bg');
                 bgImg[i+1].classList.add('active-bg');
                

            }
        }
    }

}
changeBtn.forEach((btn,key)=>{

    btn.addEventListener('click',e=>{

       
        
        if(e.target.className=="fas fa-chevron-left back-img"){

           BackBg();
            
        }
        else{
            
           nextBg();
           
        }

    })

});

setInterval(nextBg,10000);

let showMenu = document.querySelector('.menu-bar i');
let HiddenmenuMobile = document.querySelector('.hidden-menu-mobile');

showMenu.addEventListener('click', e=>{

    if( HiddenmenuMobile.style.left!="10%"){

        HiddenmenuMobile.style.left="10%";
        HiddenmenuMobile.style.position="fixed";
        HiddenmenuMobile.style.zIndex="1000";

    }

});
// CLOSE MENU--------------------- 
const closeMenu = document.querySelector('#close-menu');

closeMenu.addEventListener("click",e=>{

    HiddenmenuMobile.style.left="100%";

})

//SHOW SUB MENU-----------------------

let itemMobile = document.querySelectorAll('.hidden-mobile-item'),
    subitemMobile = document.querySelectorAll('.hidden-sub-mobile'),
    subBack = document.querySelectorAll(".change-sub-bg i");
    
    itemMobile.forEach((menuMobile,key)=>{

        menuMobile.addEventListener('click',e=>{

            subitemMobile[key].style.left="10%";
            subitemMobile[key].style.zIndex="1001";
            subitemMobile[key].style.position="fixed";
            subBack[key].addEventListener("click",e=>{

                subitemMobile[key].style.left="100%";
        
            })
        
        })

    })

const menu = document.querySelector(".menu");

window.addEventListener("scroll",e=>{
    if(window.scrollY>0){

        // menu.style.backgroundColor="#030303";
        // menu.style.zIndex="1002";

    }
    else{

        menu.style.backgroundColor="";
        menu.style.zIndex="";


    }
  

})

const slideShow = document.querySelectorAll('.slide-show .slide-show-content'),
backSlide = document.querySelector('.nav-slide i:nth-child(1)'),
nextSlide = document.querySelector('.nav-slide i:nth-child(2)'),
changeSlide = document.querySelector('.slide-show');

let changed = 0,
maxChange = 1200;

nextSlide.addEventListener('click',e=>{
   
    if(changed == 0){

        changeSlide.style.marginLeft = "-400px";
        changed+=400;

    }
    else  if(changed>0 && changed<maxChange ){

        changed+=400;
        changeSlide.style.marginLeft = "-"+changed+'px';

    }
    else{

        changed=0;
        changeSlide.style.marginLeft=0;
    }

})

backSlide.addEventListener('click',e=>{
   
    if(changed == 0){

        changeSlide.style.marginLeft = "-"+maxChange+"px";
        changed+=maxChange;

    }
    else  if(changed>0 && changed<=maxChange ){

        changed-=400;
        changeSlide.style.marginLeft = "-"+changed+'px';

    }
    else{

        changed=0;
        changeSlide.style.marginLeft=0;
    }

})

const thirdBtn = document.querySelectorAll('.third-input .third-content-input');

thirdBtn.forEach((item,key)=>{

    item.addEventListener("click",e=>{

      for( i=0;i<thirdBtn.length;i++){

        if(thirdBtn[i]==e.target){

            thirdBtn[i].classList.add('active-third');

        }
        else{

            thirdBtn[i].classList.remove('active-third');
        }

      }

    })

})
//thirst-slide
const thirstSlide = document.querySelectorAll(".thirst-content-slide"),
thirsContainer = document.querySelector(".thirst-container-slide"),
thirstnextBack = document.querySelectorAll('.thirst-next-back i');

let thirstChange=0,
thirstmaxChange=(thirstSlide.length-5)*240;

thirstnextBack.forEach((button,key)=>{

    button.addEventListener("click",e=>{

        if(button==thirstnextBack[0]){

            
            if(thirstChange==0){

                thirstChange=thirstmaxChange;
                thirsContainer.style.marginLeft="-"+thirstChange+"px";
          
            }
            else if(thirstChange>0 && thirstChange<=thirstmaxChange){

                thirstChange-=240;
                thirsContainer.style.marginLeft="-"+thirstChange+"px";


            }

        }
        else{

            if(thirstChange==0){

                thirstChange+=240;
                thirsContainer.style.marginLeft="-240px";   

            }
            else if(thirstChange>0 && thirstChange<thirstmaxChange){

                thirstChange+=240;
                thirsContainer.style.marginLeft="-"+thirstChange+"px";

            }
            else{

                thirstChange=0;
                thirsContainer.style.marginLeft="0"; 
            }


        }

    })

})







