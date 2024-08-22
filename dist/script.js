document.addEventListener('DOMContentLoaded', () => {
    
    document.querySelector(".btn")
    const image = document.getElementById('image');
     const btn= document.querySelector("#reporting");
     const btn2= document.querySelector("#claim");
     const btn3=document.querySelector("#payroll");
     const btn4 = document.querySelector("#vatHandling")
     
     
     btn.addEventListener('click' , ()=>{
          btn.getAttribute('data-image')
            image.src="cash.webp"
 
 
     })
 
    btn2.addEventListener('click' , ()=>{
     btn2.getAttribute('data-image');
        image.src = 'expense.webp'
     })
 
     btn3.addEventListener('click' , ()=>{
     btn3.getAttribute('data-image');
        image.src = 'payroll.webp'
     })
 
 
     btn4.addEventListener('click' , ()=>{
      btn4.getAttribute('data-image');
        image.src = 'vat.webp'
     })
    
    
 });


