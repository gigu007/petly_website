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
// var darkMode, lunamodal,close_menu
// lunamodal = document.querySelector('#bgsmartPhone');
// close_menu=document.querySelector('#closeMenu');

// darkMode=document.querySelector('#bar-menu').addEventListener('click', function() {
    
//     bgsmartPhone.style.display = 'block';
//     close_menu.style.display='block';
//     darkMode.style.display='none';

//     console.log('clicked...');
// });

// document.querySelector('#closeMenu').addEventListener('click', () => {
//     let x = document.querySelector('#bgsmartPhone').style.display = 'none';
//     close_menu.style.display='none';
//     darkMode.style.display='block';
// })