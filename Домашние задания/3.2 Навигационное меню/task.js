const links = document.querySelectorAll(".menu__link")
let open_menu = null
links.forEach(link => {
    link.onclick = () => {
        const menu_sub = link.closest(".menu__item").querySelector(".menu_sub")
        if(menu_sub){
            if (open_menu && open_menu !== menu_sub) {
                open_menu.classList.remove("menu_active");
            }
            menu_sub.classList.toggle("menu_active");
            open_menu = menu_sub;
            return false
        }
    }
});