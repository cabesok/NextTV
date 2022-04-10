const open = document.getElementById('open-new');
const modal_container = document.getElementById('container-modal');
const close = document.getElementById('close');
const body = document.querySelector('body');

open.addEventListener('click', ()=>{
    modal_container.classList.add('show');
    
});
close.addEventListener('click', ()=> {
    modal_container.classList.remove('show')
})