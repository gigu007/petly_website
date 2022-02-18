// const lunaModal=document.getElementById('modalBtn');
// const adoptLunaBtn=document.getElementById('modalBtn')
// const closeBtn=document.querySelector('.grey-btn');

// function openModal() {
//     lunaModal.style.display = 'block';
//   }

//   function closeModal(){
//       lunaModal.style.display='none';
//   }
//   function listener(){
//     adoptLunaBtn.addEventListener('click',closeModal)  
//     lunaModal.addEventListener('click',openModal);
    
//   }
//   listener();

var luna, lunamodal,
lunamodal = document.querySelector('#lunamodal');


luna=document.querySelector('#modalBtn').addEventListener('click', function() {
    lunamodal.style.display = 'block';
    console.log('clicked...');
});

document.querySelector('.grey-btn a').addEventListener('click', () => {
    let x = document.querySelector('#lunamodal').style.display = 'none';
})
