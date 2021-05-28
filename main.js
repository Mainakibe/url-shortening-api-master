const hamburger =document.querySelector('.ham')
const closeIcon = document.querySelector('.close')
const link = document.querySelector('.mobile-nav')

// hamburger icon 
hamburger.addEventListener('click',()=>{
    if(link.classList.contains('showMenu')){
        link.classList.remove('showMenu')
        closeIcon.style.display='none'
        hamburger.style.display='block'
    }else{   
        link.classList.add('showMenu')    
        closeIcon.style.display='block'
        hamburger.style.display='none'
    }  
})

//close icon
closeIcon.addEventListener('click',()=>{
    if(link.classList.contains('showMenu')){
        link.classList.remove('showMenu')
        closeIcon.style.display='none'
        hamburger.style.display='block'
    }else{
            link.classList.add('showMenu')
            closeIcon.style.display='block'
            hamburger.style.display='none'
    } 
})