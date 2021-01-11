const inputVal=document.querySelector('.input-val');

const ul=document.querySelector('#ul');
const li=document.querySelectorAll('.li-items');

inputVal.addEventListener('keyup',(e)=>{
    let x=e.target.value.toLowerCase();

    const li=ul.querySelectorAll('.li-items');

    li.forEach(item=>{

        if(item.textContent.toLowerCase().includes(x)){

            item.style.display='';
            
        }else{
            item.style.display='none'
        }


    })

    console.log(x)
});