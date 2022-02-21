//Varables
const menu = document.querySelector('#bgsmartPhone'),
      hamburger = document.querySelector('#bar-menu'),
      close_menu=document.querySelector('#closeMenu');

      console.log(menu)
;

// Listeners
loadListener();


function loadListener() {
    hamburger.addEventListener('click', () => {
        console.log('clicked..')
        menu.style.display = 'block';
        close_menu.style.display='block';
        hamburger.style.display='none'

    })
    close_menu.addEventListener('click',()=>{
        console.log('clicked');
        menu.style.display = 'none';
        close_menu.style.display='none';
        hamburger.style.display='block'

    })
}
var luna, lunamodal,
lunamodal = document.querySelector('#lunamodal');


luna=document.querySelector('#modalBtn').addEventListener('click', function() {
    lunamodal.style.display = 'block';
    console.log('clicked...');
});

document.querySelector('.grey-btn a').addEventListener('click', () => {
    let x = document.querySelector('#lunamodal').style.display = 'none';
})

const abduct=document.querySelector('#abduct'),
      card=document.querySelector('#card'),
      footer=document.querySelector('#footer'),
      night=document.querySelector('#night');

      //listenrs
      loadListener();
      function loadListener(){
          night.addEventListener('click',()=>{
              abduct.style.display='none';
            //   abduct.style.color='#ffffff';
          })
      }