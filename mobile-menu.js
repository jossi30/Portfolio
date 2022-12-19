let BarMenu = document.querySelector(".humberger");
let NavMenu = document.querySelector('.nav-links');

let NewClass = document.createElement('ul');
    NewClass.class = "pop-links";
    
    let li =document.createElement('li')
    li.textContent = 'portfolio';
    let li1 =document.createElement('li')
    li.textContent = 'about';
    let li2 =document.createElement('li')
    li.textContent = 'contact';

    NewClass.appendChild(li);
    NewClass.appendChild(li1);
    NewClass.appendChild(li2);
    
BarMenu.appendChild(NewClass);
