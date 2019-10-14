const menu = document.getElementById('menu');
const ul = menu.querySelectorAll('ul');
const ulid = document.getElementById('ulid');
const li = menu.querySelectorAll('li');
const icon = document.getElementById('icon');
console.log(li);



if (window.innerWidth <= 768) {
    // location.reload();
    // console.log(menu.ELEMENT_NODE);
    // menu.style.display = 'none';
    // menu.ELEMENT_NODE
    // console.log(window.innerWidth);
    // console.log(HTMLContentElement.getDistributedNodes());
    // console.log(document.all);
    // console.log(document.nav);
    // const ul = menu.getElementsByTagName('ul');
    // console.log(ul);
    // const li = ul.item()
    // console.log(li);


    icon.addEventListener('click', e => {
        if(icon.textContent == "MENU"){
            console.log('menu button is working');
            ulid.style.display = 'block';
            icon.textContent = 'CLOSE';
            stylingElements();
            isOpen = false;
        }else{
            console.log('close button is working');
            icon.textContent = 'MENU'; 
            menu.style.height = '72px';
            ulid.style.display = 'none';
        }
    });





    function stylingElements() {
        menu.style.height = '1024px';
        ul.forEach(element => {
            element.style.textAlign = 'left';
            element.style.height = '100%';
            element.style.fontSize = '1rem';
            element.style.background = 'rgb(51, 43, 51)';
        });
        li.forEach(element => {
            element.style.display = 'block';
            element.style.textAlign = 'left';
            element.style.margin = '15px 0 0 15px';

        });
    }


}