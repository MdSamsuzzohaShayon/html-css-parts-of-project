let show = false;

const menu_icon = document.getElementById('icon');
const close_btn = document.getElementById("close-btn");


const full_menu = document.getElementById("full-menu");
const showcase = document.getElementById("showcase");




menu_icon.addEventListener('click', () => {
    show = true;
    if (show) {
        full_menu.style.display = 'block';
        setTimeout(() => {
            showcase.style.display = 'none';
        }, 1000);
    }
});

close_btn.addEventListener('click', () => {
    if (show) {
        // full_menu.style.display = 'none';
        showcase.style.display = 'block';

        full_menu.style.display = 'none';
    }

})