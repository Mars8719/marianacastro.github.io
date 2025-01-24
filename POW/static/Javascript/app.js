(function(){
    const listElements= document.querySelectorAll('.menu_item--sh');
    const list = document.querySelector('.menu_links');
    const menu = document.querySelector('.menu_hamburger');

    const addClick = ()=>{
        listElements.forEach(element =>{
            element.addEventListener('click', ()=>{
                console.log(element.children[1]);
                let submenu = element.children[1]; 
                let height = 0;
                element.classList.toggle('menu_item--act');
                if(submenu.clientHeight === 0){
                    height = submenu.scrollHeight;
                }

                submenu.style.height= `${height}px`;
            });   
        })  
    }
        addClick();
    const  deleteStyleHeight = ()=>{
        listElements.forEach(element=>{

            if(element.children[1].getAttribute('style')){
                element.children[1].removeAttribute('style');
                element.classList.remove('menu_item--act');
            }
        })
    }

    window.addEventListener('resize',()=>{
        if(window.innerWidth > 800){
            deleteStyleHeight();
            if(list.classList.contains('menu_links--sh'))
                list.classList.remove('menu_links--sh');
        }else{
            addClick();
        }
    });

    if (window.innerWidth <= 800){
        addClick();
    }

    menu.addEventListener('click',()=> list.classList.toggle('menu_links--sh'));

})();




